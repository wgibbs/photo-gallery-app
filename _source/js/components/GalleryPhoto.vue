
Vue.component('gallery-photo', {
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
  
  template: '<div role="img" class="gallery__photo">\
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
});

export default GalleryPhoto;