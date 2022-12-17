<template>
  <div 
    :class="containerClasses"
    v-show="!loadingStatus"
  >
    <IconLoading
      :class="iconClasses"
    />
  </div>
</template>

<script>
  export default {
    props: [
      'loading-status',
    ],
    data() {
      return {
        containerClasses: 'gallery__loading container px-4 overflow-hidden flex items-start justify-center mx-auto w-full max-w-full h-screen',
        iconClasses: 'animate-spin mt-5 sm:mt-10 w-40 sm:w-80 max-w-full text-black',
      }
    },
  }
</script>