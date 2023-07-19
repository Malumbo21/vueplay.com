<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <Login ref="auth" @user="authenticated" @cancel="cancelled">
        </Login>
        <article v-for="post in posts" class="max-w-2xl mx-auto mb-6 mt-4 flex">
            <div class="w-16 inline-flex">
                <div class="bg-slate-50 border w-10 h-12 rounded-lg">
                    <div class="h-1/2 w-full">
                    </div>
                    <div class="text-center h-1/2 w-full">
                        45
                    </div>
                </div>
            </div>
            <div class="flex-col inline-flex grow">
                <button @click="remove(post._id)">Delete</button>
                <h1 class="font-semibold">
                    {{ post.title }} {{ post.votes?.length }}
                </h1>
                <p class="">
                    {{ post.description }} {{ post.comments?.length }}
                </p>
            </div>
            <div class="w-16 inline-flex">
                <div class="w-1/2">
                </div>
                <div class="w-1/2 text-right">
                    45
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