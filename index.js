import express from 'express';

const app = express();

app.use(express.json());

const PORT = 5000

const students = [];
app.get('/health', (req, res)=>{
    res.json({status: 'All good!, All set'});
});

app.get('/students', (req, res)=>{
    res.json({
        success: true,
        data: students,
        message: 'Successfully featched all students',
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}.')
});