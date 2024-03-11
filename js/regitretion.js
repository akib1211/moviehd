function check(){
    var user_name=document.getElementById('name');
    var user_email=document.getElementById('email');
    if(user_name.value==''){
        alert('Enter your Name');
        user_name.focus();
        return false;
    }
    if(user_email.value==''){
        alert('Enter Your Email');
        user_email.focus();
        return false;
    }
    
}