<template>
    <form v-on:submit.prevent="sendMessage">
        <input type="text" placeholder="" v-model="messageInput" />
    </form>
</template>
<script>
import { firestore } from './../../firebase';
import firebase from 'firebase/app';

export default {
    data(){
        return {
            messageInput: ""
        }
    },
    methods: {
        async sendMessage(){
            let user = firebase.auth().currentUser
            
            const messageObject = {
                content: this.messageInput,
                ts: firebase.firestore.Timestamp.now(),
                user: user.uid
            }
            const messagesRef = firestore.collection('messages').doc('staticChatId');
            messagesRef.update({
                messages: firebase.firestore.FieldValue.arrayUnion(messageObject)
            })

            this.messageInput = "";
        }
    }
}
</script>


your mother is gay