<template>
    <section class="p-6 md:pt-6 pb-24">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <Login ref="auth" @user="authenticated" @cancel="cancelled">
        </Login>
        <article>
            <div v-for="post in posts" class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="border w-11 h-12 rounded-lg">
                        <div class="h-1/2 w-full">
                            <svg viewBox="0 0 20 10" class="pt-2 w-5 h-5 fill-gray-400 mx-auto">
                                <polygon points="10,0 20,10 0,10" />
                            </svg>
                        </div>
                        <div class="text-center h-1/2 w-full -mt-1">
                            {{ post.votes?.length }}
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow">
                    <h1 class="pt-2.5 text-xl font-semibold">
                        {{ post.title }} {{ post.votes?.length }}
                    </h1>
                </div>
            </div>
            <div v-for="post in posts" class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11">
                        <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto">
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                    <h1 class="font-semibold mt-0.5">
                        {{ post.user[0].email }}
                    </h1>
                </div>
            </div>
            <div v-for="post in posts" class="max-w-2xl mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <img src="data:image/jpeg;base64,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" class="w-full mb-4" />
                    <p class="text-gray-700 mb-3">
                        {{ post.description }}
                    </p><textarea v-model="post.description" rows="" cols="" class="w-full h-32 mb-3 border">
</textarea>
                    <div class="flex text-gray-500">
                        <span class="text-xs">
                            {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                        </span> <span class="text-xs ml-1">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </span> <span class="text-xs ml-1">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg> </span>
                    </div>
                    <div class="mt-8">
                        <form class="lg:float-right mt-4 lg:mt-0">
                            <div class="relative">
                                <input type="search" id="default-search" class="w-full h-10 lg:w-52 lg:h-full block max-w-full pl-4 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment" required="" />
                            </div>
                        </form>
                    </div>
                    <div class=" mt-10">
                        <p class="text-gray-500">
                            Activity Feed
                        </p>
                    </div>
                </div>
            </div>
        </article>
        <article v-for="i in 5">
            <div v-for="post in posts" class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11">
                        <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto">
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                    <h1 class="font-semibold mt-0.5">
                        {{ post.user[0].email }}
                    </h1>
                </div>
            </div>
            <div v-for="post in posts" class="max-w-2xl  mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-700 mb-3">
                        {{ post.description }}
                    </p><textarea v-model="post.description" rows="" cols="" class="w-full h-16 mb-3 border">
</textarea>
                    <div class="flex text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg> <span class="text-xs">
                            {{1 &gt; 0 ? '1 likes' : ''}} · {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                        </span> <span class="text-xs ml-1">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </span> <span class="text-xs ml-1">
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
    import Meta from "@/components/Meta.vue";
    import Login from "@/components/Login.vue";
    import moment from "moment";
    export default {
        components: {
            Meta,
            Login
        },
        inject: ["io", "user"],
        data: () => ({
            posts: [],
            moment
        }),
        created() {
            this.getPosts()
        },
        methods: {
            authenticated(user) {
                alert("Authenticated!");
                console.log("authenticated", user);
                console.log("global user", this.user)
            },
            cancelled() {
                alert("Cancelled authentication!");
                console.log("global user", this.user)
            },
            async getPosts() {
                this.posts = await this.io.service("types/feedback").find({ // query: {}
                })
            },
            async vote(id) {
                if (this.user.value) {
                    await this.io.service("types/feedback").patch(id, {
                        vote: true
                    });
                    await this.getPosts();
                    alert("Voted!")
                } else {
                    await this.$refs.auth.login();
                    console.log("Logged in?", this.user)
                }
            },
            async remove(id) {
                await this.io.service("types/feedback").remove(id);
                await this.getPosts();
                alert("Removed!")
            }
        }
    };
</script>
<style scoped></style>