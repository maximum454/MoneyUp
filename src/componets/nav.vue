<template>
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
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped>

</style>