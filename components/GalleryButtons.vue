<template>
  <div 
    class="gallery__buttons container px-2 mx-auto grid grid-cols-2 md:grid-cols-3 gap-2"
    v-bind:class="activeEl == null ? '' : ' hidden'"
    v-on:load="onLoaded" 
    v-show="loadingStatus"
  >
    <button
      :aria-label="'Open Expanded Photo of '+ galleryItem.title" 
      @click="activateGallery(index)"
      class="overflow-hidden focus:outline-custom relative border-2 md:border-4 border-transparent hover:border-black transition duration-500"
      :key="index" 
      v-for="(galleryItem, index) in galleryItems" 
    >
      <img 
        :src="galleryItem.image_url" 
        :alt="galleryItem.title + ' Button Image'"
        v-on:load="onLoaded" 
        v-show="loadingStatus"
      />
      <IconExpand
        classes="h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white"
      />
    </button>
  </div>
</template>

<script>
  export default {
    props: [
      'active-el',
      'activate-gallery',
      'gallery-items',
      'on-loaded',
      'loading-status',
    ],
  }
</script>