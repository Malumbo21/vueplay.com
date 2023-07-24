<template>
    <div class="bg-slate-100">
        <Meta description="Vue Play release log" title="Release Log">
        </Meta>
        <VueNavigator class="z-10" />
        <header>
            <h1 class="text-6xl mt-12 mb-6">
                Release Log
            </h1>
        </header>
        <main class="p-6 m-auto max-w-xl container">
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    24.07.2023 - Release 1.0.5
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li class="" style="height:29px">
                        Feature - Drag and drop Tailwind Hero Icons into the Playground
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    17.07.2023 - Release 1.0.4
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li class="" style="height:29px">
                        Feature - Create Single File Components
                    </li>
                    <li class="" style="height:29px">
                        Feature - Publishment of Single File Components
                    </li>
                    <li class="" style="height:29px">
                        Feature - Add keyframe on animation timeline
                    </li>
                    <li class="" style="height:29px">
                        Feature - Duplicate keyframe on animation timeline
                    </li>
                    <li class="" style="height:29px">
                        Feature - Delete keyframe on animation timeline
                    </li>
                    <li class="" style="height:29px">
                        Feature - Line height style controller
                    </li>
                    <li class="" style="height:29px">
                        Feature - Router highlight overlay
                    </li>
                    <li class="" style="height:29px">
                        Enhancement - Correct position of drag and drop ghost
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    07.07.2023 - Release 1.0.3
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li class="" style="height:29px">
                        Design - Huge design update
                    </li>
                    <li class="" style="height:29px">
                        Enhancement - Better tailwind style controllers
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    20.06.2023 - Release 1.0.2
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li class="">
                        Design - Progress bar on save / pull / push
                    </li>
                    <li>
                        Enhancement - Improved tailwind controller
                    </li>
                    <li>
                        Enhancement - Simplified GitHub Pages deployment
                    </li>
                    <li>
                        Feature - Keyboard element navigation
                    </li>
                    <li>
                        Feature - Breakpoint toggles
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    12.06.2023 - Release 1.0.1
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li>
                        Design - Improved navigation selector
                    </li>
                    <li>
                        Design - Improved style controller navigation
                    </li>
                    <li>
                        Feature - Server boost
                    </li>
                    <li>
                        Feature - Speed optimization
                    </li>
                    <li>
                        Feature - Tailwind style controller
                    </li>
                    <li>
                        Feature - Copy (keyboard shorcut supported)
                    </li>
                    <li>
                        Feature - Paste (keyboard shorcut supported)
                    </li>
                    <li>
                        Feature - Keyboard shorcut supported for delete
                    </li>
                    <li>
                        Feature - Keyboard shorcut supported for undo & redo
                    </li>
                    <li>
                        Feature - Improved context menu
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    22.05.2023 - Release 1.0.0
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li>
                        Design - New login screen
                    </li>
                    <li>
                        Feature - Gradient color selection
                    </li>
                    <li>
                        Feature - Default styles for elements
                    </li>
                    <li>
                        Feature - Table demo content
                    </li>
                    <li>
                        Feature - List demo content
                    </li>
                    <li>
                        Feature - Allow drop on template
                    </li>
                    <li>
                        Feature - Box shadow controller
                    </li>
                    <li>
                        Feature - Text shadow controller
                    </li>
                    <li>
                        Feature - Keyframe timeline view
                    </li>
                    <li>
                        Bugfix - Fix file overwrite when switching between files
                    </li>
                </ul>
            </section>
            <section class="shadow border mb-6 rounded-lg bg-white p-6">
                <h3>
                    02.05.2023 - First launch
                </h3>
                <ul class="indent-3 ml-5 list-disc">
                    <li>
                        Initial release - Launched on Product Hunt
                    </li>
                </ul>
            </section>
        </main>
        <Footer />
    </div>
</template>
<script>
    import VueNavigator from "@/components/Navigator.vue";
    import Footer from "@/components/Footer.vue";
    import Meta from "@/components/Meta.vue";
    export default {
        components: {
            VueNavigator,
            Footer,
            Meta
        }
    };
</script>
<style scoped>
    body,
    html,
    #app {
        margin-top: 0px;
        margin-left: 0px;
        margin-bottom: 0px;
        margin-right: 0px;
    }

    main {
        font-family: verdana;
    }

    header {
        text-align: center;
        font-family: verdana;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    h2 {
        font-size: 30px;
        margin-top: 100px;
        text-align: left;
    }

    h3 {
        font-weight: bold;
    }

    p {
        font-size: 20px;
        color: #6b6b6bff;
        margin-top: 50px;
        margin-bottom: 15px;
    }

    ul {
        display: inline-block;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    li {
        padding-bottom: 5px;
    }
</style>