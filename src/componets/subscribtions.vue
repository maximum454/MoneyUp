<template>
    <section class="subscriptions mb-5">
        <div class="container">
            <div class="row">
                <h2 class="w-100">Подписки</h2>
                <div class="col-lg-6">
                    <div class="subscriptions__item">
                        <div class="subscriptions__img">
                            <img src="../assets/img/vip.png" alt="">
                        </div>
                        <div class="subscriptions__price">1700 Р/месяц</div>
                        <ul>
                            <li>5 прогнозов в день</li>
                            <li>Проходимость: 80%</li>
                        </ul>

                        <b-button v-b-modal.modal1 block variant="light">Олатить</b-button>

                        <!-- Modal Component -->
                        <b-modal id="modal1" title="Bootstrap-Vue">
                            <p class="my-4">Hello from modal!</p>
                        </b-modal>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="subscriptions__item">
                        <div class="subscriptions__img">
                            <img src="../assets/img/premium.png" alt="">
                        </div>
                        <div class="subscriptions__price">7 700 Р/месяц</div>
                        <ul>
                            <li>Более 10 прогноз в день</li>
                            <li>Проходимость: 90%</li>
                        </ul>
                        <b-button v-b-modal.modal2 block variant="light">Олатить</b-button>

                        <!-- Modal Component -->
                        <b-modal id="modal2" title="Bootstrap-Vue">
                            <p class="my-4">Hello from modal!</p>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .subscriptions {
    &__item {
         width: 100%;
         max-width: 300px;
         margin: 0 auto;
     }

    &__img {
         position: relative;
         text-align: center;
     }

    &__label {
         position: absolute;
         bottom: 40px;
         right: -100px;
         border: 1px solid #007bff;
         font-size: 18px;
         font-weight: bold;
         text-align: center;
         text-transform: uppercase;
         border-radius: 10px;
         padding: 0 20px;
     }

    &__price {
         font-size: 30px;
         font-weight: bold;
         text-align: center;
     }
    }
</style>