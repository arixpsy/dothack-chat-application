<template>
  <div id="app">
    <Navbar v-if="isloggedIn" v-on:logout="clearUser"></Navbar>
    <Chat v-if="isloggedIn"></Chat>
    <Login v-else></Login>
  </div>
</template>



<script>
import firebase from "firebase/app";
import Login from "./components/Login";
import Chat from "./components/Chat/Chat";
import Navbar from "./components/Navbar";
import './assets/main.css';

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  components: {
    Login,
    Chat,
    Navbar
  },
  created() {
    this.user = firebase.auth().currentUser;
  },
  methods:{
    clearUser(){
      this.user = null
      this.$nextTick(()=>{
        this.$forceUpdate();
      });
    }
  },
  computed:{
    isloggedIn(){
      return this.user == null ? false : true;
    }
  }
};
</script>



<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  padding-top: 56px;
  min-height: 100vh;
}
</style>
