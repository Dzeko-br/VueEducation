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
                            <cart 
                                :name="items[0].name" 
                                :img="items[0].img" 
                                :price="items[0].price"
                                :country="items[0].country" 
                                className="shop__item" 
                            />

                            <cart 
                                :name="items[1].name" 
                                :img="items[1].img" 
                                :price="items[1].price"
                                :country="items[1].country"
                                 className="shop__item" 
                            />

                            <cart 
                                :name="items[2].name" 
                                :img="items[2].img" 
                                :price="items[2].price"
                                :country="items[2].country"
                                 className="shop__item" 
                            />

                            <cart 
                                :name="items[3].name" 
                                :img="items[3].img" 
                                :price="items[3].price"
                                :country="items[3].country"
                                 className="shop__item" 
                            />

                            <cart 
                                :name="items[4].name" 
                                :img="items[4].img" 
                                :price="items[4].price"
                                :country="items[4].country"
                                 className="shop__item" 
                            />
                            <cart 
                                :name="items[5].name" 
                                :img="items[5].img" 
                                :price="items[5].price"
                                :country="items[5].country" 
                                className="shop__item" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import Cart from "@/components/Cart.vue";
    import itemsCart from "@/items";
    export default {
        components: {
            NavBar,
            Cart,
        }
    }
</script>