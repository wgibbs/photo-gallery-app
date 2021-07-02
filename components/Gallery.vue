<template>
  <section class="gallery px-2">
    <div 
      class="gallery__buttons container mx-auto grid grid-cols-2 md:grid-cols-3 gap-2"
      v-bind:class="activeEl == null ? '' : ' hidden'"
    >
      <button
        :aria-label="'Open Expanded Photo of '+ galleryItem.title" 
        @click="activateGallery(index)"
        class="overflow-hidden relative border border-black focus:outline-custom"
        :key="index" 
        v-for="(galleryItem, index) in galleryItems" 
      >
        <img 
          :src="galleryItem.image_url" 
          :alt="galleryItem.title + ' Button Image'"
          class="transform transition duration-500 hover:scale-110" 
        />
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-6 sm:w-6 absolute right-1 bottom-1 bg-black bg-opacity-70 rounded text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
    </div>
    <div class="gallery__expanded container mx-auto relative">
      <div
        class="gallery__photo-wrap bg-black pb-14"
        :key="index"
        v-for="(galleryItem, index) in galleryItems" 
        v-bind:class="activeEl != index || activeEl == null ? 'hidden' : ''"
        v-bind:aria-hidden="activeEl != index || activeEl == null ? 'true' : 'false'"
      >
        <div class="container w-full bg-black bg-opacity-80 flex flex-row justify-between py-3 px-2 sm:px-4">
          <h2 class="font-noto-sans max-w-sm sm:max-w-full pr-3 text-md sm:text-lg text-white leading-tight flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ galleryItem.title }}
          </h2>
           <button
            :aria-label="'Close Photo of '+ galleryItem.title"
            class="text-white p-0 focus:outline-custom2"  
            @click="closeGallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <img
          :alt="galleryItem.title"
          class="w-full"
          :src="galleryItem.image_url"
        />
        <div class="gallery__expanded-controls container absolute bottom-3 sm:inset-y-2/4 flex flex-row items-center justify-between px-2 w-full">
          <button
            aria-label="Go to the Previous Expanded Photo"
            class="bg-black bg-opacity-70 rounded text-white focus:outline-custom2 disabled:opacity-40"
            @click="goPrev(index)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 lg:h-10 w-8 lg:w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>
          </button>
          <button
            aria-label="Go to the Next Expanded Photo"
            class="bg-black bg-opacity-70 rounded text-white focus:outline-custom2"
            @click="goNext(index)"
            v-bind:class="index.count" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 lg:h-10 w-8 lg:w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        gallery: '.gallery',
        activeEl: null,
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
        ]
      }
    },

    methods: {
      
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