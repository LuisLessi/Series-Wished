import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      // Defina o estado inicial da sua aplicação aqui
    };
  },
  mutations: {
    // Adicione as mutações que você deseja usar para alterar o estado da sua aplicação aqui
  },
  actions: {
    // Adicione as ações que você deseja usar para buscar ou processar dados aqui
  },
  getters: {
    // Adicione os getters que você deseja usar para buscar ou processar dados do estado aqui
  }
});

export default store;