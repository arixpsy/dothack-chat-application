<template>
    <div class="chat-container">
        <div class="messsage-container">
            <Message v-for="(message, index) in messages" v-bind:key="index"></Message>
        </div>
        <form @submit="sendMessage" class="input-container">
            <input type="text" v-model="messageInput" />
        </form>
    </div>
</template>
<script>
import getMessages from './../api/getMessages.js';
import Message from './Message';

export default {
    components: {
        Message
    },
    data(){
        return {
            messageInput: "",
            messages: []
        }
    },
    mounted(){
        getMessages((data)=>{ this.messages = data });
        console.log(this.messages)
    },
    methods:{
        sendMessage(){
            
        }
    }
}
</script>
<style scoped>
.chat-container{
    width: 100%;
    max-width: 600px;
}
</style>