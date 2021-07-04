<template>
  <header class="header">
    <div class="container p-5 mx-auto flex flex-col md:flex-row justify-center items-center">
      <h1 :class="this.titleClasses">{{ title }}</h1>
    </div>
    <div class="container mx-auto max-w-sm">
      <hr class="border border-black" />
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