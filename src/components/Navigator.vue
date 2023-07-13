<template>
    <nav style="background-image:linear-gradient(204deg, #f0dfe20d 54%, #e1ebe8ff 59%, #f0f5faff 74%);background-color:#edf7f4ff;min-height:50px" class="shadow border-slate-300 border-b">
        <div style="width:216px;background-size:contain;background-repeat:no-repeat;margin-left:10px;cursor:pointer;float:left;height:35px;margin-top:7px;margin-bottom:7px" @click="$router.push('/')" class="sm:inline hidden logo">
        </div><button @click="$router.push('/')" :class="{active: route === '/'}" class="sm:hidden">
            Home
        </button><button @click="$router.push('/features')" :class="{active: route === '/features'}" class="hover:text-green-700 text-slate-700">
            Features
        </button><button @click="$router.push('/documentation')" :class="{active: route.includes('/documentation')}" class="hover:text-green-700 text-slate-700">
            Docs
        </button><button @click="$router.push('/pricing')" :class="{active: route === '/pricing'}" class="hover:text-green-700 text-slate-700">
            Pricing
        </button> <button @click="open('https://studio.vueplay.com')" :class="{active: route === '/app'}" style="font-weight:bold;border-top-left-radius:4px;border-bottom-left-radius:4px;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:5px" class="hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow">
            Studio ⇾
        </button>
    </nav>
</template>
<script>
    export default {
        data: () => ({}),
        computed: {
            route() {
                return this.$route.path
            }
        },
        methods: {
            open(url) {
                location.href = url
            }
        }
    };
</script>
<style scoped>
    nav {
        display: block;
        text-align: right;
        width: 100%;
        height: 50px;
        background-color: #ffffffff;
        position: sticky;
        top: 0px;
    }

    button {
        border-style: none;
        padding-right: 10px;
        padding-left: 10px;
        cursor: pointer;
        transition: .3s ease color;
        height: 100%;
    }

    button.active {
        font-weight: bold;
    }

    .logo {
        background-image: url(@/assets/vueplay-logo-long.png);
    }
</style>