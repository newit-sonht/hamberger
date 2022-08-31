<template>
<div class="grid grid-cols-2 gap-4">
    <div class="col-span-1">
        <form @submit="submitOrder" class="flex flex-col rounded-lg shadow-xl bg-white w-full h-fit mx-auto p-6">
            <div>
                <p class="text-2xl font-bold text-center">HAMBERGER</p>
            </div>
            <div class="flex flex-col p-6">
                <Select :data_type="current_hamberger" :changeItem="changeProduct" name="product" lable="Type:" :items='hambergers' />
                <Input :handleChage="changePhone" name="phone" :value="phone" placeholder="Enter your phone" type="text" label="Phone : " />
                <Input :handleChage="changeAddress" name="address" :value="address" placeholder="Enter your address" type="text" label="Address : " />
                <div class="mt-8">
                    <button class="bg-orange-500 hover:bg-orange-400 text-white py-2 px-4 rounded float-right" type="submit">Confirm</button>
                </div>
            </div>
        </form>
        <div class="flex flex-col rounded-lg shadow-xl bg-white w-full h-fit mx-auto mt-4 p-6">
            <p class="text-2xl font-bold">Order</p>
            <p>Order: <span class="absolute">......................................................</span> <span class="pl-4">{{ current_hamberger }}</span></p>
            <p>Phone: <span class="absolute">......................................................</span> <span class="pl-4">{{ phone }}</span></p>
            <p>Address: <span class="absolute">......................................................</span> <span class="pl-4">{{ address }}</span></p>
        </div>
    </div>
    <div class="col-span-1">
        <div class="max-h-[520px] overflow-hidden">
            <img class="w-full border border-white" :src="product_image" alt="no image" />
        </div>
    </div>
</div>
</template>

<script>
import Input from '@/components/Elements/Input'
import Select from '@/components/Elements/Select'
export default {
    name: 'HamForm',
    data() {
        return {
            hambergers: [{
                type: "Cheese",
                link: 'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg'
            }, {
                type: "Salad",
                link: 'https://img.tastykitchen.vn/resize/764x-/2021/05/31/thuong-thuc-mon-salad-ca-chua-voi-cong-thuc-che-bi-171d.jpg'
            }, {
                type: "Meat",
                link: 'https://media.istockphoto.com/photos/grilled-beef-steaks-picture-id540233806?k=20&m=540233806&s=612x612&w=0&h=tpjxD9SrkJimG8FzRlFXA0Crlp3z9N9W0QweDmetjOQ='
            }, {
                type: "Omelet",
                link: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F01%2Fmain%2Fhalf-moon-browned-omelet.jpg%3Fitok%3DmGBP10Co'
            }, {
                type: "Fish",
                link: 'http://cdn.tgdd.vn/Files/2021/09/09/1381495/huong-dan-cach-lam-fish-chips-ngon-chuan-vi-nguoi-anh-202109092118101320.jpg'
            }, {
                type: "Shrimp",
                link: 'https://images.themodernproper.com/billowy-turkey/production/posts/Shrimp-Fajitas-8.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1612803180&s=20bfaa2626f1af2e46c4887826d3abd6'
            }, ],
            current_hamberger: 'Cheese',
            product_image: 'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg',
            phone: '',
            address: ''
        }
    },
    components: {
        Input,
        Select
    },
    props: {
        items: {
            type: Array,
            default () {
                return []
            }
        }
    },
    methods: {
        changeProduct: function (e) {
            let data = e.target
            this.product_image = this.hambergers[data.value].link
            this.current_hamberger = this.hambergers[data.value].type
        },
        changePhone: function (e) {
            this.phone = e.target.value
        },
        changeAddress: function (e) {
            this.address = e.target.value
        },
        submitOrder: function (e) {
            e.preventDefault();
            const data = {
                phone: this.phone,
                address: this.address,
                current_hamberger: this.current_hamberger
            }
            console.log(data);
            alert('order success fully \n ' +
              '0. Your order : ' + this.current_hamberger + '\n' +
              '1. Your phone : ' + this.phone + '\n' +
              '2. Your address : ' + this.address)
        }

    },
}
</script>
