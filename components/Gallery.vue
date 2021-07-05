<template>
  <section class="gallery relative px-2">
    <GalleryButtons
      :activate-gallery="activateGallery"
      :active-el="activeEl"
      :gallery-items="galleryItems"
      :on-loaded="onLoaded"
      :loading-status="loaded"
    />
    <GalleryPhotoExpanded 
      :active-el="activeEl"
      :close-gallery="closeGallery"
      :gallery-items="galleryItems"
      :go-prev="goPrev"
      :go-next="goNext"
      :on-loaded="onLoaded"
      :loading-status="loaded"
    />
   <GalleryLoading
    :loading-status="loaded"
    />
  </section>
</template>

<script>
  export default {
    props: [
      'gallery-items'
    ],
    
    data() {
      return {
        gallery: '.gallery',
        activeEl: null,
        loaded: false,
      }
    },

    methods: {
      
      onLoaded() {
        this.loaded = true;
      },
      
      activateGallery(el) {
        const galleryTop = document.querySelector(this.gallery).offsetTop;
        
        window.scrollTo(0, galleryTop - 20);
        this.activeEl = el;
      },

      closeGallery() {
        this.activeEl = null;
      },

      goPrev(index) {
        const galleryCount = this.galleryItems.length;
        
        if(index < 1) {
          this.activeEl = galleryCount - 1;
        } else {
          this.activeEl = index - 1;
        }
      },

      goNext(index) {
        const galleryCount = this.galleryItems.length;
        
        if(index === galleryCount - 1) {
          this.activeEl = 0;
        } else {
          this.activeEl = index + 1;
        }
      },
    }
  }
</script>