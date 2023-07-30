<template>
    <nav style="min-height:50px" class="sticky text-right shadow bg-slate-50 w-full top-0 block">
        <div style="width:216px;background-size:contain;background-repeat:no-repeat;margin-left:10px;cursor:pointer;float:left;height:35px;margin-top:7px;margin-bottom:7px" @click="$router.push('/')" class="sm:inline hidden logo">
        </div><button @click="$router.push('/')" :class="{active: route === '/'}" class="hover:text-green-700 text-slate-700 pr-2 sm:hidden">
            Home
        </button><button @click="$router.push('/features')" :class="{active: route === '/features'}" class="hover:text-green-700 text-slate-700 px-2">
            Features
        </button><button @click="$router.push('/pricing')" :class="{active: route === '/pricing'}" class="hover:text-green-700 text-slate-700 px-2">
            Pricing
        </button> <button @click="submenu=true" :class="{active: subRoute}" class="relative hover:text-green-700 text-slate-700 pr-2" @mouseenter="submenu=true" @mouseleave="submenu=false">
            <span class="">
                More...
            </span>
            <div class="bg-slate-50 border-y-slate-100 border-t border-b-2 right-0 top-full absolute shadow pb-2" v-if="submenu">
                <button @click="submenu=false, $router.push('/feedback')" :class="{active: route.includes('/feedback')}" class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right">
                    Feedback
                </button> <button @click="submenu=false, $router.push('/search')" :class="{active: route.includes('/search')}" class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right">
                    Components
                </button><button @click="submenu=false, $router.push('/documentation')" :class="{active: route.includes('/documentation')}" class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right">
                    Documentation
                </button>
            </div>
        </button> <button @click="open('https://studio.vueplay.com')" :class="{active: route === '/app'}" style="font-weight:bold;border-top-left-radius:4px;border-bottom-left-radius:4px;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:5px" class="px-3 hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow">
            Studio ⇾
        </button>
    </nav>
</template>
<script>
    export default {
        data: () => ({
            submenu: false
        }),
        computed: {
            route() {
                return this.$route.path
            },
            subRoute() {
                const routes = ["/documentation", "/feedback"];
                for (const route of routes) {
                    if (this.$route.path.includes(route)) return true
                }
                return false
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
        height: 50px;
    }

    button {
        border-style: none;
        cursor: pointer;
        transition: .3s ease color;
        height: 100%;
    }

    button.active {
        font-weight: bold;
    }

    button.active div {
        font-weight: normal;
    }

    .logo {
        background-image: url(@/assets/vueplay-logo-long.webp);
    }
</style>