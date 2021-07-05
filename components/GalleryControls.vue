<template>
  <div class="gallery__photo-controls container absolute bottom-3 sm:inset-y-2/4 flex flex-row items-center justify-between px-2 w-full">
    <button
      aria-label="Go to the Previous Expanded Photo"
      class="bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2"
      @click="goPrev(index)"
    >
      <IconLeftArrow
        classes="h-8 lg:h-10 w-8 lg:w-10" 
      />
    </button>
    <button
      aria-label="Go to the Next Expanded Photo"
      class="bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2"
      @click="goNext(index)"
    >
      <IconRightArrow
        classes="h-8 lg:h-10 w-8 lg:w-10"  
      />
    </button>
  </div>
</template>

<script>
  export default {
    props: [
      'index',
      'go-prev',
      'go-next',
    ],
  }
</script>