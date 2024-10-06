<template>
     <li class="nav__item" :class="className">
        <router-link :to="link">{{ title }}</router-link>
    </li>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true,
            },
            className: {
                type: String,
                required: false,
            }
        }
    }
</script>