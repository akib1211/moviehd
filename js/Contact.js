
function check(){
    var user_cfirstname=document.getElementById('cfirstname');
    var user_clastname=document.getElementById('lastname');
    var user_masg=document.getElementById('masg');
    if (user_cfirstname.value==''){
        document.getElementById('pfnam').innerHTML='Write Your First Name';
        user_cfirstname.focus();
        return false;
    }
    if(user_clastname.value==''){
        document.getElementById('lstnam').innerHTML='Write Your Last Name';
        user_clastname.focus();
        return false;
    }
    if(user_masg.value==''){
        document.getElementById('masegs').innerHTML='write some word';
        user_masg.focus();
        return false;
    }
}