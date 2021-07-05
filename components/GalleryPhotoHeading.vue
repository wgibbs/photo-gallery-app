<template>
  <div class="gallery__photo-heading container w-full bg-black bg-opacity-80 flex flex-row justify-between py-3 px-2 sm:px-4">
    <div class="gallery__photo-title-wrap max-w-sm sm:max-w-full text-white flex flex-row items-center">
      <IconLocation
        classes="h-6 w-6 sm:h-8 sm:w-8 mr-1 flex-shrink-0"
      />
      <h2 class="font-noto-sans text-lg md:text-xl pr-14 sm:pr-0 leading-none">
        {{ title }}
      </h2>
    </div>
    <button
      :aria-label="'Close Photo of '+ title"
      class="gallery__photo-close text-white px-0 py-4 sm:py-0 focus:outline-custom2"
      @click="closeGallery"
    >
      <IconClose
        classes="h-8 w-8"
      />
    </button>
  </div>
</template>

<script>
  export default {
    props: [
      'close-gallery',
      'title',
    ],
  }
</script>