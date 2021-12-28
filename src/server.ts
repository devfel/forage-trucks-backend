import express from 'express';

const app = express();
app.use(express.json());

app.post('/users', (request, response) => {
    request.body

    const users = [
        { name: 'Luiz', age: 15 },
        { name: 'Luiza', age: 25 },
    ]

    return response.json(users);
})

// localhost:3333
app.listen(3333);
