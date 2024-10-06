<template>
    <div class="cart" :class="className">
        <img :src="require(`@/assets/img/${img}`)" :alt="img">
        <div class="best__item-title">
            {{ name }}
        </div>
        <div class="best__item-price">{{ price }}$</div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            img: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: false,
            },
            className: {
                type: String,
                required: false,
            }
        }
    }
</script>