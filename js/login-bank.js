document.getElementById('submit-button').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if(userEmail === 'abbubank@gmail.com' && userPass === 'abbuami'){
       window.location.href = 'bank.html';
    }
    else{
       alert('toke ami teijjo sonton gosona korlam .Tui pass vule gesos.');
    }
    
   })