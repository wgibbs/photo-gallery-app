//Components
var GalleryButton = {
  props: [
    'title',
    'dataImgPath'
  ],

  data: function () {
    return {
      visible: 'visible',
      hidden: 'hidden',
      dataId: 'data-id',
      galleryButtons: '.gallery__buttons',
    }
  },
  
  template: '\
    <button class="gallery__button" :aria-label="title" @click="showPhoto">\
      <img :src="dataImgPath" alt="Gallery Button Image" />\
    </button>',
  
  methods: {
    showPhoto: function(e) {
      const currentId = e.target.parentElement.getAttribute(this.dataId);
    
      document.getElementById(currentId).classList.add(this.visible);
      document.querySelector(this.galleryButtons).classList.add(this.hidden);
    }
  }
};

var GalleryPhoto = {
  props: [
    'title',
  ],

  data: function () {
    return {
      visible: 'visible',
      hidden: 'hidden',
      galleryPhoto: '.gallery__photo',
      galleryButtons: '.gallery__buttons',
    }
  },
  
  template: '\
    <div role="img" class="gallery__photo">\
      <div class="gallery__photo-info">\
        <h2 class="gallery__photo-title">{{ title }}</h2>\
      </div>\
      <button class="gallery__close-btn" aria-label="Close Photo" @click="closePhoto">&#x2715;</button>\
    </div>',
  
  methods: {
   closePhoto: function(e) {
      const galleryPhotos = document.querySelectorAll(this.galleryPhoto);
      
      galleryPhotos.forEach(photo => {
        photo.classList.remove(this.visible);
      });
      document.querySelector(this.galleryButtons).classList.remove(this.hidden);
    },
  }
};

//Main App
var galleryApp = new Vue({
  el: '#galleryApp',
  components: {
    'gallery-button': GalleryButton,
    'gallery-photo': GalleryPhoto,
  },
  data: {
    galleryPhotos: [
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
        title: 'Eugene, OR',
        image_url: './img/eugene-oregon-1.jpg',
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
    visible: 'visible',
    hidden: 'hidden',
    dataId: 'data-id',
    gallery: '.gallery',
    galleryPhoto: '.gallery__photo',
    galleryButtons: '.gallery__buttons',
  },
  
  methods: {
    showPhoto: function(e) {
      const currentId = e.target.parentElement.getAttribute(this.dataId);
      
      document.getElementById(currentId).classList.add(this.visible);
      document.querySelector(this.galleryButtons).classList.add(this.hidden);
    }
  }
});