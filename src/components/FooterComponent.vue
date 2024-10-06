<template>
    <div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <ul class="footer d-flex flex-wrap">
                            <li class="footer__item">
                                <router-link :to="links[0].link">
                                    <img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon">
                                </router-link>
                            </li>
                           
                             <nav-item 
                                :title="links[1].text" 
                                :link="links[1].link"
                                className="footer__item"
                            />

                            <nav-item 
                                :title="links[2].text" 
                                :link="links[2].link"
                                className="footer__item"
                            />
                            <nav-item 
                                :title="links[3].text" 
                                :link="links[3].link"
                                className="footer__item"
                            />
                        </ul>
                    </div>
                </div>
                <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            </div>
        </footer>
    </div>
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
                        icon: 'Logo_black.svg',
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
        }    
    }
</script>