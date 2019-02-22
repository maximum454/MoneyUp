<template>
    <header class="header mb-5">
        <div class="container">
            <div class="row">
                <div class=" d-flex justify-content-center flex-column col-lg-5">

                    <h1 v-once>{{ title }}</h1>
                    <p v-once>{{ subtitle }}</p>

                </div>
                <div class="col-lg-7">
                    <img src="../assets/img/player.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'headerbar',
        data() {
            return {
                title: 'Прогнозы с 80% проходимостью',
                subtitle: 'Мы выкупаем прогнозы лучших каперов, после чего команда аналитиков делает свой анализ, и вы получаете надежные прогнозы'

            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        padding-top: 100px;
        img {
            max-width: 100%;
        }
        @media only screen and (max-width: 768px){
            padding-top: 100px;
        }
    }
</style>