<template>
  <div 
    :class="containerClasses"
    v-on:load="mounted" 
    v-show="loadingStatus"
  >
    <div
      :key="index"
      v-for="(galleryItem, index) in galleryItems"
      v-bind:class="[photoWrapClasses, (activeEl != index || activeEl == null ? 'hidden' : '')]"
      v-bind:aria-hidden="activeEl != index || activeEl == null ? 'true' : 'false'"
    >
      <GalleryPhotoHeading
        :title="galleryItem.title"
        :close-gallery="closeGallery"
      />
      <img
        :alt="galleryItem.title"
        :class="imgClasses"
        :src="galleryItem.image_url"
        v-on:load="mounted" 
        v-show="loadingStatus"
      />
      <GalleryPhotoControls 
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
      'mounted',
      'loading-status',
    ],
    data() {
      return {
        containerClasses: 'gallery__photos-expanded container mx-auto',
        photoWrapClasses: 'gallery__photo bg-black pb-14 relative',
        imgClasses: 'gallery__photo-img border-2 border-white border-r-0 border-l-0',
      }
    }
  }
</script>