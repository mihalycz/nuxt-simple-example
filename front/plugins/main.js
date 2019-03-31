import Vue from 'vue';
import { mapGetters } from 'vuex';

Vue.mixin({
  computed: {
    ...mapGetters({
      isColorsGenerating: 'getIsColorsGenerating'
    }),
    contentBlocksStyles() {
      return this.isColorsGenerating ? { opacity: '0' } : null;
    }
  },
  methods: {
    toggleColorGeneration() {
      this.$store.commit('setIsColorsGenerating', !this.isColorsGenerating);
    },
    *getRandomHexColor() {
      while (true) {
        yield `${Math.floor(Math.random()*16777215).toString(16)}`;
      }
    }
  },
});
