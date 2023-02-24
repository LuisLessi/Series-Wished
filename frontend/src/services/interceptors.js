import store  from '../store/Login'
import axios from 'axios';

export default req => {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch('login/ActionSignOut')
      window._router.push({ name: 'login' })
    }
  }
}
