<template>
    <section class="p-6 md:pt-6 pb-24">
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
        <div class="h-24 flex-col max-w-2xl mx-auto lg:h-9 lg:mb-8 flex text-lg lg:flex-row mt-16">
            <div class="text-sm mb:text-base font-light">
                <span>
                    Showing
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline mx-1" v-model="sort">
                    <option value="latest">
                        Latest
                    </option>
                    <option value="top">
                        Top
                    </option>
                </select><span>
                    posts in
                </span> <select name="" class="cursor-pointer bg-transparent underline-offset-4 underline ml-1" v-model="category">
                    <option value="">
                        All Categories
                    </option>
                    <option v-for="category in categories" :value="category._id">
                        {{ category.title }}
                    </option>
                </select><span>
                    status
                </span><select name="" class="cursor-pointer bg-transparent underline-offset-4 underline ml-1" v-model="status">
                    <option value="">
                        Open
                    </option>
                    <option v-for="status in statuses" :value="status._id">
                        {{ status.title }}
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
                        </div> <input type="search" id="default-search" class="lg:w-40 w-full h-10 lg:h-full max-w-full pl-10 pr-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required="" v-model="term" @change="refresh()" />
                    </div>
                </div>
            </div>
        </div>
        <article class="max-w-2xl mx-auto mb-8 mt-4 flex" v-if="!posts.length">
            <p class="text-gray-500 overflow-hidden text-ellipsis">
                No open feedback, select category to browse closed feedback...
            </p>
        </article>
        <article v-for="post in posts" class="max-w-2xl mx-auto mb-8 mt-4 flex">
            <div class="pr-6 inline-flex">
                <div class="cursor-pointer border w-11 h-12 rounded-lg" @click="vote(post)" :class="{ 'bg-emerald-50': post.votes.find(v => v.user_id === user?._id), 'border-emerald-400': post.votes.find(v => v.user_id === user?._id), 'hover:bg-emerald-100': post.votes.find(v => v.user_id === user?._id), 'hover:bg-slate-100': !post.votes.find(v => v.user_id === user?._id), 'border-emerald-400': post.votes.find(v => v.user_id === user?._id) }">
                    <div class="h-1/2 w-full">
                        <svg viewBox="0 0 20 10" class="pt-2 w-5 h-5 mx-auto" :class="{ 'fill-emerald-400': post.votes.find(v => v.user_id === user?._id), 'fill-gray-400': !post.votes.find(v => v.user_id === user?._id) }">
                            <polygon points="10,0 20,10 0,10" />
                        </svg>
                    </div>
                    <div class="text-center h-1/2 w-full -mt-1">
                        {{ post.votes?.length }}
                    </div>
                </div>
            </div>
            <div class="hover:text-emerald-600 overflow-hidden text-ellipsis inline-flex flex-col grow pr-4 cursor-pointer" @click="$router.push('/feedback/' + post._id)" style="max-height:75px;height:1806.03px" :class="post.over ? 'text-emerald-600' : ''">
                <h1 class="font-semibold">
                    {{ post.title }}
                    <button class="ml-2 border rounded text-xs py-0.5 px-1" v-if="post?.status?.length" :style="statusStyle(post)">
                        {{ post?.status?.[0]?.title }}
                    </button>
                </h1>
                <p class="text-gray-500 overflow-hidden text-ellipsis">
                    {{ post.description }}
                </p>
            </div>
            <div class="pl-4 inline-flex cursor-pointer" @click="$router.push('/feedback/' + post._id)" @mouseenter="post.over = true" @mouseleave="post.over = false">
                <div class="w-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-gray-400 w-5 h-5 mt-1 mr-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg> </div>
                <div class="w-10 text-right">
                    {{ post.comments?.length }}
                </div>
            </div>
        </article>
    </section>
</template>
<script>
    export default {
        inject: ["io", "user", "login", "logout"],
        expose: ["refresh"],
        data: () => ({
            term: "",
            categories: [],
            statuses: [],
            posts: [],
            category: "",
            status: "",
            sort: "latest"
        }),
        watch: {
            category() {
                this.refresh()
            },
            status() {
                this.refresh()
            },
            sort() {
                this.refresh()
            }
        },
        created() {
            this.refresh();
            this.getCategories();
            this.getStatuses()
        },
        methods: {
            statusStyle(post) {
                return {
                    color: post?.status?.[0]?.foregroundColor,
                    backgroundColor: post?.status?.[0]?.backgroundColor,
                    borderColor: post?.status?.[0]?.foregroundColor
                }
            },
            async refresh(sort = this.sort) {
                this.sort = sort;
                let query = {};
                if (this.term) {
                    query.title = {
                        $regex: this.term,
                        $options: "i"
                    }
                }
                if (this.sort === "top") query.top = true;
                if (this.category) query.category_id = this.category;
                if (this.status) query.status_id = this.status;
                else {
                    query.status_id = {
                        $nin: ["64d0cdd1cc7eda107dbe566c"]
                    }
                }
                this.posts = await this.io.service("types/feedback").find({
                    query
                })
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
            async getStatuses() {
                const statuses = await this.io.service("types/feedback-status").find({
                    query: {
                        $sort: {
                            order: 1
                        }
                    }
                });
                this.statuses = statuses?.data || []
            },
            async myVote(post) {
                const votes = await this.io.service("types/feedback-votes").find({
                    query: {
                        feedback_id: post._id,
                        user_id: this.user?._id
                    }
                });
                return votes?.[0] || false
            },
            async vote(post) {
                if (await this.login()) {
                    const myVote = await this.myVote(post);
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
                })
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