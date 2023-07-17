<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker.">
        </Meta>
        <Login ref="auth" @user="authenticated" @cancel="cancelled">
        </Login>
        <article v-for="post in posts" class="max-w-2xl mx-auto mb-6 mt-4 shadow border rounded-lg bg-white px-12 py-14 overflow-auto">
            <button @click="remove(post._id)">Delete</button>
            <h1 class="mb-12 text-4xl">
                {{ post.title }} {{ post.votes?.length }}
            </h1>
            <div class="bg-slate-50 border mb-6 rounded-lg p-8">
                <p class="text-lg">
                    {{ post.description }} {{ post.comments?.length }}
                </p>
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
        inject: ['io', 'user'],
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
                });
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
                alert('Removed!')
            },
        }
    };
</script>
<style scoped></style>