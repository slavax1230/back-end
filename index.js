import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.urlencoded({ extended:false}))
app.use(express.json())
app.use(cors())

app.use('/api/users', (req,res) => {
    return res.status(200).json({
        data: "hello-world"
    })
})

const port = 3001
app.listen(port, () => {
    console.log(`server is working on port ${port}`);
});