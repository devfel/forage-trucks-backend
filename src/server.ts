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
// Aula 2: https://www.youtube.com/watch?v=xK8d5tLptHY (37:17)
app.listen(3333);
