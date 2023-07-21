<template>
    <div>
        <router-view />
        <Login ref="auth" />
    </div>
</template>
<script>
    import Login from "@/components/Login.vue";
    let scope = null;
    export default {
        components: {
            Login
        },
        created() {
            scope = this
        },
        methods: {
            async login() {
                console.log("calling ref", this.$refs);
                return this.$refs?.auth?.login()
            }
        },
        provide: () => ({
            async login() {
                /*
                                                                Notice: 'this' returns child component, perhaps it is a bug?
                                                                Should return (this) component.
                                                                Could try to upgrade vue to newer version, perhaps it has been fixed.
                                                                Workaround: create a local scope variable and attach this
                                                            */
                console.log("Logging in");
                return scope.login()
            }
        })
    };
</script>