<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <li class="header__item">
                <router-link to="/">
                    <img src="@/assets/logo/Logo.svg" alt="logo">
                </router-link>
            </li>

            <nav-item 
                :title="links[1].text" 
                :link="links[1].link"
                className="header__item"
            />

            <nav-item 
                :title="links[2].text" 
                :link="links[2].link"
                className="header__item"
            />
            <nav-item 
                :title="links[3].text" 
                :link="links[3].link"
                className="header__item"
            />
        </ul>
    </header>
</template>

<script>
    import NavItem from './NavItem.vue';
    
    export default {
        data() {
            return {
                links: [
                    {
                        id: 0,
                        link: '/',
                        text: '',
                        icon: 'Logo.svg',
                    },
                    {
                        id: 1,
                        link: '/our-coofee',
                        text: 'Our coffee',
                    },
                    {
                        id: 2,
                        link: '/goodspage',
                        text: 'For your pleasure',
                    },
                    {
                        id: 3,
                        link: '/contacts',
                        text: 'Contact us',
                    },
                ],
            }
        },
        components: {
            NavItem,
        },
    }
</script>