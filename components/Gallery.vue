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
        <IconExpand />
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
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h2 class="font-noto-sans text-md md:text-xl pr-12 sm:pr-0 leading-none">
              {{ galleryItem.title }}
            </h2>
          </div>
          <button
            :aria-label="'Close Photo of '+ galleryItem.title"
            class="gallery__photo-close text-white px-0 py-2 sm:py-0 focus:outline-custom2"
            @click="closeGallery"
          >
            <IconClose />
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
            <IconLeftArrow />
          </button>
          <button
            aria-label="Go to the Next Expanded Photo"
            class="bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2"
            @click="goNext(index)"
          >
            <IconRightArrow />
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
    data() {
      return {
        gallery: '.gallery',
        activeEl: null,
        loaded: false,
        galleryItems: [
          {
            title: 'Arches National Park, UT',
            image_url: './img/arches-utah-1.jpg',
          },
          {
            title: 'Squamish, BC',
            image_url: './img/squamish-bc-2.jpg',
          },
          {
            title: 'Bonneville Salt Flats, UT',
            image_url: './img/bonneville-utah-1.jpg',
          },
          {
            title: 'Garden of the Gods - Colorado Springs, CO',
            image_url: './img/garden-of-the-gods-co-1.jpg',
          },
          {
            title: 'Seattle, WA',
            image_url: './img/seattle-wa-1.jpg',
          },
          {
            title: 'Cumberland Trail - Chattanooga, TN',
            image_url: './img/chattanooga-1.jpg',
          },
          {
            title: 'Arabia Mountain, GA',
            image_url: './img/arabia-mt-1.jpg',
          },
          {
            title: 'San Francisco, CA',
            image_url: './img/san-fran-1.jpg',
          },
          {
            title: 'Squamish, BC',
            image_url: './img/squamish-bc-1.jpg',
          },
          {
            title: 'Arches National Park, UT',
            image_url: './img/arches-utah-2.jpg',
          },
          {
            title: 'Seattle, WA',
            image_url: './img/seattle-wa-2.jpg',
          },
          {
            title: 'Seal Rock, OR',
            image_url: './img/seal-rock-oregon-1.jpg',
          },
          {
            title: 'Boulder Mountain Park - Boulder, CO',
            image_url: './img/boulder-co-1.jpg',
          },
          {
            title: 'Canby, OR',
            image_url: './img/canby-or-1.jpg',
          },
          {
            title: 'Willamette National Forest - Blue River, OR',
            image_url: './img/willamette-national-forest-1.jpg',
          },
        ],
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