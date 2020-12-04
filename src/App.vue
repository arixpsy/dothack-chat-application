<template>
  <div id="app">
    <Navbar v-if="user" v-on:logout="clearUser"></Navbar>
    <Chat v-if="user"></Chat>
    <Login v-else></Login>
  </div>
</template>



<script>
import firebase from "firebase/app";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";

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
    }
  }
};
</script>



<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  padding-top: 56px;
}
</style>
