<template>
  <div :class="containerClasses">
    <div :class="titleWrapClasses">
      <IconLocation
        :class="iconLocClasses"
      />
      <h2 :class="titleClasses">
        {{ title }}
      </h2>
    </div>
    <button
      :aria-label="'Close Photo of '+ title"
      :class="buttonClasses"
      @click="closeGallery"
    >
      <IconClose
        :class="iconCloseClasses"
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
    data() {
      return {
        containerClasses: 'gallery__photo-heading container w-full bg-black bg-opacity-80 flex flex-row justify-between py-3 px-2 sm:px-4',
        titleWrapClasses: 'gallery__photo-title-wrap max-w-sm sm:max-w-full text-white flex flex-row items-center',
        iconLocClasses: 'h-6 w-6 sm:h-8 sm:w-8 mr-1 flex-shrink-0',
        titleClasses: 'font-noto-sans text-lg md:text-xl pr-14 sm:pr-0 leading-none',
        buttonClasses: 'gallery__photo-close text-white px-0 py-4 sm:py-0 focus:outline-custom2',
        iconCloseClasses: 'hover:scale-105 transform transition duration-500 h-8 w-8',
      }
    },
  }
</script>