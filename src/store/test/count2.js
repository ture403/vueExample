// store.js
const count2 = {
  namespaced: true,
  state: {
    counter: 0,
  },
  mutations: {
    incrementCounter(state, value) {
      state.counter += value;
    },
  },
 
};

export default count2;
