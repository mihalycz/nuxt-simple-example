import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      isColorsGenerating: false
    },
    mutations: {
      setIsColorsGenerating(state, isColorsGenerating) {
        state.isColorsGenerating = isColorsGenerating;
      }
    },
    getters: {
      getIsColorsGenerating: state => state.isColorsGenerating,
    }
  });
};

export default createStore;
