<template>
    <header :style="contentBlocksStyles">
        <h1>Simple Nuxt Example</h1>
    </header>
</template>

<script>
    export default {
        name: "header-content"
    }
</script>

<style lang="scss">
    header {
        @include content-common;
        height: 30vh;

        h1 {
            font-weight: 800;
            font-size: 3.9vw;
            line-height: 30vh;

            @media all and (min-width: $screen-tablet-min-width) and (max-width: $screen-tablet-max-width) {
                font-size: 5vw;
            }

            @media all and (max-width: $screen-phone-max-width) {
                font-size: 9vw;
            }
        }
    }
</style>