<template>
  <article v-on:click="toggleColorGeneration" :style="style" :class="`${this.isColorsGenerating ? 'magic' : ''}`">
    <header-content></header-content>
    <main-content></main-content>
    <footer-content></footer-content>
  </article>
</template>

<script>
  import HeaderContent from '~/components/header/header.vue';
  import FooterContent from '~/components/footer/footer.vue';
  import MainContent from '~/components/main-content/main-content.vue';

  export default {
    components: {
      HeaderContent,
      FooterContent,
      MainContent
    },
    data() {
      return {
        backgroundGradient: null
      }
    },
    watch: {
      isColorsGenerating(val) {
        if (val) {
          let delay = 700;
          let setGradient = (it) => setTimeout(() => {
            this.backgroundGradient = `linear-gradient(45deg, #${result.value} 25%, transparent 26%, transparent 75%, #${result.value} 76%), linear-gradient(-45deg, #${result.value} 25%, transparent 26%, transparent 75%, #${result.value} 76%)`
            result = it.next();
            if (this.isColorsGenerating && !result.done) {
              setGradient(it);
            } else {
              this.backgroundGradient = null;
            }
          }, delay);

          let it = this.getRandomHexColor();
          let result = it.next();
          setGradient(it)
        } else {
          this.backgroundGradient = null;
        }
      }
    },
    computed: {
      style() {
        return {
          background: this.backgroundGradient,
        };
      }
    }
  }
</script>

<style lang="scss">
  article {
    background: linear-gradient(45deg, black 25%, transparent 26%, transparent 75%, black 76%), linear-gradient(-45deg, black 25%, transparent 26%, transparent 75%, black 76%);
    background-color: white;
    background-size: 200px 200px !important;
    width: 100vw;
    height: 100vh;
    transition: background 1s ease;

    &:after {
      content: '';
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #7f828b;
      opacity: 0.9;
      transition: opacity 1s ease;
    }

    &.magic {
      &:after {
        opacity: 0;
      }
    }

    @media all and (min-width: $screen-tablet-min-width) and (max-width: $screen-tablet-max-width) {
      background-size: 100px 100px !important;
    }

    @media all and (max-width: $screen-phone-max-width) {
      background-size: 50px 50px !important;
    }
  }
</style>
