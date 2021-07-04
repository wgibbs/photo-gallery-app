<template>
  <section class="gallery relative px-2">
    <div 
      class="gallery__buttons container mx-auto grid grid-cols-2 md:grid-cols-3 gap-2"
      v-bind:class="activeEl == null ? '' : ' hidden'"
      v-on:load="onLoaded" 
      v-show="loaded"
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
          v-show="loaded"
        />
        <IconExpand
          classes="h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white"
        />
      </button>
    </div>
    <div 
      class="gallery__expanded container mx-auto relative"
      v-on:load="onLoaded" 
      v-show="loaded"
    >
      <div
        class="gallery__photo-wrap bg-black pb-14"
        :key="index"
        v-for="(galleryItem, index) in galleryItems" 
        v-bind:class="activeEl != index || activeEl == null ? 'hidden' : ''"
        v-bind:aria-hidden="activeEl != index || activeEl == null ? 'true' : 'false'"
      >
        <div class="gallery__photo-heading container w-full bg-black bg-opacity-80 flex flex-row justify-between py-3 px-2 sm:px-4">
          <div class="gallery__photo-title-wrap max-w-sm sm:max-w-full text-white flex flex-row items-center">
            <IconLocation
              classes="h-6 w-6 sm:h-8 sm:w-8 mr-1 flex-shrink-0"
            />
            <h2 class="font-noto-sans text-md md:text-xl pr-12 sm:pr-0 leading-none">
              {{ galleryItem.title }}
            </h2>
          </div>
          <button
            :aria-label="'Close Photo of '+ galleryItem.title"
            class="gallery__photo-close text-white px-0 py-2 sm:py-0 focus:outline-custom2"
            @click="closeGallery"
          >
            <IconClose
              classes="h-6 w-6 sm:h-8 sm:w-8"
             />
          </button>
        </div>
        <img
          :alt="galleryItem.title"
          class="gallery__photo border-2 border-white border-r-0 border-l-0 w-full"
          :src="galleryItem.image_url"
          v-on:load="onLoaded" 
          v-show="loaded"
        />
        <div class="gallery__photo-controls container absolute bottom-3 sm:inset-y-2/4 flex flex-row items-center justify-between px-2 w-full">
          <button
            aria-label="Go to the Previous Expanded Photo"
            class="bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2 disabled:opacity-40"
            @click="goPrev(index)"
          >
            <IconLeftArrow
              classes="h-8 lg:h-10 w-8 lg:w-10" 
            />
          </button>
          <button
            aria-label="Go to the Next Expanded Photo"
            class="bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2"
            @click="goNext(index)"
          >
            <IconRightArrow
              classes="h-8 lg:h-10 w-8 lg:w-10"  
            />
          </button>
        </div>
      </div>
    </div>
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