<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <Login ref="auth" @user="authenticated" @cancel="cancelled">
        </Login>
        <article v-for="post in posts" class="max-w-2xl mx-auto mb-8 mt-4 flex">
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
            <div class="flex-col inline-flex grow mr-4">
                <h1 class="font-semibold">
                    {{ post.title }} {{ post.votes?.length }}
                </h1>
                <p class="text-gray-500">
                    {{ post.description }}
                </p>
            </div>
            <div class="w-12 inline-flex">
                <div class="w-1/2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-gray-400 w-5 h-5 mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg> </div>
                <div class="w-1/2 text-right">
                    {{ post.comments?.length }}
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    import Meta from "@/components/Meta.vue";
    import Login from "@/components/Login.vue";
    export default {
        components: {
            Meta,
            Login
        },
        inject: ["io", "user"],
        data: () => ({
            posts: []
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