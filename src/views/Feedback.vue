<template v-for="i in 8">
    <div class="bg-white flex flex-col h-screen">
        <Meta description="Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the exp" title="Feedback" />
        <VueNavigator class="absolute flex z-50" />
        <main style="width:100%" class="relative overflow-auto flex-1 h-full">
            <div class="relative h-full w-full flex">
                <label class="fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-4 ml-3 text-sm text-slate-900 rounded-lg" for="toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                    </svg> </label><input class="peer hidden" type="checkbox" id="toggle" v-model="menu" />
                <div class="bg-white md:w-96 md:p-7 md:shadow-md shadow-lg pt-24 border-r border-slate-200 peer-checked:px-7 peer-checked:pt-24 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 h-full absolute md:relative top-0 overflow-auto">
                    <h3 class="text-slate-700 mb-4 text-center whitespace-nowrap font-bold">
                        Create a Post
                    </h3>
                    <p class="text-slate-500 mx-auto text-center" style="height:123px">
                        Give feedback about the playground, UX and UI of Vue Play Studio. Explain how the experience can be
                        improved.
                    </p>
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Category
                    </h3><select name="" class="inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded" v-model="category">
                        <option v-for="category in categories" :value="category._id">
                            {{ category.title }}
                        </option>
                    </select>
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Title
                    </h3><input class="inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded" placeholder="Short, descriptive title" v-model="title" />
                    <h3 class="text-slate-500 mt-4 font-medium mb-4 whitespace-nowrap">
                        Description
                    </h3><textarea v-model="description" rows="" cols="" class="resize-none h-24 inline-block pl-2 py-2 w-full border-slate-300 border overflow-hidden border-solid rounded" placeholder="Give helpful details. Add screenshot where relevant." />
                    <div class="h-16"><button class="w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-400 float-left" style="background-size:cover" :style="'background-image: url(' + (screenshot || background) + ')'" @click="selectImage">

                        </button><button class="ml-1 w-10 h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6 bg-slate-100 p-0 float-left" style="background-size:cover" @click="screenshot = ''" v-if="screenshot">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mx-auto">
                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                            </svg> </button><button class="hover:bg-slate-800 text-xs px-3 bg-slate-700 text-slate-50 float-right h-10 border-slate-300 border overflow-hidden border-solid rounded mt-6" @click="post">
                            POST FEEDBACK
                        </button> </div>
                </div>
                <Topics class="m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative" ref="topics" />
                <div class="absolute h-full w-full" v-if="menu" @click="menu = false" />
            </div>
        </main>
        <Footer />
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Footer from "@/components/Footer.vue";
    import Meta from "@/components/Meta.vue";
    import Topics from "@/feedback/Topics.vue";
    import defaultBase64Image from "@/logic/defaultBase64Image.js";
    export default {
        components: {
            VueNavigator,
            Footer,
            Meta,
            Topics
        },
        inject: ["io", "user", "login", "test", "yam"],
        data: () => ({
            category: "",
            title: "",
            description: "",
            screenshot: "",
            background: defaultBase64Image,
            menu: false,
            categories: []
        }),
        mounted() {
            this.getCategories()
        },
        methods: {
            reset() {
                this.category = this.categories?.[0]?._id || "";
                this.title = "";
                this.description = "";
                this.screenshot = ""
            },
            async getCategories() {
                const categories = await this.io.service("types/feedback-categories").find({
                    query: {
                        $sort: {
                            order: 1
                        }
                    }
                });
                this.categories = categories?.data || [];
                if (!this.category) this.category = this.categories?.[0]?._id || ""
            },
            async post() {
                if (await this.login()) {
                    await this.io.service("types/feedback").create({
                        category_id: this.category,
                        title: this.title,
                        description: this.description,
                        screenshot: this.screenshot
                    });
                    this.reset();
                    alert("Thank you for posting feedback!");
                    this.$refs.topics.refresh("latest")
                } else {
                    alert("Could not log in")
                }
            },
            open(url) {
                location.href = url
            },
            selectImage() {
                let input = document.createElement("input");
                input.type = "file";
                input.multiple = false;
                input.accept = "image/*";
                input.onchange = async () => {
                    let files = Array.from(input.files);
                    let file = files[0];
                    let reader = new FileReader;
                    reader.readAsDataURL(file);
                    reader.onload = async e => {
                        this.screenshot = await this.resizeImage(e.target.result)
                    };
                    reader.onerror = e => {
                        alert("Could not load file");
                        console.log(e)
                    }
                };
                input.click()
            },
            resizeImage(src) {
                return new Promise((resolve, reject) => {
                    let MAX_WIDTH = 1000;
                    let MAX_HEIGHT = 1000;
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    let image = new Image;
                    image.onload = () => {
                        let width = image.width;
                        let height = image.height;
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(image, 0, 0, width, height);
                        let dataurl = canvas.toDataURL("image/png", 0.7);
                        resolve(dataurl)
                    };
                    image.src = src
                })
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
        transform: rotateZ(45deg);
    }

    .border-l-4 {
        margin-left: -1px;
    }
</style>