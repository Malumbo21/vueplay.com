<template>
    <section class="p-6 md:pt-6 pb-24">
        <Meta title="Frequently Asked Questions" description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker." />
        <article>
            <div class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="border w-11 h-12 rounded-lg cursor-pointer" :class="{'bg-emerald-50': post?.votes.find(v => v.user_id === user.value._id), 'border-emerald-400': post?.votes.find(v => v.user_id === user.value._id),'hover:bg-emerald-100': post?.votes.find(v => v.user_id === user.value._id),'hover:bg-slate-100': !post?.votes.find(v => v.user_id === user.value._id), 'border-emerald-400': post?.votes.find(v => v.user_id === user.value._id)}" @click="vote(post)">
                        <div class="h-1/2 w-full">
                            <svg viewBox="0 0 20 10" class="pt-2 w-5 h-5 mx-auto" :class="{'fill-emerald-400': post?.votes.find(v => v.user_id === user.value._id),'fill-gray-400': !post?.votes.find(v => v.user_id === user.value._id)}">
                                <polygon points="10,0 20,10 0,10" />
                            </svg>
                        </div>
                        <div class="text-center h-1/2 w-full -mt-1">
                            {{ post?.votes?.length }}
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-20 flex-col inline-flex grow">
                    <h1 class="pt-2.5 text-xl font-semibold">
                        {{ post?.title }}
                    </h1>
                </div>
            </div>
            <div class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11">
                        <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto">
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                    <h1 class="font-semibold mt-0.5">
                        {{ post?.user?.email }}
                    </h1>
                </div>
            </div>
            <div class="max-w-2xl mx-auto mb-8 mt-2 flex" v-if="post">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-700 mb-3" v-if="!editDescription">
                        {{ post.description }}
                    </p> <textarea v-model="post.description" rows="" cols="" class="w-full h-32 mb-3 border" v-else="">
</textarea><button class="bg-slate-50 hover:bg-slate-100 shadow rounded px-2 mb-2 py-2" @click="saveDescription()" v-if="editDescription">
                        Save
                    </button><img class="w-full mb-4" :src="post.screenshot" v-if="post.screenshot" />
                    <div class="flex text-gray-500">
                        <span class="text-xs">
                            {{ moment(post.createdAt).format('MMMM DD, YYYY') }}
                        </span> <span class="text-xs ml-1">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg> </span> <span class="text-xs ml-1" v-if="!editDescription && post?.user._id === user.value._id">
                            ·
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 cursor-pointer inline-flex -mt-0.5" @click="editDescription = true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg> </span>
                    </div>
                    <div class="mt-8">
                        <form class="mt-4">
                            <div class="relative">
                                <input type="search" id="default-search" class="w-full h-10 block max-w-full pl-4 text-sm text-gray-900 placeholder:text-slate-500 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment" required="" />
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
        <article v-for="comment in post?.comments?.data">
            <div class="max-w-2xl mx-auto mt-4 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11">
                        <div class="h-7 w-7 bg-cover rounded-full bg-slate-500 mx-auto">
                        </div>
                    </div>
                </div>
                <div class="overflow-hidden text-ellipsis max-h-8 flex-col inline-flex grow">
                    <h1 class="font-semibold mt-0.5">
                        {{ comment.user?.[0]?.email }}
                    </h1>
                </div>
            </div>
            <div class="max-w-2xl  mx-auto mb-8 mt-2 flex">
                <div class="w-16 inline-flex">
                    <div class="w-11"> </div>
                </div>
                <div class="grow">
                    <p class="text-gray-700 mb-3">
                        {{ comment.comment }}
                    </p><textarea v-model="comment.description" rows="" cols="" class="w-full h-16 mb-3 border">
</textarea>
                    <div class="flex text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg> <span class="text-xs">
                            {{1 &gt; 0 ? '1 likes' : ''}} · {{ moment(comment.createdAt).format('MMMM DD, YYYY') }}
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
    import moment from "moment";
    export default {
        components: {
            Meta
        },
        inject: ["io", "user", "login"],
        props: {
            id: {
                type: String,
                default: "64b581fe691f1cd6f7ae2a2e"
            }
        },
        data: () => ({
            editDescription: false,
            post: null,
            moment
        }),
        created() {
            this.refresh()
        },
        methods: {
            async saveTitle() {
                if (this.login()) {
                    await this.io.service("types/feedback").patch(this.post._id, {
                        title: this.post.title
                    });
                    await this.refresh();
                    this.editTitle = false;
                    alert("Saved")
                }
            },
            async saveDescription() {
                if (this.login()) {
                    await this.io.service("types/feedback").patch(this.post._id, {
                        description: this.post.description
                    });
                    await this.refresh();
                    this.editDescription = false;
                    alert("Saved")
                }
            },
            async saveScreenshot() {
                if (this.login()) {
                    await this.io.service("types/feedback").patch(this.post._id, {
                        screenshot: this.post.screenshot
                    });
                    await this.refresh();
                    this.editScreenshot = false;
                    alert("Saved")
                }
            },
            async refresh() {
                this.post = await this.io.service("types/feedback").get(this.id)
            },
            async myVote(post) {
                const votes = await this.io.service("types/feedback-votes").find({
                    query: {
                        feedback_id: post._id,
                        user_id: this.user.value._id
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