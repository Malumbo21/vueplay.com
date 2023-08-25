<template>
    <div class="bg-slate-50 rounded" style="max-width:100%;max-height:100%" :class="fullWindow ? 'full-window' : ''">
        <div class="grid-cols-2 grid bg-slate-100" style="width:100%;height:40px">
            <div class="h-full">
                <button style="height:31px" class="disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center"
                    @click="show = 'split'" :disabled="show === 'split'">
                    Split
                </button><button style="height:31px"
                    class="disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center hover:bg-slate-300"
                    @click="show = 'preview'" :disabled="show === 'preview'">
                    Preview
                </button><button style="height:31px"
                    class="disabled:opacity-40 px-2 bg-slate-200 m-1 rounded text-center hover:bg-slate-300"
                    @click="show = 'code'" :disabled="show === 'code'">
                    Code
                </button>
            </div>
            <div class="text-right h-full"><button style="width:31px;height:31px"
                    class="bg-slate-200 m-1 rounded text-center inline-block" v-if="application?.tailwind"
                    title="Component depends on Tailwind">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none"
                        style="width:80%;height:80%;padding:10%" class="m-auto">
                        <path
                            d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
                            fill="#07B6D5" />
                        <path
                            d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
                            fill="#07B6D5" />
                    </svg> </button><button style="width:31px;height:31px"
                    class="bg-slate-200 m-1 rounded text-center hover:bg-slate-300 inline-block" title="History"
                    @click="showHistory = !showHistory" :class="showHistory ? 'opacity-50' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="92pt" height="92pt" viewBox="0 0 92 92" class="mx-auto"
                        style="width:80%;height:80%;padding:10%">
                        <defs>
                            <clipPath id="a">
                                <path d="M0 .113h91.887V92H0Zm0 0" />
                            </clipPath>
                        </defs>
                        <g clip-path="url(#a)">
                            <path style="stroke:none;fill-rule:nonzero;fill:#100f0d;fill-opacity:1"
                                d="M90.156 41.965 50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371L41.855 90.27a5.92 5.92 0 0 0 8.368 0l39.933-39.934a5.925 5.925 0 0 0 0-8.371" />
                        </g>
                    </svg> </button> <button style="width:31px;height:31px"
                    class="bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300" title="Close full window"
                    @click="openPreview(application?.tailwind)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="currentColor" class="mx-auto" style="width:80%;height:80%;padding:10%">
                        <path fill-rule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                            clip-rule="evenodd" />
                    </svg> </button><button style="width:31px;height:31px"
                    class="bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300" v-if="!fullWindow"
                    title="Full window" @click="fullWindow = true"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor" class="mx-auto" style="width:80%;height:80%;padding:10%">
                        <path fill-rule="evenodd"
                            d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                            clip-rule="evenodd" />
                    </svg> </button><button style="width:31px;height:31px"
                    class="bg-slate-200 m-1 rounded text-center inline-block hover:bg-slate-300" v-if="fullWindow"
                    title="Close full window" @click="fullWindow = false"><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="currentColor" class="mx-auto" style="width:80%;height:80%;padding:10%">
                        <path fill-rule="evenodd"
                            d="M3.22 3.22a.75.75 0 011.06 0l3.97 3.97V4.5a.75.75 0 011.5 0V9a.75.75 0 01-.75.75H4.5a.75.75 0 010-1.5h2.69L3.22 4.28a.75.75 0 010-1.06zm17.56 0a.75.75 0 010 1.06l-3.97 3.97h2.69a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75V4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0zM3.75 15a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97H4.5a.75.75 0 01-.75-.75zm10.5 0a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-2.69l3.97 3.97a.75.75 0 11-1.06 1.06l-3.97-3.97v2.69a.75.75 0 01-1.5 0V15z"
                            clip-rule="evenodd" />
                    </svg> </button> </div>
        </div>
        <div class="flex-row flex bg-slate-50" style="width:100%;height:calc(100% - 140px)">
            <div class="grid-cols-2 grid grow">
                <div class="p-4 overflow-auto h-full" v-if="show === 'split' || show === 'code'"
                    :class="show !== 'split' ? 'col-span-2' : ''">
                    <pre>
                        <code>
                        {{ raw }}
                        </code> </pre>
                </div>
                <div class="p-4 overflow-auto h-full" v-if="show === 'split' || show === 'preview'"
                    :class="show !== 'split' ? 'col-span-2' : ''"><iframe title="" class="bg-white h-full w-full"
                        :src="iframeSource">
                    </iframe> </div>
            </div>
            <div class="relative px-4 pb-4 box-border overflow-auto h-full" style="max-width:280px;min-width:280px"
                v-if="showHistory">
                <label for="" class="top-0 pt-2 pb-1 sticky w-full bg-slate-50 font-semibold inline-block mb-2">
                    Git History
                </label>
                <div class="p-2 rounded mb-2 bg-slate-100" v-for="commit in history">
                    {{ commit.commit.message }}
                </div>
            </div>
        </div>
        <div class="overflow-auto bg-slate-100 p-4" style="width:100%;height:100px">
            <div class="py-0.5 px-3 rounded-xl bg-lime-200 inline-block" v-for="prop in application?.analyze?.props">
                :{{ prop?.name }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String,
            default: "64b1469b691f1cd6f7ad4328"
        }
    },
    data: () => ({
        fullWindow: false,
        show: "split",
        showHistory: false,
        history: null,
        application: null,
        raw: "",
        preview: "",
        webComponent: "",
        webComponentPreview: "",
        livePreview: "",
        livePreviewWebComponent: "",
        html: "",
        htmlWebComponent: "",
        htmlBase64: "",
        iframe: "",
        esm: "",
        esmWebComponent: "",
        esmBase64: ""
    }),
    computed: {
        iframeSource() {
            return `https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${tailwind ? "-tw" : ""}`
        }
    },
    async created() {
        await this.init()
    },
    methods: {
        async init() {
            this.application = await this.getApplication();
            this.history = await this.getHistory();
            this.raw = await this.getRaw();
            this.preview = await this.getPreview(this.application.tailwind)
        },
        async getApplication() {
            return (await fetch(`https://api.vueplay.io/types/applications/${this.id}`)).json()
        },
        async getHistory() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}`)).json()
        },
        async getRaw() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=vue`)).text()
        },
        async getPreview(tailwind = false) {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${tailwind ? "-tw" : ""}`)).text()
        },
        async getLivePreview() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=live-preview`)).text()
        },
        async getLivePreviewWebComponent() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=live-preview-wc`)).text()
        },
        async getWebComponent() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=webcomponent`)).text()
        },
        async getWebComponentPreview() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview-wc`)).text()
        },
        async getHtml(tailwind = false) {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html${tailwind ? "-tw" : ""}`)).text()
        },
        async getHtmlWebComponentPreview() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html-wc`)).text()
        },
        async getHtmlBase64(tailwind = false) {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=html-base64${tailwind ? "-tw" : ""}`)).text()
        },
        async getIframe(tailwind = false) {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=iframe${tailwind ? "-tw" : ""}`)).text()
        },
        async getESM() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=esm`)).text()
        },
        async getESMWebComponent() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=esmwc`)).text()
        },
        async getESMBase64() {
            return (await fetch(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=base64`)).text()
        },
        openPreview(tailwind) {
            window.open(`https://api.vueplay.io/types/sfc/${this.id}?ref=HEAD&type=preview${tailwind ? "-tw" : ""}`, "_blank")
        }
    }
};
</script>
<style scoped>.full-window {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh !important;
    z-index: 100;
}</style>