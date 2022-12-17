<template>
  <button
    :aria-label="ariaLabel"
    :class="classes"
    @click="goNext(index)"
  >
    <IconRightArrow
      :class="iconClasses"
    />
  </button>
</template>

<script>
  export default {
    props: [
      'aria-label',
      'classes',
      'index',
      'go-next',
    ],
    data() {
      return {
        iconClasses: 'h-8 lg:h-10 w-8 lg:w-10',
      }
    }
  }
</script>