<template>
    <Transport to="body" v-show="authenticate || true">
        <div class="w-screen h-screen fixed bg-slate-100 top-0 left-0 border-box" style="z-index:100000">
            <div class="flex-col flex items-center justify-center min-h-screen bg-gray-100"><button class="w-64 mb-2 inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" @click="autologin('github')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="h-6 w-6 mr-2">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg> <span>
                        Continue with Github
                    </span> </button><button class="w-64 mb-2 inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" @click="autologin('google')">
                    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1">
                        <title>Google-color</title>
                        <desc>Created with Sketch.</desc>
                        <defs> </defs>
                        <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Color-" transform="translate(-401.000000, -860.000000)">
                                <g id="Google" transform="translate(401.000000, 860.000000)">
                                    <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path>
                                    <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path>
                                    <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path>
                                    <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path>
                                </g>
                            </g>
                        </g>
                    </svg> <span>Continue with Google</span> </button><button class="w-64 mb-8 inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" @click="autologin('facebook')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="h-6 w-6 mr-2" fill="#3F51B5">
                        <path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                    </svg> <span>
                        Continue with Facebook
                    </span> </button><button class="w-64 inline-flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" @click="authenticate = false">
                    <span>
                        Cancel
                    </span> </button> </div>
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
                const scope = this;
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
                        await this.io.authentication.setAccessToken(token); // await this.io.reAuthenticate(true);
                        // await this.io.reAuthenticate(true);
                        // await this.io.reAuthenticate(true);
                        // await this.io.reAuthenticate(true);
                        const user = (await this.io.reAuthenticate())?.user;
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