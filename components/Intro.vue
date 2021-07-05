<template>
  <section class="introduction">
    <div class="container p-5 max-w-xl mx-auto text-center">
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