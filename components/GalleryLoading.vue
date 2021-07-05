<template>
  <div 
    class="gallery__loading container px-4 overflow-hidden flex items-start justify-center mx-auto w-full max-w-full h-screen"
    v-show="!loadingStatus"
  >
    <IconLoading
      classes="animate-spin mt-5 sm:mt-10 w-40 sm:w-80 max-w-full text-black"
    />
  </div>
</template>

<script>
  export default {
     props: [
      'loading-status',
    ],
  }
</script>