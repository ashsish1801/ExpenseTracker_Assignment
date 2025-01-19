const express = require('express');
const app = express();
const connectDB = require('./Utils/mongoose')
const PORT=8000;
const cors=require('cors')
const EntryRoutes = require('./Routes/EntryRoutes')

connectDB();

app.use(cors());
app.use(express.json());



app.use('/',EntryRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})