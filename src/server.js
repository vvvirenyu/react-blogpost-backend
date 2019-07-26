import express from 'express'
import parser from 'body-parser'

const app = express();

app.use(parser.json());

app.get('/hello', (req, res) => res.send('Hello'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));


app.listen(8000, () => console.log('app is listening'));