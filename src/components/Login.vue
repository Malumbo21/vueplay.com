<template>
    <Transport to="body" v-if="authenticate">
        <div class="w-screen h-screen fixed bg-slate-100 top-0 left-0" style="z-index:100000">
            <button @click="autologin('github')">Sign in with GitHub</button> <button @click="autologin('google')">Sign in
                with Google</button> <button @click="autologin('facebook')">Sign in with Facebook</button> <button @click="authenticate = false">Cancel</button>
        </div>
    </Transport>
</template>
<script>
    export default {
        expose: ["login"],
        inject: ["io", "userUpdate"],
        data: () => ({
            authenticate: false
        }),
        methods: {
            login() {
                console.log('origin', location.origin)
                this.authenticate = true;
                return new Promise(resolve => {
                    this.$watch('authenticate', authenticated => {
                        if (authenticated) resolve()
                    })
                })
            },
            autologin(provider) {
                let w = 500;
                let h = 600;
                let y = window.top.outerHeight / 2 + window.top.screenY - h / 1.5;
                let x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
                let ref = window.open("https://api.vueplay.io/oauth/" + provider + "?origin=" + location.origin + "/auth", "_blank", `popup=true, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
                this.validateLogin(ref)
            },
            async validateLogin(ref, tries = 0) {
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
                        await this.io.reAuthenticate(true);
                        this.userUpdate();
                        this.authenticate = false
                    } else if (error) {
                        alert("Error " + error);
                        this.authenticate = false
                    } else if (tries >= 1000000000000) {
                        alert("Login timed out");
                        this.authenticate = false
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