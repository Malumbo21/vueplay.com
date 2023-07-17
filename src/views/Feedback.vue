<template v-for="i in 8">
    <div class="bg-slate-100 flex flex-col h-screen">
        <Meta description="Read the Vue Play documentation for better insights to the software." title="Documentation">
        </Meta>
        <VueNavigator class="absolute flex z-50" />
        <main style="width:100%" class="relative overflow-auto flex-1 h-full">
            <div class="relative h-full w-full flex">
                <label class="from-slate-600 bg-slate-500 shadow-md bg-gradient-to-tl fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-6 text-sm text-white rounded-lg" for="toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                    </svg>
                </label><input class="peer hidden" type="checkbox" id="toggle" v-model="menu" />
                <div class="md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 bg-slate-100 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 h-full absolute md:relative top-0 overflow-auto">
                    <h3 class="text-slate-700 mb-4 text-center whitespace-nowrap font-bold">
                        Create a Post
                    </h3>
                    <p class="text-slate-500 mx-auto text-center" style="height:123px">
                        Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be improved.
                    </p>
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Category
                    </h3><select name="" class="inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded">
                        <option v-for="i in 3">Option {{i}}</option>
                    </select>
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Title
                    </h3><input class="inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded" placeholder="Short, descriptive title" />
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Description
                    </h3><textarea v-model="" rows="" cols="" class="resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded" placeholder="Give helpful details. Add screenshots where relevant." /><button class="h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400">
                        <img src="data:image/jpeg;base64,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" class="" style="height:100%" />
                    </button><button class="hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6">
                        POST FEEDBACK
                    </button>
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