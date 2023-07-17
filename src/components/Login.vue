<template>
    <Transport to="body" v-show="authenticate">
        <div class="w-screen h-screen fixed bg-slate-100 top-0 left-0" style="z-index:100000">
            <button @click="autologin('github')" class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">Sign in with GitHub</button> <button @click="autologin('google')" class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">
                Sign in
                with Google
            </button> <button @click="autologin('facebook')" class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">Sign in with Facebook</button>
            <button @click="authenticate = false" class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">Cancel</button>
        </div>
    </Transport>
</template>
<script>
    export default {
        emits: ["user", "cancel"],
        expose: ["login"],
        inject: ["io", "user", "userUpdate"],
        data: () => ({
            authenticate: false,
            origin: location.origin.startsWith("http") ? location.origin : "https://studio.vueplay.com"
        }),
        methods: {
            login() {
                this.authenticate = true;
                return new Promise(resolve => {
                    this.$watch("authenticate", authenticated => {
                        if (authenticated) resolve()
                    })
                })
            },
            autologin(provider) {
                let w = 500;
                let h = 600;
                let y = window.top.outerHeight / 2 + window.top.screenY - h / 1.5;
                let x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
                let ref = window.open("https://api.vueplay.io/oauth/" + provider + "?origin=" + this.origin + "/auth", "_blank", `popup=true, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
                this.validateLogin(ref)
            },
            async validateLogin(ref, tries = 0) {
                const scope = this
                let token = "";
                let error = "";
                try {
                    token = this.getToken(ref.location.hash)
                } catch (e) {}
                try {
                    error = this.getError(ref.location.hash)
                } catch (e) {}
                if (!ref.closed && !error && !token && tries < 1000000000000) setTimeout(() => this.validateLogin(ref, ++tries), 100);
                else if (!ref.closed) ref.close();
                setTimeout(async () => {
                    if (token) {
                        await this.io.authentication.setAccessToken(token);
                        // await this.io.reAuthenticate(true);
                        const user = (await this.io.reAuthenticate())?.user
                        this.userUpdate();
                        this.authenticate = false;
                        console.log("emitting user", this.user);
                        console.log("emitting user...", user);
                        scope.$emit("user", user)
                    } else if (error) {
                        alert("Error " + error);
                        this.authenticate = false;
                        console.log("emitting cancel");
                        scope.$emit("cancel")
                    } else if (tries >= 1000000000000) {
                        alert("Login timed out");
                        this.authenticate = false;
                        console.log("emitting cancel");
                        scope.$emit("cancel")
                    }
                })
            },
            getToken(hash) {
                if (hash.startsWith("#access_token=")) {
                    let token = hash.replace("#access_token=", "");
                    return token
                }
                return ""
            },
            getError(hash) {
                if (hash.startsWith("#error=")) {
                    let error = hash.replace("#error=", "");
                    return error
                }
                return ""
            }
        }
    };
</script>
<style scoped></style>