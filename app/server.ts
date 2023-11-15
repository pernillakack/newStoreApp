import express from 'express'
import mysql from 'mysql2/promise'

const app = express();
const PORT = process.env.PORT || 8081;

const connection = mysql.createPool({
    host:'LAPTOP-PH',
    user: 'root',
    password: 'root',
    database: 'funstore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit:0,
});

app.get('/getData', async (req,res)=> {
    try {
        const[rows] = await connection.execute('SELECT * FROM items')
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
})