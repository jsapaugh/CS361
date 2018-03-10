function application(userName, firstName, lastName, city, state, license, ref1, ref2, ref3){
    var queryString;
		// TODO: change values to avoid sql injection
    var req = new XMLHttpRequest();

  	req.open("POST", "flip3.engr.oregonstate.edu/insert", true);
  	req.setRequestHeader("Content-type", "application/json");

    var payload = {};
    payload.userName = userName;
    payload.firstName = firstName;
    payload.lastName = lastName;
    payload.city = city;
    payload.state = state;
    payload.license = license;
    payload.ref1 = ref1;
    payload.ref2 = ref2;
    payload.ref3 = ref3;

    req.addEventListener("load", function(){
			if(req.status >= 200 && req.status < 400)
			{
        alert("payload sent")
			}
			else
			{
				console.log("Error in network request: " + req.status + " " + req.statusText);
			}
		});

		req.send(JSON.stringify(toSend));


    //queryString = "INSERT INTO doc_app VALUES ("+userName+", "+firstName+", "+lastName+", "+city+", "+state+", "+license+", "+ref1+", "+ref2+", "+ref3+")"

    // TODO: submit query string to database using pool
    alert("Data submitted to database: " + queryString);
}

function getFields() {
		 var userName = document.getElementById("userName").value;
		 var firstName = document.getElementById("firstName").value;
		 var lastName = document.getElementById("lastName").value;
		 var city = document.getElementById("city").value;
		 var state = document.getElementById("state").value;
		 var license = document.getElementById("license").value;
     var ref1 = document.getElementById("ref1").value;
     var ref2 = document.getElementById("ref2").value;
     var ref3 = document.getElementById("ref3").value;

		 if (checkEmptyFields(userName, firstName, lastName, city, state, license, ref1, ref2, ref3)) {
			application(userName, firstName, lastName, city, state, license, ref1, ref2, ref3);
			alert("Application submitted. We will get in touch with you!")
		}
		else {
			alert("Please enter data in all fields.");
		}
}

function checkEmptyFields(firstName, lastName, city, state, license, startTime, endTime) {
	return (firstName != "" &&
					lastName != "" &&
					city != "" &&
					state != "" &&
					license != "" &&
					startTime != "" &&
					endTime != ""
					);
}
