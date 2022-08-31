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
            <p>Price: <span class="absolute">......................................................</span> <span class="pl-8">{{ current_price }}</span></p>
        </div>
    </div>
    <div class="col-span-1">
        <div class="max-h-[520px] overflow-hidden">
            <img class="w-full border border-white rounded" :src="product_image" alt="no image" />
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
                link: 'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg',
                price: '265$'
            }, {
                type: "Salad",
                link: 'https://monngonmoingay.com/wp-content/uploads/2015/08/190.jpg',
                price: '55$'
            }, {
                type: "Meat",
                link: 'https://cdn.tgdd.vn/2020/11/CookProduct/1-1200x676-22.jpg',
                price: '465$'
            }, {
                type: "Omelet",
                link: 'https://assets3.thrillist.com/v1/image/1492264/1200x600/scale',
                price: '65$'
            }, {
                type: "Fish",
                link: 'https://cdn.tgdd.vn/2021/12/CookDish/sushi-de-duoc-bao-lau-cach-bao-quan-sushi-qua-dem-va-nhan-avt-1200x676.jpg',
                price: '185$'
            }, {
                type: "Shrimp",
                link: 'https://cdn.tgdd.vn/2021/07/CookProduct/tempura-la-gi-cach-lam-tempura-nhat-bot-tempura-la-gi-mua-o-dau-0-1200x676.jpg',
                price: '205$'
            }, ],
            current_hamberger: 'Cheese',
            current_price: '265$',
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
            this.current_price = this.hambergers[data.value].price
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
