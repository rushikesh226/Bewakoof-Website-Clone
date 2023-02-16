document.querySelector("#MyOtp").addEventListener("submit", confirm);

function confirm(event) {
  event.preventDefault();
  var otp = document.querySelector("#OTP").value;
  if (otp == "1234") {
    document.querySelector("#MyOtp").textContent = "";
    window.location.href="success.html"
  } else {
      alert ("Oops! The OTP You Entered Is Wrong!")
  }
}