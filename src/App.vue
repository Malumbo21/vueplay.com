<template>
    <div class="bg-sky-950">
        <router-view />
        <Login ref="auth" />
    </div>
</template>
<script>
    import Login from "@/components/Login.vue";
    export default {
        components: {
            Login
        },
        methods: {
            async login() {
                return this.$refs?.auth?.login()
            }
        },
        provide() {
            return {
                login: this.login
            }
        }
    };
</script>