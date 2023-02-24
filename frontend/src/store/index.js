import { createStore } from 'vuex';
import login from './Login'

const store = createStore({
  modules: {
    login
  }
});
export default store;