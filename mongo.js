const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "bmsnyETrabLpch2F";
const DATABASE_NAME = 'student';
const CONNECTION_URI = `mongodb+srv://database.sskxbrh.mongodb.net/?retryWrites=true&w=majority&appName=database`;



async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'pret_01',
        pass: PASSWORD,
    });
}




main().then(()=>{
    console.log("mongodb connected");
}).catch(console.log);

