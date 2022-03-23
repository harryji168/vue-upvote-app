import { createStore } from "vuex";
export default createStore({
  state: {
    upvotes:[
      { group: '1', sel: false },
      { group: '2', sel: false },
      { group: '3', sel: false },
    ]
  },
  mutations: {
    upvoteselect(state, group) {
      let index = state.upvotes.findIndex((upvote) => upvote.group===group);
      state.upvotes[index].sel=true      
    },
    upvotenoselect(state, group) {
      let index = state.upvotes.findIndex((upvote) => upvote.group===group);
      state.upvotes[index].sel=false     
    },
  },
  actions: {   
    upvoteButton({ commit }, objeto) {
      console.log("sdsd:"+objeto);
      if (objeto.sel) {
        commit("upvotenoselect", objeto.group);        
      } else {
        commit("upvoteselect", objeto.group);
      }
    },
  },
  modules: {},
});