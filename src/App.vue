<template>
    <div id="app">
        <b-navbar  fixed="top" toggleable="md" type="dark" variant="">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">Лого</b-navbar-brand>

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
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <h1 >{{ title }}</h1>
                        <p >{{ msg }}</p>
                    </div>
                    <div class="col-lg-7">
                        <img src="./assets/player.png" alt="">
                    </div>
                </div>
            </div>
        </header>
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
        <section class="benefits">
            <div class="container">
                <div class="row">
                    <div class="w-100">Подписки</div>
                    <div class="col-lg-6">
                        <h2>Порядок работы</h2>
                        <h3>1. Покупка тарифа.</h3>
                        <p>- Купите один из восьми тарифов на сайте.<br>
                        Успешно оплатите выбранный тариф.</p>
                        <h3>2. Добавление в чат-рассылку.</h3>
                        <p>- Наши сотрудники добавят Вас в специальную рассылку с прогнозами и аналитикой.</p>
                        <h3>3. Умножение капитала.</h3>
                        <p>- Получайте прибыль от ставок с вероятностью выигрыша 80%.</p>
                    </div>
                    <div class="col-lg-6">
                       <h2>Команда CASH UP</h2>
                        <p>Команда экспертов “Cash Up” - это профессиональные спортивыные аналитики с опытом работы более 5 лет. Проходимость каждого из капперов - более 80%. Наша команда поможет вам зарабатывать с первого дня сотрудничества. Наши аналитики будут давать вам от 7 до 12 прогнозов в день, проходимость которых в среднем 8 из 10. Это даст вам возможность увеличивать ваш банк на сумму от 80%.</p>
                    </div>
                </div>
            </div>

        </section>
        <section class="freechat">
            <div class="container">
                <div class="row">
                    <div class="w-100">Подписки</div>
                    <div class="col-lg-12">
                       <h2>БЕСПЛАТНЫЙ ЧАТ</h2>
                        <p>Присоедниняйся к нашему бесплатному чату прямо сейчас и удостоверься в качестве нашей работы.</p>
                        <b-button variant="outline-default">Присоединяйся </b-button>
                    </div>
                </div>
            </div>

        </section>
        <section class="reviews">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <b-carousel id="carousel1"
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

                            <!-- Text slides with image -->
                            <b-carousel-slide caption="First slide"
                                              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                              img-src="https://picsum.photos/1024/480/?image=52"
                            ></b-carousel-slide>

                            <!-- Slides with custom text -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                                <h1>Hello world!</h1>
                            </b-carousel-slide>

                            <!-- Slides with image only -->
                            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
                            </b-carousel-slide>

                            <!-- Slides with img slot -->
                            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                            <b-carousel-slide>
                                <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                                     src="https://picsum.photos/1024/480/?image=55" alt="image slot">
                            </b-carousel-slide>

                            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                                    ut lacus vel interdum.
                                </p>
                            </b-carousel-slide>

                        </b-carousel>
                    </div>
                    <div class="col-lg-5">
                        <h2>ПИШИ, КАК ЕСТЬ. ЭТО ВАЖНО.</h2>
                        <p>Оставьте отзыв о нашей работе. Благодаря вашим комментариям мы становимся лучше.</p>
                        <b-btn v-b-modal.modal1>Оплатить</b-btn>

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
                    '              проходимостью'
            }
        },
        components:{

        }
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
    }

</style>
