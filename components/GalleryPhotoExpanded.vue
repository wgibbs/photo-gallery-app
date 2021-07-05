<template>
  <div 
    class="gallery__photo-expanded container mx-auto relative"
    v-on:load="onLoaded" 
    v-show="loadingStatus"
  >
    <div
      class="gallery__photo-wrap bg-black pb-14"
      :key="index"
      v-for="(galleryItem, index) in galleryItems" 
      v-bind:class="activeEl != index || activeEl == null ? 'hidden' : ''"
      v-bind:aria-hidden="activeEl != index || activeEl == null ? 'true' : 'false'"
    >
      <GalleryPhotoHeading
        :title="galleryItem.title"
        :close-gallery="closeGallery"
      />
      <img
        :alt="galleryItem.title"
        class="gallery__photo-img border-2 border-white border-r-0 border-l-0 w-full"
        :src="galleryItem.image_url"
        v-on:load="onLoaded" 
        v-show="loadingStatus"
      />
      <GalleryControls 
        :index="index"
        :go-prev="goPrev"
        :go-next="goNext"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'active-el',
      'close-gallery',
      'gallery-items',
      'go-prev',
      'go-next',
      'on-loaded',
      'loading-status',
    ],
  }
</script>