<template v-for="i in 8">
    <div class="bg-slate-100 flex flex-col h-screen">
        <Meta description="Read the Vue Play documentation for better insights to the software." title="Documentation">
        </Meta>
        <VueNavigator class="absolute flex z-50" />
        <main style="width:100%" class="relative overflow-auto flex-1 h-full">
            <div class="relative h-full w-full flex">
                <label class="from-slate-600 bg-slate-500 shadow-md bg-gradient-to-tl fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-6 text-sm text-white rounded-lg" for="toggle">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg> </label><input class="peer hidden" type="checkbox" id="toggle" v-model="menu" />
                <div class="md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 bg-slate-100 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 h-full absolute md:relative top-0 overflow-auto">
                    <h3 class="text-slate-700 mb-4 text-center whitespace-nowrap font-bold ml-2">
                        Create a Post
                    </h3>
                    <p class="text-slate-500 mx-auto text-center" style="height:123px">
                        Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved.
                    </p>
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Category
                    </h3><select name="" class="inline-block pl-2 py-2 w-full">
                        <option v-for="i in 3">Option {{i}}</option>
                    </select>
                </div><router-view class="m-auto container grow h-full overflow-auto">
                </router-view>
                <div class="absolute h-full w-full" v-if="menu" @click="menu=false"></div>
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