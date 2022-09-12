<template>
  <div class="grid grid-cols-4 gap-4 h-fit p-6">
    <div
      v-for="(item, key) in items"
      :key="key"
      :class="
        'h-36 border text-white text-2xl flex justify-center items-center cursor-pointer ' +
        (count == key + 1 ? 'bg-slate-400 border-4 border-lime-500' : item.color)
      "
    >
      <p class="absolute text-white">{{ item.text }}</p>
      <img class="w-full h-full" :src="item.src" alt="" />
    </div>
    <div>
      <button
        :class="
          'border round w-full h-12 rounded-full hover:bg-purple-500 hover:text-white ' +
          (running ? 'opacity-0' : '')
        "
        @click="runBox"
      >
        Run
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RunBoxComponent",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    count: {
      type: Number,
      default: 1,
    },
    running: {
      type: Boolean,
      default: false,
    },
    runBox: {
      type: Function,
      default: function () {},
    },
  },
};
</script>
