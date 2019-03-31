<template>
    <section :style="contentBlocksStyles">
        <p>Please, click the page to see the magic and click again to stop.</p>
    </section>
</template>

<script>
    export default {
        name: "main-content"
    }
</script>

<style lang="scss">
    section {
        @include content-common;
        height: 40vh;

        p {
            font-size: 1.2vw;
            line-height: 40vh;
            font-style: italic;
            word-wrap: break-word;

            @media all and (min-width: $screen-tablet-min-width) and (max-width: $screen-tablet-max-width) {
                font-size: 2vw;
            }

            @media all and (max-width: $screen-phone-max-width) {
                font-size: 6vw;
                line-height: 6vh;
            }
        }
    }
</style>