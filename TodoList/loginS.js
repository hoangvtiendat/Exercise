
function checkValid() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log(email);
    console.log(password);

    var checkus = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]+$/
    var checkpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/

    var check = true
    if (!checkus.test(email)) {
        console.log("username error")
        check = false
        document.querySelector(".errEmail").style.display = "inline-block";



    }
    if (!checkpw.test(password)) {
        console.log("password error")
        check = false
        document.querySelector(".errPassword").style.display = "inline-block";
    }
    if (check == false) {
        return false

    }
    else if (check == true) {
        document.querySelector(".errPassword").style.display = "none";
        document.querySelector(".errEmail").style.display = "none";
        return true;
    }


}


function login()
{
    if(checkValid() === true)
    {
        console.log("ok")
    }

}
