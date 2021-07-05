<template>
  <button
    :aria-label="ariaLabel"
    :class="classes"
    @click="goPrev(index)"
  >
    <IconLeftArrow
      :classes="iconClasses" 
    />
  </button>
</template>

<script>
  export default {
    props: [
      'aria-label',
      'classes',
      'index',
      'go-prev',
    ],
    data() {
      return {
        iconClasses: 'h-8 lg:h-10 w-8 lg:w-10',
      }
    }
  }
</script>