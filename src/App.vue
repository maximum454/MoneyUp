<template>
    <div id="app">
        <app-nav></app-nav>
        <app-header></app-header>
        <app-subscriptions></app-subscriptions>
        <app-benefits></app-benefits>
        <app-freechat></app-freechat>
        <app-reviews></app-reviews>
        <app-footer></app-footer>
    </div>
</template>

<script>
    export default {
        name: 'app'
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



</style>
