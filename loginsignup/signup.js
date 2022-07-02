document.querySelector(".submit-btn").addEventListener("click",registerUser)
function registerUser() {
	
	var registername = document.getElementById('name').value
    localStorage.setItem("name", registername);
    var registermobile = document.getElementById('mobile').value
    localStorage.setItem("mobile", registermobile);
    var registeremail = document.getElementById('email').value
	localStorage.setItem("email", registeremail);
	var registerPassword = document.getElementById('password').value
	localStorage.setItem("password", registerPassword);

   
	     
}