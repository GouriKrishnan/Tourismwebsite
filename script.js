

var email=document.getElementById('email');
var password=document.getElementById('password');
function verify(){
if(email.value==''||password.value==''){
    alert('Submitted');
}
else if(password.value.length<8){
    alert('Password should have minimum 8 characters');
}
else{
    alert('Form submitted');
}
}