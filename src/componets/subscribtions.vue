<template>
    <section class="subscriptions">
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
                        <button type="button" class="btn btn-light w-100" data-toggle="modal" data-target="#modal1">
                            Олатить
                        </button>

                        <!-- Modal Component -->
                        <div class="modal" tabindex="-1" role="dialog" id="modal1">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputName1">Ваше имя</label>
                                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="NameHelp">
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                    <div class="modal-header">
                                        <h5 class="modal-title">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        name: 'subscriptions'
    }
</script>

<style scoped lang="scss">
    .subscriptions {
        margin-bottom: 3rem;
        &__item {
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
        }

        &__img {
            position: relative;
            text-align: center;
        }
        &__price {
            font-size: 30px;
            font-weight: bold;
            text-align: center;
        }
    }
</style>