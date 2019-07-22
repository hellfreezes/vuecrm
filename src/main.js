import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyA2ZGxcME_BvFc9ZSy1Dodc8ERE3rvXue8",
  authDomain: "vue-krsk.firebaseapp.com",
  databaseURL: "https://vue-krsk.firebaseio.com",
  projectId: "vue-krsk",
  storageBucket: "",
  messagingSenderId: "325474589643",
  appId: "1:325474589643:web:cbcddb3e9f9d6e20"
});

let app;

// Если бэкэнд не используется, то вынести создание нового Vue за пределы колбэка
firebase.auth().onAuthStateChanged(()=>{
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
