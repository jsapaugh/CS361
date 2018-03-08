var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3310);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req, res, next){
	res.render('loginPage');
});

app.post('/logInPatient', function(req, res, next){
  var userName = req.body.USERNAME;
  var password = req.body.PASSWORD;
   
  //console.log(queryString);
  var context = {};
  mysql.pool.query('SELECT UserID FROM `loginDatabase` WHERE UserName=? AND Password=?',[userName,password], function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    console.log("Hello World!");
    context.results = rows;
    console.log(context);
    console.log(context.results);
    //console.log(context.results[0].UserID);
    if (context.results == ''){
    	console.log("invalid username and password");
    }
    else{

    	console.log("Valid User"); //here is there ID ="+context.results[0].UserID);

    }
    //console.log(context);
    //res.send({some: 'worked'});
    
  });
  
}); 

app.post('/logInDoctor', function(req, res, next){
  var queryString = req.body.newQuery;
  mysql.pool.query(queryString, function(err, result){
    if(err){
      next(err);
      return;
    }
    
  });
  
});


app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

/*function LogInQuery(PorD){
    var queryString;
    if (PorD == "P"){
        queryString = "SELECT UserID from PatientDatabase WHERE UserName = \""+userNameInput+"\"  AND Password = \""+passWordInput+"\"";
        mysql.pool.query(queryString)
    }
    else if (PorD == "D"){

    }

}*/

