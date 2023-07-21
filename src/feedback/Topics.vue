<template>
    <section class="p-6 md:pt-6 pb-24">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker." />
        <div class="h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row">
            <div class="font-light">
                <span>
                    Showing
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline mx-1">
                    <option>
                        Latest
                    </option>
                </select><span>
                    posts in
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline ml-1" v-model="category">
                    <option value="">
                        All Categories
                    </option>
                    <option v-for="category in categories" :value="category._id">
                        {{ category.title }}
                    </option>
                </select>
            </div>
            <div class="lg:grow">
                <div class="lg:float-right mt-4 lg:mt-0 lg:h-full">
                    <div class="relative lg:h-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div> <input type="search" id="default-search" class="w-full h-10 lg:w-52 lg:h-full max-w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required="" v-model="term" @change="refresh()" />
                    </div>
                </div>
            </div>
        </div>
        <article v-for="post in posts" class="max-w-2xl mx-auto mb-8 mt-4 flex">
            <div class="w-16 inline-flex">
                <div class="hover:bg-slate-100 cursor-pointer border w-11 h-12 rounded-lg" @click="vote(post)" :class="{ 'bg-emerald-50': post?.votes?.some(v => v.user_id === user._id || v.user_id === user.value._id),
'border-emerald-400': post?.votes?.some(v => v.user_id === user._id || v.user_id === user.value._id), 'hover:bg-emeral-100': post?.votes?.some(v => v.user_id === user._id || v.user_id === user.value._id) }">
                    <div class="h-1/2 w-full">
                        <svg viewBox="0 0 20 10" class="pt-2 w-5 h-5 fill-gray-400 mx-auto" :class="{ 'fill-emerald-400': post?.votes?.some(v => v.user_id === user._id || v.user_id === user.value._id)}">
                            <polygon points="10,0 20,10 0,10" />
                        </svg>
                    </div>
                    <div class="text-center h-1/2 w-full -mt-1">
                        {{ post.votes?.length }}
                    </div>
                </div>
            </div>
            <div class="overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow mr-4 cursor-pointer" @click="$router.push('/feedback/' + post._id)">
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
    export default {
        components: {
            Meta
        },
        inject: ["io", "user", "login"],
        expose: ["refresh"],
        data: () => ({
            term: "",
            categories: [],
            posts: [],
            category: ""
        }),
        watch: {
            category() {
                this.refresh()
            }
        },
        created() {
            this.refresh();
            this.getCategories()
        },
        methods: {
            async refresh() {
                let query = {};
                if (this.term) {
                    query.title = {
                        $regex: this.term,
                        $options: "i"
                    }
                }
                if (this.category) query.category_id = this.category;
                this.posts = await this.io.service("types/feedback").find({
                    query
                });
                console.log(this.posts)
            },
            async getCategories() {
                const categories = await this.io.service("types/feedback-categories").find({
                    query: {
                        $sort: {
                            order: 1
                        }
                    }
                });
                this.categories = categories?.data || []
            },
            async myVote(post) {
                console.log("query", {
                    feedback_id: post._id,
                    user_id: this.user.value._id
                });
                const votes = await this.io.service("types/feedback-votes").find({
                    query: {
                        feedback_id: post._id,
                        user_id: this.user.value._id
                    }
                });
                console.log("votes", votes);
                return votes?.[0] || false
            },
            async vote(post) {
                if (await this.login()) {
                    console.log(post, this.user.value);
                    const myVote = await this.myVote(post);
                    console.log("my vote", myVote);
                    if (myVote) {
                        await this.io.service("types/feedback-votes").remove(myVote._id)
                    } else {
                        await this.io.service("types/feedback-votes").create({
                            feedback_id: post._id
                        })
                    }
                    await this.refreshVotes(post)
                } else {
                    alert("You have to be logged in to cast a vote")
                }
            },
            async refreshVotes(post) {
                post.votes = await this.io.service("types/feedback-votes").find({
                    query: {
                        feedback_id: post._id
                    }
                });
                console.log(post)
            },
            async remove(id) {
                await this.io.service("types/feedback").remove(id);
                await this.refresh();
                alert("Removed!")
            }
        }
    };
</script>
<style scoped></style>