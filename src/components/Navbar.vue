<template>
    <div>
        <button v-on:click="logoutTrigger">logout</button>
    </div>
</template>
<script>
import firebase from 'firebase/app';

export default {
    methods:{
        logoutTrigger(){
            firebase.auth().signOut();
            this.$emit('logout');
        }
    }
}
</script>
<style scoped>
div{
    height: 56px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: blue;
}
</style>