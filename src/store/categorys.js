import firebase from "firebase/app";

export default {
  actions: {
    async fetchCategories({ commit, dispatch }) {
      try {
        const uid = await dispatch("getUid");
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once("value")).val() || {};
        const cats = [];
        Object.keys(categories).forEach(key => {
          cats.push({
            title: categories[key].title,
            limit: categories[key].limit,
            id: key
          });
        });
        return cats;
      }
      catch(e) {
        // Мутации в тч setError хранятся в index.js
        commit("setError", e);
        throw e;
      }
    },
    async createCategory({ commit, dispatch }, { title, limit }) {
      try {
        const uid = await dispatch("getUid");
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit});
        return { title, limit, id: category.key };
      }
      catch(e) {
        // Мутации в тч setError хранятся в index.js
        commit("setError", e);
        throw e;
      }
    }
  }
}