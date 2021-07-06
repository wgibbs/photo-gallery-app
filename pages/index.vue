<template>
  <main>
    <Header
      :title="headerTitle"
      :title-classes="headerTitleClasses"
    />
    <Intro
      :text="introText"
      :text-classes="introTextClasses"
     />
    <Gallery />
    <Footer />
  </main>
</template>

<script>
  export default {
    data() {
      return {
        headerTitle: 'Photo Gallery',
        headerTitleClasses: 'font-noto-sans font-bold text-4xl md:text-5xl',
        introText: 'Hello and welcome to my photo gallery. See below for some of my outdoor photography from various travels and road-trips throughout the years.',
        introTextClasses: 'font-open-sans text-lg md:text-xl',
      }
    },
  }
</script>

