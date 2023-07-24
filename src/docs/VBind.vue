<template>
    <section class="p-6 pt-20 md:pt-6 pb-40">
        <Meta title="v-bind" description="Currently v-bind is not supported by Vue Play. Style binding with the computed hook in the Options API can be used in the meantime for reactive style binding.">
        </Meta>
        <article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
            <h1 class="mb-6 text-4xl">
                v-bind
            </h1>
            <p style="margin-top:15px" class="text-xl py-2 font-medium">
                Currently v-bind is not supported by Vue Play.
            </p>
            <p style="margin-top:15px" class="text-lg">
                Style binding with the computed hook in the Options API can be used in the meantime for reactive style binding:
            </p>
            <pre style="margin-top:15px" class="text-white rounded bg-slate-900 p-4 text-lg overflow-auto">
<code>
&lt;script&gt;
export default() {
  computed: {
    style()
      return {
        width: '' // Your code
      }
    }
  }
}
&lt;/script&gt;
</code> </pre>
        </article>
    </section>
</template>
<script>
    import Meta from "@/components/Meta.vue";
    export default {
        components: {
            Meta
        },
        data: () => ({})
    };
</script>
<style scoped></style>