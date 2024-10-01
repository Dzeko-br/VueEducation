<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <nav-bar />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <h1 class="title-big">Everything You Love About Coffee</h1>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a href="./coffeepage.html" class="preview__btn">More</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <!-- begin item 1 -->
                            <div class="best__item" :id="items[0].id">
                                <img :src="require(`@/assets/img/${items[0].img}`)" :alt="items[0].name">
                                <div class="best__item-title">
                                    {{ items[0].name }}
                                </div>
                                <div class="best__item-price">{{ items[0].price }}$</div>
                            </div>
                            <!-- end item 1 -->

                            <!-- begin item 2 -->
                            <div class="best__item" :id="items[1].id">
                                <img :src="require(`@/assets/img/${items[1].img}`)" :alt="items[1].name">
                                <div class="best__item-title">
                                    {{ items[1].name }}
                                </div>
                                <div class="best__item-price">{{ items[1].price }}$</div>
                            </div>
                            <!-- end item 2 -->

                            <!-- begin item 3 -->
                            <div class="best__item" :id="items[2].id">
                                <img :src="require(`@/assets/img/${items[2].img}`)" :alt="items[2].name">
                                <div class="best__item-title">
                                    {{ items[2].name }}
                                </div>
                                <div class="best__item-price">{{ items[2].price }}$</div> 
                            </div>
                            <!-- end item 3 -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </main>
</template>


<script>
    import NavBar from "@/components/NavBar.vue";
    import Cart from '@/components/Cart.vue';
    import itemsCart from '@/items.js';

    export default {
        data() {
            return { 
                items: itemsCart,
            }
        },
        components: {
            NavBar,
        }
    }
</script>
