<template>
    <div id="app">
        <b-navbar fixed="top" toggleable="md" type="dark" variant="">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#"><img src="./assets/img/logo.jpg" alt=""></b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">О нас</b-nav-item>
                    <b-nav-item href="#">Виды подписок</b-nav-item>
                    <b-nav-item href="#">Преимущества</b-nav-item>
                    <b-nav-item href="#">Отзывы</b-nav-item>
                    <b-nav-item href="#">Контакты</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <header class="header mb-5">
            <div class="container">
                <div class="row">
                    <div class=" d-flex justify-content-center flex-column col-lg-5">

                        <h1>{{ title }}</h1>
                        <p>{{ msg }}</p>

                    </div>
                    <div class="col-lg-7">
                        <img src="./assets/img/player.png" alt="">
                    </div>
                </div>
            </div>
        </header>
        <section class="subscriptions mb-5">
            <div class="container">
                <div class="row">
                    <h2 class="w-100">Подписки</h2>
                    <div class="col-lg-6">
                        <div class="subscriptions__item">
                            <div class="subscriptions__img">
                                <img src="./assets/img/vip.png" alt="">
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
                                <img src="./assets/img/premium.png" alt="">
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
        <section class="benefits  mb-5">
            <div class="container">
                <div class="row">
                    <h2 class="w-100">Преимущества</h2>
                    <div class="col-lg-6">
                        <h3 class="mb-4">Порядок работы</h3>
                        <h3 class="text-primary">1. Покупка тарифа.</h3>
                        <p>- Купите один из восьми тарифов на сайте.<br>
                            Успешно оплатите выбранный тариф.</p>
                        <h3 class="text-primary">2. Добавление в чат-рассылку.</h3>
                        <p>- Наши сотрудники добавят Вас в специальную рассылку с прогнозами и аналитикой.</p>
                        <h3 class="text-primary">3. Умножение капитала.</h3>
                        <p>- Получайте прибыль от ставок с вероятностью выигрыша 80%.</p>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-4">Команда CASH UP</h3>
                        <p>Команда экспертов “Cash Up” - это профессиональные спортивыные аналитики с опытом работы
                            более 5 лет. Проходимость каждого из капперов - более 80%. Наша команда поможет вам
                            зарабатывать с первого дня сотрудничества. Наши аналитики будут давать вам от 7 до 12
                            прогнозов в день, проходимость которых в среднем 8 из 10. Это даст вам возможность
                            увеличивать ваш банк на сумму от 80%.</p>
                    </div>
                </div>
            </div>

        </section>
        <section class="freechat mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>БЕСПЛАТНЫЙ ЧАТ</h2>
                        <p>Присоедниняйся к нашему бесплатному чату прямо сейчас и удостоверься в качестве нашей
                            работы.</p>
                        <b-button variant="light">Присоединяйся</b-button>
                    </div>
                </div>
            </div>

        </section>
        <section class="reviews  mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Отзывы</h2>
                    </div>
                    <div class="col-lg-7">
                        <b-carousel
                                id="carousel1"
                                style="text-shadow: 1px 1px 2px #333;"
                                controls
                                indicators
                                background="#ababab"
                                :interval="4000"
                                img-width="1024"
                                img-height="480"
                                v-model="slide"
                                @sliding-start="onSlideStart"
                                @sliding-end="onSlideEnd"
                        >

                            <!-- Slides with img slot -->
                            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                            <b-carousel-slide>
                                <img
                                        slot="img"
                                        class="d-block img-fluid w-100"
                                        src="./assets/img/reviews-1.jpg"
                                        alt="image slot"
                                />
                            </b-carousel-slide>
                            <b-carousel-slide>
                                <img
                                        slot="img"
                                        class="d-block img-fluid w-100"
                                        src="./assets/img/reviews-2.jpg"
                                        alt="image slot"
                                />
                            </b-carousel-slide>
                        </b-carousel>
                    </div>
                    <div class="col-lg-5">
                        <h3>ПИШИ, КАК ЕСТЬ. ЭТО ВАЖНО.</h3>
                        <p>Оставьте отзыв о нашей работе. Благодаря вашим комментариям мы становимся лучше.</p>
                        <b-button  v-b-modal.modal3 variant="light">Оставить отзыв</b-button>

                        <!-- Modal Component -->
                        <b-modal id="modal3" title="Bootstrap-Vue">
                            <p class="my-4">Hello from modal!</p>
                        </b-modal>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <b-nav>
                            <b-nav-item active>Active</b-nav-item>
                            <b-nav-item>Порядок работы</b-nav-item>
                            <b-nav-item>Команда</b-nav-item>
                            <b-nav-item>Отзывы</b-nav-item>
                            <b-nav-item>Контакты</b-nav-item>
                        </b-nav>
                    </div>
                    <div class="col-lg-3 ml-auto">
                        <a href="">info@cashup.bet</a>
                        <p>E-mail для сязи с нами</p>
                    </div>

                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Мы выкупаем прогнозы лучших каперов, после чего команда аналитиков делает свой анализ, и вы получаете надежные прогнозы',
                title: 'Прогнозы с 80%\n' +
                    '              проходимостью',
                slide: 0,
                sliding: null
            }

        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        },
        components: {}
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: #000;
        color: #fff;
        padding-top: 86px;
    }

    h2 {
        width: 100%;
        padding-bottom: 5px;
        margin-bottom: 40px;
        border-bottom: 1px solid #fff;
    }

    .navbar {
        background-color: rgba(#000, .6);

        .navbar-brand {
            width: 75px;

            img {
                max-width: 100%;
            }
        }
    }

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
