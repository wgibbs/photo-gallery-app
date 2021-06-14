<template>
  <section class="gallery">
    <div 
      class="gallery__buttons container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4"
      v-bind:class="activeEl == null ? '' : ' hidden'"
    >
      <button
        :aria-label="'Open Expanded Photo of '+ galleryItem.title" 
        @click="activateGallery(index)"
        class="overflow-hidden border border-black focus:outline-custom"
        :key="index" 
        v-for="(galleryItem, index) in galleryItems" 
      >
        <img 
          :src="galleryItem.image_url" 
          :alt="galleryItem.title + ' Button Image'"
          class="transform transition duration-500 hover:scale-110" 
        />
      </button>
    </div>
    <div
      :key="index"
      class="gallery__photo-wrap container relative mx-auto pb-12 bg-black md:pb-0"
      v-for="(galleryItem, index) in galleryItems" 
      v-bind:class="activeEl != index || activeEl == null ? 'hidden' : ''"
      v-bind:aria-hidden="activeEl != index || activeEl == null ? 'true' : 'false'" 
    >
      <img
        :alt="galleryItem.title"
        class="w-full"
        :src="galleryItem.image_url"
      />
      <h2 class="absolute text-white bg-black bg-opacity-80 p-3 pb-4 md:p-5 bottom-0 left-0 right-0 md:right-auto md:bottom-auto md:top-3 md:left-3 font-noto-sans text-lg leading-none">
        {{ galleryItem.title }}
      </h2>
      <button
        :aria-label="'Close Photo of '+ galleryItem.title"
        class="text-white text-xl absolute p-1 top-3 right-3 focus:outline-custom leading-none"  
        @click="closeGallery"
      >
        &#x2715;
      </button>
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

      closeGallery(e) {
        this.activeEl = null;
      },
    }
  }
</script>