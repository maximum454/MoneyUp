<template>
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
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>