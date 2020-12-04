<template>
    <div>
        <h1>Login Page</h1>
        <div id="firebaseui-auth-container"></div>
    </div>
</template>
<script>
import * as firebaseui from 'firebaseui';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';

export default {
    mounted(){
        let ui = new firebaseui.auth.AuthUI(firebase.auth());

        ui.start('#firebaseui-auth-container', {
            signInSuccessUrl: '/',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
        });
    }
}
</script>
<style scoped>

</style>