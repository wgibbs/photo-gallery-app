<template>
  <section class="introduction">
    <div class="container font-open-sans p-5 max-w-xl mx-auto text-center">
      <p class="text-lg md:text-xl">
       {{ introCopy }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
     props: [
      'intro-copy',
    ],
  }
</script>