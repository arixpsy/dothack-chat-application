import { db } from './../firebase';

const getMessages = (setMessages) => {
    let messageRef = db.ref('messages');
    messageRef.on('value', snapshot =>{
        const data = snapshot.val();
        setMessages(data)
    });
} 

export default getMessages;