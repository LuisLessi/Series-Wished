import * as types from './mutation-types';

export default {
    [types.SET_USER] (state, payload){
        state.user = payload
    },
    [types.SET_TOKEN] (state, payload){
        console.log('Token definido no Vuex:', payload)
        state.token = payload
    }
}