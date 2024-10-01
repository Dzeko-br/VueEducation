<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar />
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                             <!-- begin item 1 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[0].img}`)" :alt="items[0].img">
                                <div class="shop__item-title">
                                    {{ items[0].name }}
                                </div>
                                <div class="shop__item-country">{{ items[0].country }}</div>
                                <div class="shop__item-price">{{ items[0].price }}$</div>
                            </div>
                            <!-- end item 1 -->

                            <!-- begin item 2 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[1].img}`)" :alt="items[1].img">
                                <div class="shop__item-title">
                                    {{ items[1].name }}
                                </div>
                                <div class="shop__item-country">{{ items[1].country }}</div>
                                <div class="shop__item-price">{{ items[1].price }}$</div>
                            </div>
                            <!-- end item 2 -->

                            <!-- begin item 3 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[2].img}`)" :alt="items[2].img">
                                <div class="shop__item-title">
                                    {{ items[2].name }}
                                </div>
                                <div class="shop__item-country">{{ items[2].country }}</div>
                                <div class="shop__item-price">{{ items[2].price }}$</div>
                            </div>
                            <!-- end item 3 -->

                            <!-- begin item 4 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[0].img}`)" :alt="items[0].img">
                                <div class="shop__item-title">
                                    {{ items[0].name }}
                                </div>
                                <div class="shop__item-country">{{ items[0].country }}</div>
                                <div class="shop__item-price">{{ items[0].price }}$</div>
                            </div>
                            <!-- end item 4 -->

                            <!-- begin item 5 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[0].img}`)" :alt="items[0].img">
                                <div class="shop__item-title">
                                    {{ items[0].name }}
                                </div>
                                <div class="shop__item-country">{{ items[0].country }}</div>
                                <div class="shop__item-price">{{ items[0].price }}$</div>
                            </div>
                            <!-- end item 5 -->

                            <!-- begin item 6 -->
                            <div class="shop__item">
                                <img :src="require(`@/assets/img/${items[0].img}`)" :alt="items[0].img">
                                <div class="shop__item-title">
                                    {{ items[0].name }}
                                </div>
                                <div class="shop__item-country">{{ items[0].country }}</div>
                                <div class="shop__item-price">{{ items[0].price }}$</div>
                            </div>
                            <!-- end item 6 -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import itemsCart from "@/items";
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