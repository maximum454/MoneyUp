<template>
    <section class="subscriptions">
        <div class="container">
            <div class="row">
                <div class="w-100">Подписки</div>
                <div class="col-lg-6">
                    <div class="subscriptions__img">
                        <img src="./assets/vip.png" alt="">
                    </div>
                    <div class="subscriptions__price">1700 Р</div>
                    <ul>
                        <li>5 прогнозов в день</li>
                        <li>Проходимость: 80%</li>
                    </ul>

                    <b-btn v-b-modal.modal1>Оплатить</b-btn>

                    <!-- Modal Component -->
                    <b-modal id="modal1" title="Bootstrap-Vue">
                        <p class="my-4">Hello from modal!</p>
                    </b-modal>
                </div>
                <div class="col-lg-6">
                    <div class="subscriptions__img">
                        <img src="./assets/premium.png" alt="">
                    </div>
                    <div class="subscriptions__price">1700 Р</div>
                    <ul>
                        <li>5 прогнозов в день</li>
                        <li>Проходимость: 80%</li>
                    </ul>
                    <b-btn v-b-modal.modal1>Оплатить</b-btn>

                    <!-- Modal Component -->
                    <b-modal id="modal2" title="Bootstrap-Vue">
                        <p class="my-4">Hello from modal!</p>
                    </b-modal>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "subscribtions"
    }
</script>

<style scoped>

</style>