function login() {
    if (document.getElementById('email').value == '') {
        alert("Email is Necessary");
    }
    if (document.getElementById('password').value == '') {
        alert("please fill password field");
    }

    else {
        var a = document.getElementById('email').value;
        var b = document.getElementById('password').value;
        /*
        if (a != se) {
            alert("Wrong Email id ");
        }
        else if (b != sp) {
            alert("Wrong Password  ");
        }
        */
        window.location = 'http://127.0.0.1:5500/index.html';
    }
}

function signup() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('re-password').value;
  
    if (email === '' || password === '' || rePassword === '') {
      alert('Please fill all fields');
      return;
    }
  
    if (password !== rePassword) {
      alert('Passwords do not match');
      return;
    }
  
    // perform signup logic here, e.g. submit form data via AJAX or redirect to signup page

    window.location = 'http://127.0.0.1:5500/Login.html';
  }
  
  function send(){
    var email = document.getElementById('email').value;
    var fnmae = document.getElementById('fname').value;
    var mobile = document.getElementById('mobile').value;
  
    if (email === '' || fname === '' || mobile === '') {
      alert('Please fill all fields');
      return;
    }
  
    else{
        alert("Thank You For your Queries or message , We will reply to your message within 2 hours ");
    }
  }
