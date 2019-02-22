<template>
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
                                    src="../assets/img/reviews-1.jpg"
                                    alt="image slot"
                            />
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <img
                                    slot="img"
                                    class="d-block img-fluid w-100"
                                    src="../assets/img/reviews-2.jpg"
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
</template>

<script>
    export default {
        name: "reviews",
        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>