export default {
  namespaced: true,
  // IMPORTANT: state must be a function so the module can be
  // instantiated multiple times
  state: () => ({
    count: 0
  }),

  mutations: {
    increment: state => state.count++
  },

  actions: {
    increment: ({ commit }) => commit("increment"),

    asyncIncrement({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 500);
      }).then(() => {
        commit("increment");
      });
    }
  }
};
