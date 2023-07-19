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
            <div v-for="post in posts" class="mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-800 mb-3">
                        {{ post.description }}
                    </p> <span class="text-gray-500 text-xs">
                        {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                    </span>
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
        <article>
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
            <div v-for="post in posts" class="mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-800 mb-3">
                        {{ post.description }}
                    </p>
                    <div class="flex text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg><span class="text-xs">
                            · {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                        </span>
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