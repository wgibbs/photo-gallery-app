var galleryApp = new Vue({
  el: '#galleryApp',
  data: {
    galleryPhotos: [
      {
        title: 'Arches National Park, UT',
        image_url: './img/arches-utah-1.jpg',
        info_position: 'bot-right',
      },
      {
        title: 'Squamish, BC',
        image_url: './img/squamish-bc-2.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Bonneville Salt Flats, UT',
        image_url: './img/bonneville-utah-1.jpg',
        info_position: 'bot-right',
      },
      {
        title: 'Garden of the Gods - Colorado Springs, CO',
        image_url: './img/garden-of-the-gods-co-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Seattle, WA',
        image_url: './img/seattle-wa-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Eugene, OR',
        image_url: './img/eugene-oregon-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Cumberland Trail - Chattanooga, TN',
        image_url: './img/chattanooga-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Arabia Mountain, GA',
        image_url: './img/arabia-mt-1.jpg',
        info_position: 'bot-right',
      },
      {
        title: 'San Francisco, CA',
        image_url: './img/san-fran-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Squamish, BC',
        image_url: './img/squamish-bc-1.jpg',
        info_position: 'top-left',
      },
      {
        title: 'Arches National Park, UT',
        image_url: './img/arches-utah-2.jpg',
        info_position: 'top-left',
      },
      {
        title: 'Seattle, WA',
        image_url: './img/seattle-wa-2.jpg',
        info_position: 'bot-right',
      },
      {
        title: 'Seal Rock, OR',
        image_url: './img/seal-rock-oregon-1.jpg',
        info_position: 'top-left',
      },
      {
        title: 'Boulder Mountain Park - Boulder, CO',
        image_url: './img/boulder-co-1.jpg',
        info_position: 'bot-left',
      },
      {
        title: 'Canby, OR',
        image_url: './img/canby-or-1.jpg',
        info_position: 'bot-right',
      },
      {
        title: 'Willamette National Forest - Blue River, OR',
        image_url: './img/willamette-national-forest-1.jpg',
        info_position: 'top-right',
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
    },
    
    closePhoto: function(e) {
      const galleryPhotos = document.querySelectorAll(this.galleryPhoto);
      
      galleryPhotos.forEach(photo => {
        photo.classList.remove(this.visible);
      });
      document.querySelector(this.galleryButtons).classList.remove(this.hidden);
    },
  }
});
