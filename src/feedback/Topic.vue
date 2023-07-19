<template>
    <section class="p-6 md:pt-6 pb-24">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <Login ref="auth" @user="authenticated" @cancel="cancelled">
        </Login>
        <div class="flex-col max-w-2xl mx-auto lg:mb-8 flex text-lg lg:flex-row">
            <div class="font-light">
                <span>
                    Showing
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline mx-1">
                    <option>
                        Latest
                    </option>
                </select><span>
                    posts in
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline ml-1">
                    <option>
                        All Categories
                    </option>
                </select>
            </div>
        </div>
        <article v-for="post in posts" class="max-w-2xl mx-auto mt-4 flex">
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
        </article>
        <article v-for="post in posts" class="max-w-2xl mx-auto mt-4 flex">
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
        </article>
        <article v-for="post in posts" class="mx-auto mb-8 mt-2 flex">
            <div class="w-16 inline-flex">
                <div class="w-11"> </div>
            </div>
            <div class="grow">
                <p class="text-gray-800 mb-3">
                    {{ post.description }}
                </p>
                <p class="text-gray-500 text-xs">
                    {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                </p>
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