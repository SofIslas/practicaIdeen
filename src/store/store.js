import Vuex from 'vuex';



export default new Vuex.Store({
state: {
usuario: 'not logged'
},
mutations: {
actualizarUsuario(state, actUsuario) {
state.usuario = actUsuario;
}
}
});