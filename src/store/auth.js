import firebase from "firebase/app";
import { longStackSupport } from "q";

export default {
  actions: {
    async login({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch(e) {
        commit("setError", e);
        throw e;
      }
    },
    async logout({commit}) {
      await firebase.auth().signOut();
      commit("clearInfo");
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async register({dispatch, commit}, {email, password, name}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill : 100000,
          name 
        });
      } catch(e) {
        //console.log("E:", e);
        commit("setError", e);
        throw e;
      }
    }
  }
}
