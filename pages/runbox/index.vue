<template>
  <div>
    <RunBoxComponent
      :items="items"
      :count="count"
      :running="running"
      :runBox="runBox"
    />
  </div>
</template>

<script>
import RunBoxComponent from "@/components//Page/RunBox/RunBoxComponent.vue";
export default {
  name: "RunBox",
  components: { RunBoxComponent },
  data() {
    return {
      count: 1,
      predict_count: 1,
      repeat: 4,
      repeat_max: 20,
      repeat_min: 1,
      items: [
        "bg-red-400",
        "bg-blue-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-orange-400",
        "bg-orange-800",
        "bg-cyan-400",
        "bg-violet-500",
      ],
      number_of_items: 8,
      running: false,
      interval: null,
    };
  },
  methods: {
    runBox: function (e) {
      this.running = true;
      this.repeat = Math.floor(
        Math.random() * this.repeat_max + this.repeat_min
      );
      this.repeat <= this.number_of_items
        ? (this.predict_count = this.repeat + this.count)
        : (this.predict_count =
            this.repeat - this.number_of_items + this.count);

      if (this.predict_count > this.number_of_items) {
        this.predict_count % this.number_of_items == 0
          ? (this.predict_count = this.predict_count / this.number_of_items)
          : (this.predict_count = this.predict_count % this.number_of_items);
      }

      if (this.interval == null) {
        this.interval = setInterval((e) => {
          if (this.running) {
            this.count++;
            if (this.count > this.number_of_items) this.count = 1;
          }
          if (this.repeat <= 1) this.running = false;
          else this.repeat -= 1;
        }, 200);
      }
      console.log("your data  : " + this.predict_count);
    },
  },
};
</script>
