<template>
  <section class="gallery mt-10 px-5">
    <GalleryButtons
      :activate-gallery="activateGallery"
      :active-el="activeEl"
      :gallery-items="galleryItems"
      :mounted="mounted"
      :loading-status="loaded"
    />
    <GalleryPhotosExpanded
      :active-el="activeEl"
      :close-gallery="closeGallery"
      :gallery-items="galleryItems"
      :go-prev="goPrev"
      :go-next="goNext"
      :mounted="mounted"
      :loading-status="loaded"
    />
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
            title: 'Cloudland Canyon State Park, GA',
            image_url: './img/cloudland-canyon-ga-1.jpg',
          },
          {
            title: 'Arches National Park, UT',
            image_url: './img/arches-utah-1.jpg',
          },
          {
            title: 'Squamish, BC',
            image_url: './img/squamish-bc-2.jpg',
          },
          {
            title: 'Nashville, TN',
            image_url: './img/nashville-tn-1.jpg',
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
            title: 'Canby, OR',
            image_url: './img/canby-or-1.jpg',
          },
          {
            title: 'Cherokee, NC',
            image_url: './img/cherokee-nc-1.jpg',
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
            title: 'Willamette National Forest - Blue River, OR',
            image_url: './img/willamette-national-forest-1.jpg',
          },
        ],
      }
    },

    methods: {

      mounted() {
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