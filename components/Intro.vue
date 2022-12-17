<template>
  <section class="introduction px-5 mt-5">
    <div class="container max-w-xl mx-auto text-center">
      <p :class="textClasses">
       {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
     props: [
      'text',
      'text-classes'
    ],
  }
</script>