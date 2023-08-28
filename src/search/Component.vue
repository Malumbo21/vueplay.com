<template>
    <section class="p-6 md:pt-6 pb-24">
        <Meta :title="post?.title" :description="post?.description" :author="post?.user?.name" />
        <div class="absolute left-0 right-0 top-0 h-16 p-2 bg-slate-50">
            <div class="h-12 w-12 bg-cover rounded-full bg-slate-500 mx-auto float-right" :style="'background-image: url(' + (user?.picture || user?.value?.picture) + ')'" v-if="user?.email || user?.value?.email">
            </div>
            <div class="float-right mt-3 mr-4" v-if="user?.email || user?.value?.email">
                {{ user?.name || user?.value?.name }}
            </div>
            <div class="float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold" @click="logout" v-if="user?.email || user?.value?.email">
                Logout
            </div>
            <div class="float-left mt-3 ml-4 cursor-pointer text-slate-700 hover:text-slate-900 font-bold" @click="login" v-else="">
                Login
            </div>
        </div>
        <article class="mt-16">
            <div class="max-w-2xl mx-auto mt-4 flex">
                <div class="mt-4 grow">
                    <div class="flex">
                        <div class="w-16 inline-flex">
                            <div class="border w-11 h-12 rounded-lg cursor-pointer" :class="{'bg-emerald-50': post?.votes?.find(v => v.user_id === user?._id), 'border-emerald-400': post?.votes?.find(v => v.user_id === user?._id),'hover:bg-emerald-100': post?.votes?.find(v => v.user_id === user?._id),'hover:bg-slate-100': !post?.votes?.find(v => v.user_id === user?._id), 'border-emerald-400': post?.votes?.find(v => v.user_id === user?._id)}" @click="vote(post)">
                                <div class="h-1/2 w-full">
                                    <svg viewBox="0 0 20 10" class="pt-2 w-5 h-5 mx-auto" :class="{'fill-emerald-400': post?.votes?.find(v => v.user_id === user?._id),'fill-gray-400': !post?.votes?.find(v => v.user_id === user?._id)}">
                                        <polygon points="10,0 20,10 0,10" />
                                    </svg>
                                </div>
                                <div class="text-center h-1/2 w-full -mt-1">
                                    {{ post?.votes?.length }}
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow">
                            <h1 class="pt-2.5 text-xl font-semibold" v-if="!edit">
                                {{ post?.title }}
                            </h1><input class="pt-2.5 text-xl font-semibold" v-model="post.title" v-else-if="post" />
                        </div>
                    </div>
                    <div class="mt-4 flex">
                        <div class="w-16 inline-flex">
                            <div class="w-11">
                                <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto" :style="'background-image: url(' + post?.user?.picture + ')'">
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                            <h1 class="font-semibold mt-0.5">
                                {{ post?.user?.name}}
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="inline-flex w-32"><img class="rounded w-full" :src="post.icon || background" v-if="post?.icon" /></div>
            </div>
            <div class="max-w-2xl mx-auto mb-8 mt-2 flex" v-if="post">
                <div class="w-16 inline-flex">
                    <div class="w-16"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-700 mb-3" v-if="!edit">
                        {{ post?.description }}
                    </p> <textarea v-model="post.description" rows="" cols="" class="rounded w-full h-32 mb-3 border" v-else="" placeholder="Description" />
                    <VueSfcViewer title="Vue Single File Viewer" class="rounded bg-slate-50 my-6 w-full" style="height:600px" :id="id" />
                    <select v-model="post.category_id" class="mb-2 w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-if="edit">
                        <option v-for="category in categories" :value="category._id">
                            {{category.title}}
                        </option>
                    </select> <button class="mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2" @click="selectImage" v-if="edit">
                        Select icon
                    </button><button class="mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2" @click="post.icon = ''" v-if="edit">
                        Remove icon
                    </button><button class="mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2" @click="post.public = !post.public" v-if="edit">
                        {{post?.public ? 'Public' : 'Private' }}
                    </button><button class="mr-2 bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2" @click="edit = !edit" v-if="edit">
                        Cancel
                    </button><button class="bg-emerald-400 text-white  hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2" @click="savePost()" v-if="edit">
                        Save
                    </button>
                    <div class="mt-2 flex text-gray-500">
                        <span class="text-xs">
                            {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                        </span> <span class="text-xs ml-1" v-if="post?.user?._id === user?._id" @click="remove(post)">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </span> <span class="text-xs ml-1" v-if="!edit && post?.user?._id === user?._id">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-0.5" @click="edit = true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg> </span>
                    </div>
                    <div class="mt-8">
                        <form class="mt-4">
                            <div class="relative">
                                <input type="search" id="default-search" class="w-full h-10 block max-w-full pl-4 pr-2 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment" required="" v-model="comment" @keypress.enter.prevent="postComment()" />
                            </div>
                        </form>
                    </div>
                    <div class=" mt-10">
                        <p class="text-gray-500">
                            Activity Feed...
                        </p>
                    </div>
                </div>
            </div>
        </article>
        <article v-for="comment in post?.comments">
            <div class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11">
                        <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto" :style="'background-image: url(' + comment?.user?.[0]?.picture + ')'">
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                    <h1 class="font-semibold mt-0.5">
                        {{ comment.user?.[0]?.name }}
                    </h1>
                </div>
            </div>
            <div class="max-w-2xl  mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-16"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-700 mb-3" v-if="!comment.edit">
                        {{ comment.comment }}
                    </p><textarea v-model="comment.comment" rows="" cols="" class="w-full h-16 mb-3 border" v-else="">
</textarea><button class="bg-emerald-400 text-white  hover:bg-emerald-500 shadow rounded px-2 mb-2 py-2" v-if="comment.edit" @click="saveComment(comment)">
                        Save
                    </button>
                    <div class="flex text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 cursor-pointer" @click="like(comment)" :class="{'fill-red-400': comment.likes.length}">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg> <span class="text-xs">
                            {{comment.likes?.length &gt; 1 ? comment.likes?.length + ' likes' : ''}}
                            {{comment.likes?.length === 1 ? comment.likes?.length + ' like' : ''}} · {{ moment(comment.createdAt).format('MMMM DD, YYYY') }}
                        </span> <span class="text-xs ml-1" v-if="comment?.user?.[0]?._id === user?._id">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-1" @click="removeComment(comment)">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </span> <span class="text-xs ml-1" v-if="comment?.user?.[0]?._id === user?._id && !comment.edit" @click="comment.edit = true">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg> </span>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    import VueSfcViewer from "@/vueplay/VueSfcViewer.vue";
    import Meta from "@/components/Meta.vue";
    import moment from "moment";
    import defaultBase64Image from "@/logic/defaultBase64Image.js";
    console.log('viewer', VueSfcViewer)
    export default {
        inject: ["io", "user", "login", "logout"],
        props: {
            id: {
                type: String,
                default: "64b1469b691f1cd6f7ad4328"
            }
        },
        components: {
            VueSfcViewer,
            Meta
        },
        emit: ["post"],
        data: () => ({
            tailwind: true,
            comment: "",
            edit: false,
            post: null,
            background: defaultBase64Image,
            moment,
            categories: []
        }),
        created() {
            this.refresh()
        },
        methods: {
            async getCategories() {
                const categories = await this.io.service("types/categories").find();
                this.categories = categories?.data || []
            },
            async postComment() {
                if (await this.login()) {
                    await this.io.service("types/comments").create({
                        application_id: this.post._id,
                        comment: this.comment
                    });
                    await this.refresh();
                    this.comment = "";
                    alert("Posted!")
                } else {
                    alert("You need to be logged in to post a comment")
                }
            },
            async saveComment(comment) {
                await this.io.service("types/comments").patch(comment._id, {
                    comment: comment.comment
                });
                comment.edit = false;
                alert("Saved")
            },
            async removeComment(comment) {
                if (confirm("Delete comment?")) {
                    await this.io.service("types/comments").remove(comment._id);
                    await this.refresh();
                    alert("Removed!")
                }
            },
            async savePost() {
                await this.io.service("types/applications").patch(this.post._id, {
                    title: this.post.title,
                    description: this.post.description,
                    icon: this.post.icon,
                    public: this.post.public,
                    category_id: this.post.category_id
                });
                await this.refresh();
                this.edit = false;
                alert("Saved")
            },
            async remove(post) {
                if (confirm("Delete component?")) {
                    await this.io.service("types/applications").remove(post._id);
                    alert("Removed!");
                    this.$router.push("/search")
                }
            },
            async refresh() {
                this.post = await this.io.service("types/applications").get(this.id);
                this.getCategories();
                this.$emit("post", this.post)
            },
            async myVote(post) {
                const votes = await this.io.service("types/votes").find({
                    query: {
                        application_id: post._id,
                        user_id: this.user?._id
                    }
                });
                return votes?.[0] || false
            },
            async vote(post) {
                if (await this.login()) {
                    const myVote = await this.myVote(post);
                    if (myVote) {
                        await this.io.service("types/votes").remove(myVote._id)
                    } else {
                        await this.io.service("types/votes").create({
                            application_id: post._id
                        })
                    }
                    await this.refreshVotes(post)
                } else {
                    alert("You have to be logged in to cast a vote")
                }
            },
            async refreshVotes(post) {
                post.votes = await this.io.service("types/votes").find({
                    query: {
                        application_id: post._id
                    }
                })
            },
            async myLike(comment) {
                const likes = await this.io.service("types/likes").find({
                    query: {
                        comment_id: comment._id,
                        user_id: this.user?._id
                    }
                });
                return likes?.[0] || false
            },
            async like(comment) {
                if (await this.login()) {
                    const myLike = await this.myLike(comment);
                    if (myLike) {
                        await this.io.service("types/likes").remove(myLike._id)
                    } else {
                        await this.io.service("types/likes").create({
                            comment_id: comment._id
                        })
                    }
                    await this.refreshLikes(comment)
                } else {
                    alert("You have to be logged in to like")
                }
            },
            async refreshLikes(comment) {
                comment.likes = await this.io.service("types/likes").find({
                    query: {
                        comment_id: comment._id
                    }
                })
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
                        this.post.icon = await this.resizeImage(e.target.result)
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
<style scoped></style>