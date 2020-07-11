
function validateform() {

    //validate password

    var ps = document.StudentForm.StudentPassword.value;
    var cps = document.StudentForm.StudentConfirmPassword.value;
    var n = ps.localeCompare(cps);
    var strength2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8}$/;
    if (!ps.match(strength2)) {
        alert(
            'invalid password max length (8) at least one capital and one small alhabet is required and at east one digit'
            );
        return false;
    }
    if (n != 0) {
        alert('the password do not match');
        return false;
    }

    return true;

}

function enableDegree() {
    let br= document.getElementById("branch");
    br[0].disabled=true;
    var options = document.getElementById("degree");
    options.selectedIndex =0;
    options.disabled = false;
    let index=br.selectedIndex;
    console.log(index);
    for (var i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    if( index==1){
    options[index+1].disabled=false;
    options[index].disabled = false;
    }
    else{
        options[index+1].disabled=false;
        options[index+2].disabled = false;
    }
}