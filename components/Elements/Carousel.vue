<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div
        class="min-h-[80px] h-fit bg-slate-200"
        v-for="(item, index) in items"
        :key="index"
      >
        <img class="w-full" :src="item" alt="Slider Image" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carousel",
  components: { VueSlickCarousel },
  props: {
    items: {
      type: Array,
      default() {
        return [
          process.env.defaultImage,
          process.env.defaultImage,
          process.env.defaultImage,
        ];
      },
    },
    settings: {
      type: Object,
      default: {
        autoplay: true,
        dots: true,
        infinite: true,
        rows: 1,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
      },
    },
  },
  data() {
    return {
      dfImg: process.env.defaultImage,
    };
  },
};
</script>
