<template>
  <div
    v-bind:class="[containerClasses, (activeEl == null ? '' : ' hidden')]"
    v-on:load="mounted" 
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
        :class="imgClasses"
        :src="galleryItem.image_url" 
        :alt="galleryItem.title + ' Button Image'"
        v-on:load="mounted" 
        v-show="loadingStatus"
      />
      <IconExpand
        :class="iconClasses"
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
      'mounted',
      'loading-status',
    ],
    data() {
      return {
        containerClasses: 'gallery__buttons container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4',
        buttonClasses: 'focus:outline-custom relative border-2 border-transparent group hover:border-black transition duration-500 min-h-[200px] lg:min-h-[260px] overflow-hidden',
        imgClasses: 'group-hover:scale-105 min-h-[200px] md:h-full transform transition duration-500 object-cover',
        iconClasses: 'group-hover:scale-110 transform transition duration-500 h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white',
      }
    },
  }
</script>