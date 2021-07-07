<template>
  <div :class="containerClasses">
    <ControlPrev
      :aria-label="prevAriaLabel"
      :classes="controlClasses"
      :index="index"
      :go-prev="goPrev"
    />
    <ControlNext
      :aria-label="nextAriaLabel"
      :classes="controlClasses"
      :index="index"
      :go-next="goNext"
     />
  </div>
</template>

<script>
  export default {
    props: [
      'index',
      'go-prev',
      'go-next',
    ],
    data() {
      return {
        containerClasses: 'gallery__photo-controls container absolute bottom-3 sm:inset-y-2/4 flex flex-row items-center justify-between px-2 w-full',
        controlClasses: 'relative bg-black bg-opacity-70 rounded text-white hover:bg-opacity-100 focus:outline-custom2',
        prevAriaLabel: 'Go to the Previous Expanded Photo',
        nextAriaLabel: 'Go to the Next Expanded Photo',
      }
    },
  }
</script>