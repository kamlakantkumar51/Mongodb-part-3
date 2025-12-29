const mongoose = require('mongoose');
const Chat = require('./models/chat');

main().then(() => {
    console.log("connection suceessfull")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new Chat({
    from:"sonu",
    to:"monu",
    msg:"hello monu",
    created_at:new Date()
});

let allChats = [
    {
        from:"chandan",
        to:"khusi",
        msg:"hello khusi",
        created_at:new Date()
    },

    {
        from:"rahul",
        to:"ankit",
        msg:"hello ankit",
        created_at:new Date()
    },

    {
        from:"chandan",
        to:"khusi",
        msg:"I love you khusi",
        created_at:new Date()
    },
    {
        from:"sonu",
        to:"monu",
        msg:"hello monu",
        created_at:new Date()
    },
    {
        from:"student",
        to:"faculty",
        msg:"hello sir, i have a doubt in data structures",
        created_at:new Date()
    }
];

Chat.insertMany(allChats);