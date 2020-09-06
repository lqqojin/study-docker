const express =require('express');
const PORT = 8080;
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Wonderland! Awesome!');
})

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
    console.log('OK');
})
