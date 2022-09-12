<template>
  <div class="bg-slate-500">
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
      repeat_max: 30,
      repeat_min: 5,
      items: [
        {
         color : "bg-red-400",
         text: "Bún bò huế",
         src:"https://monngonbamien.org/wp-content/uploads/2019/10/cach-nau-bun-bo-hue-mien-nam-de-ban-don-gia-chuan-vi-ngon-nhat.jpg"
        },
        {
         color : "bg-blue-400",
         text: "Cơm rang",
         src:"https://ameovat.com/wp-content/uploads/2018/03/com-rang-thap-cam-5.jpg"
        },
        {
         color : "bg-green-400",
         text: "Cơm văn phòng",
         src: "https://afamilycdn.com/2018/photo-1-1515510430406.jpg"
        },
        {
         color : "bg-yellow-400",
         text: "Bún hải sản",
         src: "https://haisanquangphong.com/upload/product/bun-hai-san%20(3).jpg"
        },
        {
         color : "bg-orange-400",
         text: "Kimpbap ken",
         src: "https://chefjob.vn/wp-content/uploads/2019/10/kimbap-mon-an-truyen-thong-han-quoc.jpg"
        },
        {
         color : "bg-orange-800",
         text: "Phở bò",
         src: "https://cdn.tgdd.vn/Files/2018/12/07/1136284/cach-nau-pho-bo-tai-nha-bang-xuong-heo-cho-nguoi-ban-ron-202201200943274821.jpg"
        },
        {
         color : "bg-cyan-400",
         text: "Cháo lòng",
         src: "https://cdn.tgdd.vn/Files/2021/08/31/1379186/cong-thuc-mon-chao-long-doi-huyet-thom-ngon-hap-dan-kho-cuong-202201131400228920.jpg"
        },
        {
         color : "bg-violet-500",
         text: "Bún đậu mắm tôm",
         src: "https://cdn.daynauan.info.vn/wp-content/uploads/2021/11/bun-dau-mam-tom.jpg"
        },
        {
         color : "bg-violet-500",
         text: "Bún chả nem cua bể",
         src: "https://cdn.tgdd.vn/Files/2017/04/12/971481/cach-lam-bun-cha-ha-noi-truyen-thong-202112211431417496.jpg"
        },
        {
         color : "bg-violet-500",
         text: "Cơm tấm",
         src: "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630562640.jpg"
        },
        {
         color : "bg-violet-500",
         text: "Cơm thố",
         src: "https://d102yvpl683b7p.cloudfront.net/wp-content/uploads/2021/09/13161702/com-tho.jpg"
        },
      ],
      number_of_items: 1,
      running: false,
      interval: null,
    };
  },
  mounted() {
    this.number_of_items = this.items.length
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
