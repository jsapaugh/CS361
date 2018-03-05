//var mysql = require('mysql');
/*var pool = mysql.createPool({
  connectionLimit : 10,
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs361_schmidlc',
  password: '0945',
  database: 'cs361_schmidlc'
});


module.exports.pool = pool;


function LogInQuery(PorD){
    var queryString;
    if (PorD == "P"){
        queryString = "SELECT UserID from PatientDatabase WHERE UserName = \""+userNameInput+"\"  AND Password = \""+passWordInput+"\"";
    }
    else if (PorD == "D"){

    }

}

*/
function checkInput(){
	var body = document.body;
	document.getElementById("patientLogIn").addEventListener("click", function(){
       var userNameInput = document.getElementById("patientUserName").value;
       var userPasswordInput = document.getElementById("patientPassword").value;
       alert(userPasswordInput);
		
		
	});
	document.getElementById("doctorLogIn").addEventListener("click", function(){
		
	});

}
checkInput();