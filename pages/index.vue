<template>
  <div>
    <nav class="w-full h-16 border block p-4">
      <div class="inline font-bold text-2xl pr-4">Logo</div>
      <button class="block sm:hidden inline float-right">
        <i class="fa-solid fa-burger text-2xl"></i>
      </button>
      <ul class="hidden sm:block float-right text-lg">
        <li class="inline-block px-2 py-1"><a href="#pablo">Home</a></li>
        <li class="inline-block px-2 py-1"><a href="#pablo">About</a></li>
        <li class="inline-block px-2 py-1"><a href="#pablo">Introduce</a></li>
      </ul>
    </nav>
    <div class="bg-black">
      <div class="px-24">
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Elements/Carousel.vue";
export default {
  name: "IndexPage",
  components: { Carousel },
  data() {
    return {
      items: [
        "https://cdn.mos.cms.futurecdn.net/6d043f817df5b96f2849fa562bfdb202.jpg",
        "https://cdn.mos.cms.futurecdn.net/6d043f817df5b96f2849fa562bfdb202.jpg",
        "https://cdn.mos.cms.futurecdn.net/6d043f817df5b96f2849fa562bfdb202.jpg",
      ],
    };
  },
};
</script>
