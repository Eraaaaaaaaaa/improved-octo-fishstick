var express = require ('express')
var cookieParser = require('cookie-parser');
var app= express();
app.use(cookieParser());

app.get('/cookieset',function(req,res){
    res.cookie('cookie_name','cookie_value');
    res.cookie('company', 'jCoders');
    res.cookie('name', 'filan');

    res.status(200).send('cookie is set');
})

app.get('/cookieget', function(req, res) {
    res.status(200).send(req.cookies);
})

app.get('/', function(req,res){
    const puna = req.cookies.company;
    const username= req.cookies.name || 'i panjohur';
    res.send(`Welcome to ${puna} ${username}`)
    
    res.status(200).send('Welcome to jCoders!')
})

var server = app.listen(3676, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`)
})