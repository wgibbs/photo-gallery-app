<template>
  <div
    v-bind:class="[containerClasses, (activeEl == null ? '' : ' hidden')]"
    v-on:load="onLoaded" 
    v-show="loadingStatus"
  >
    <button
      :aria-label="'Open Expanded Photo of '+ galleryItem.title" 
      @click="activateGallery(index)"
      :class="buttonClasses"
      :key="index" 
      v-for="(galleryItem, index) in galleryItems" 
    >
      <img 
        :src="galleryItem.image_url" 
        :alt="galleryItem.title + ' Button Image'"
      />
      <IconExpand
        :classes="iconClasses"
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
    data() {
      return {
        containerClasses: 'gallery__buttons container px-2 mx-auto grid grid-cols-2 md:grid-cols-3 gap-2',
        buttonClasses: 'overflow-hidden focus:outline-custom relative border-2 md:border-4 border-transparent hover:border-black transition duration-500',
        iconClasses: 'h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white',
      }
    },
  }
</script>