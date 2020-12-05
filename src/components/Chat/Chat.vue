<template>
    <div class="chat-container">
        <UserList></UserList>
        <div class="messsage-container">
            <Message />
        </div>
        <MessageInput></MessageInput>
    </div>
</template>
<script>
import MessageInput from './MessageInput';
import Message from './Message';
import UserList from './UserList';

export default {
    components: {
        Message, MessageInput, UserList
    },
    data(){
        return {
            users: []
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style scoped>
.chat-container{
    width: 100%;
    max-width: 600px;
}
</style>