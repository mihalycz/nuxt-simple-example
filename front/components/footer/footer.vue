<template>
    <footer :class="`${isColorsGenerating ? 'magic' : ''}`">
        <h3>&#9822;</h3>
    </footer>
</template>

<script>
    export default {
        name: "footer-content"
    }
</script>

<style lang="scss">
    footer {
        @include content-common;
        height: 30vh;

        h3 {
            transition: font-size 1s;
            font-weight: 500;
            font-size: 5vw;
            line-height: 30vh;

            @media all and (min-width: $screen-tablet-min-width) and (max-width: $screen-tablet-max-width) {
                font-size: 10vw;
            }

            @media all and (max-width: $screen-phone-max-width) {
                font-size: 20vw;
                line-height: unset;
            }
        }

        &.magic {
            height: 100vh;
            background: transparent;
            position: absolute;
            top: 0;
            left: 0;

            h3 {
                line-height: 100vh;
                font-size: 90vh;

                @media all and (min-width: $screen-tablet-min-width) and (max-width: $screen-tablet-max-width) {
                    font-size: 80vh;
                }

                @media all and (max-width: $screen-phone-max-width) {
                    font-size: 80vw;
                    line-height: 100vh;
                }
            }
        }
    }
</style>