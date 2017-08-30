const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>hello express</h1>');
    res.send({
        name: 'ringo',
        likes: [
            'movie', 
            'game',
            'football'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "unable to handle request"
    })
})

app.listen(3000, () => {
    console.log('server is up on port number 3000')
});