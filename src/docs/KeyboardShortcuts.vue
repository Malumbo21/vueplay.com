<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="Keyboard Shortcuts">
        </Meta>
        <article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
            <h1 class="mb-6 text-4xl">
                Keyboard Shortcuts
            </h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3" style="max-width:400px">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Shortcuts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Copy
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        {{isMac ? 'CMD' : 'CTRL'}} + C
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Paste
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        {{isMac ? 'CMD' : 'CTRL'}} + V
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Undo
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        {{isMac ? 'CMD' : 'CTRL'}} + Z
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Redo
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        {{isMac ? 'CMD' : 'CTRL'}} + SHIFT + Z
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Delete
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        DELETE
                                    </kbd>
                                    &nbsp;&nbsp;or&nbsp;&nbsp;
                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        BACKSPACE
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Select previous element
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        LEFT ARROW
                                    </kbd>
                                    &nbsp;&nbsp;or&nbsp;&nbsp;
                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        UP ARROW
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Select next element
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        RIGHT ARROW
                                    </kbd>
                                    &nbsp;&nbsp;or&nbsp;&nbsp;
                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        DOWN ARROW
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Select next element inside parent
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        TAB
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Select previous element inside parent
                            </th>
                            <td class="px-6 py-4 text-right">
                                <p class="text-gray-500 dark:text-gray-400">

                                    <kbd class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                                        SHIFT + TAB
                                    </kbd>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        data: () => ({}),
        computed: {
            isMac() {
                return /(Mac|iPhone|iPod|iPad)/i.test(navigator?.userAgentData?.platform || navigator?.platform)
            }
        }
    };
</script>
<style scoped>
    th,
    td {
        width: 50% !important;
    }
</style>