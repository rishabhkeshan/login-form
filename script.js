var objPeople = [
	{
		username: "rishabhkeshan",
		email:"rishabh.keshan2019@vitstudent.ac.in",
		password: "1234"
	},
	{
		username: "kashishmittal",
		email: "kashish.mittal2018@vitstudent.ac.in",
		password:"1234"
	},
	{
		username: "eliojordan",
		email: "eliojordan.lopes2018@vitstudent.ac.in",
		password: "1234"
	}
]
var txt="";

function getInfo() {
	var username = document.getElementById('exampleInputUsername1').value
	var email = document.getElementById('exampleInputEmail1').value
	var password = document.getElementById('exampleInputPassword1').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && email == objPeople[i].email && password == objPeople[i].password) {
			txt="Successfuly Logged In!!";
			document.getElementById("disp").innerHTML = txt;
			// stop the function if this is found to be true
			return
		}
	}
	txt=("User data not found");
	document.getElementById("disp").innerHTML = txt;
}