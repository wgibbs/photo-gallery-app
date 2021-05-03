//Data
var galleryData = {
  active: 'active',
  galleryActive: 'gallery-active',
  gallery: '.gallery__main',
  galleryItem: '.gallery__item',
  isActive: false,
  
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
  ]
};

//Main App
var galleryApp = new Vue({
  el: '#galleryApp',
  data: galleryData,
  methods: {
    showPhoto: function(e) {
      const currentItem = e.currentTarget;
      document.querySelector(this.gallery).classList.add(this.galleryActive);
      currentItem.parentNode.classList.add(this.active);
    },

    closePhoto: function(e) {
      const galleryItems = document.querySelectorAll(this.galleryItem);
      document.querySelector(this.gallery).classList.remove(this.galleryActive);

      galleryItems.forEach(item => {
        item.classList.remove(this.active);
      });
    },
  }
});