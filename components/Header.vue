<template>
  <header class="header mt-8 px-5">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <h1 :class="titleClasses">{{ title }}</h1>
    </div>
    <div class="container mx-auto max-w-sm">
      <hr class="border border-black mt-5" />
    </div>
  </header>
</template>

<script>
  export default {
     props: [
      'title',
      'title-classes',
    ],
  }
</script>