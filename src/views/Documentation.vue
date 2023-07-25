<template v-for="i in 8">
    <div class="">
        <Meta description="Read the Vue Play documentation for better insights to the software." title="Documentation">
        </Meta>
        <VueNavigator class="absolute flex z-50" />
        <main style="width:100%" class="relative h-full bg-white">
            <div class="relative h-full w-full flex">
                <label class="from-slate-600 bg-slate-500 shadow-md bg-gradient-to-tl fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-6 text-sm text-white rounded-lg" for="toggle">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg> </label><input class="peer hidden" type="checkbox" id="toggle" v-model="menu" />
                <div class="absolute overflow-auto top-0 bottom-0 bg-white md:p-7 md:w-80 xl:w-80 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 md:relative">
                    <h3 class="whitespace-nowrap font-bold text-slate-800 ml-2">
                        Getting Started
                    </h3>
                    <ul class="space-y-1 ml-3 mt-4 border-l border-slate-400">
                        <li class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" @click="$router.push('/documentation'), menu = false" :class="{ 'font-semibold': $route.path === '/documentation', 'border-emerald-400': $route.path === '/documentation', 'border-l-4': $route.path === '/documentation' }" style="height:25px">
                            Introduction
                        </li>
                        <li @click="$router.push('/documentation/deployment'), menu = false" class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" :class="{ 'font-semibold': $route.path === '/documentation/deployment', 'border-emerald-400': $route.path === '/documentation/deployment', 'border-l-4': $route.path === '/documentation/deployment' }">
                            Deployment
                        </li>
                        <li @click="$router.push('/documentation/keyboard-shortcuts'), menu = false" class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" :class="{ 'font-semibold': $route.path === '/documentation/keyboard-shortcuts', 'border-emerald-400': $route.path === '/documentation/keyboard-shortcuts', 'border-l-4': $route.path === '/documentation/keyboard-shortcuts' }">
                            Keyboard Shortcuts
                        </li>
                    </ul>
                    <h3 class="mt-6 whitespace-nowrap font-bold text-slate-800 ml-2">
                        General
                    </h3>
                    <ul class="space-y-1 ml-3 mt-4 border-l border-slate-400">
                        <li class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" @click="$router.push('/documentation/limitations'), menu = false" :class="{ 'font-semibold': $route.path === '/documentation/limitations', 'border-emerald-400': $route.path === '/documentation/limitations', 'border-l-4': $route.path === '/documentation/limitations' }" style="height:25px">
                            Limitations
                        </li>
                        <li class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" @click="$router.push('/documentation/composition-api'), menu = false" :class="{ 'font-semibold': $route.path === '/documentation/composition-api', 'border-emerald-400': $route.path === '/documentation/composition-api', 'border-l-4': $route.path === '/documentation/composition-api' }" style="height:25px">
                            Composition API
                        </li>
                        <li class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" @click="$router.push('/documentation/typescript'), menu = false" :class="{ 'font-semibold': $route.path === '/documentation/typescript', 'border-emerald-400': $route.path === '/documentation/typescript', 'border-l-4': $route.path === '/documentation/typescript' }" style="height:25px">
                            TypeScript
                        </li>
                        <li @click="$router.push('/documentation/v-bind'), menu = false" class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" :class="{ 'font-semibold': $route.path === '/documentation/v-bind', 'border-emerald-400': $route.path === '/documentation/v-bind', 'border-l-4': $route.path === '/documentation/v-bind' }">
                            v-bind
                        </li>
                    </ul>
                    <h3 class="mt-6 whitespace-nowrap font-bold text-slate-800 ml-2">
                        Other
                    </h3>
                    <ul class="space-y-1 ml-3 mt-4 border-l border-slate-400">
                        <li class="hover:text-slate-900 text-slate-700 cursor-pointer pl-6" @click="$router.push('/documentation/faq'), menu = false" :class="{ 'font-semibold': $route.path === '/documentation/faq', 'border-emerald-400': $route.path === '/documentation/faq', 'border-l-4': $route.path === '/documentation/faq' }" style="height:25px">
                            FAQ
                        </li>
                    </ul>
                </div><router-view class="m-auto container grow h-full">
                </router-view>
                <div class="absolute h-full w-full" v-if="menu" @click="menu = false"></div>
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Footer from "@/components/Footer.vue";
    import Meta from "@/components/Meta.vue";
    export default {
        components: {
            VueNavigator,
            Footer,
            Meta
        },
        data: () => ({
            menu: false
        }),
        methods: {
            open(url) {
                location.href = url
            }
        }
    };
</script>
<style scoped>
    main {
        display: inline-block;
    }

    header {
        text-align: center;
        font-family: verdana;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    h1 {
        font-size: 60px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    em {
        font-style: normal;
        color: rgba(238, 76, 215, 1);
    }

    button.higlighted {
        color: #fff;
        background-color: #74AE86;
    }

    button.higlighted:hover {
        background-color: #8cab96ff;
    }

    section button {
        border: none;
        padding-top: 10px;
        padding-right: 15px;
        padding-bottom: 10px;
        padding-left: 15px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 17px;
        margin-right: 20px;
        cursor: pointer;
        color: #072c38ff;
        transition: .5s ease background;
        background-color: rgb(235, 235, 235);
    }

    section button:last-child {
        margin-right: 0px;
    }

    section button:hover {
        background-color: #e6e6e6ff;
    }

    .feature-list {
        background-color: #74AE86;
        color: #ffffffff;
        text-align: left;
        padding: 20px 30px;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        margin-bottom: 50px;
        margin-top: 40px;
        max-width: calc(100% - 40px);
        margin-right: auto;
        margin-left: auto;
        width: 500px;
    }

    .feature-list>div {
        background-image: url(@/assets/check.png);
        background-position: 0px 6px;
        background-repeat: no-repeat;
        background-size: auto 20px;
        padding: 5px 30px;
    }

    label:has(+input:checked) {
        color: #000000ff;
        background: #ffffff00;
        box-shadow: 0px 0;
    }

    .border-l-4 {
        margin-left: -1px;
    }
</style>