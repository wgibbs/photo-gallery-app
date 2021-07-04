<template>
  <div 
    class="gallery__loading container px-4 overflow-hidden flex items-start justify-center mx-auto w-full max-w-full h-screen" v-show="!this.loadingStatus"
  >
    <IconLoading />
  </div>
</template>

<script>
  export default {
     props: [
      'loading-status',
    ],
  }
</script>