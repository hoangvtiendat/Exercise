var ab = document.querySelector(".ab")
var ac = document.querySelector(".ac")


function move1() {
    ab.style.color = '#015ecc'
    ab.style.top = '10px'
    ab.style.left = '6px'
    ab.style.backgroundColor = '#fff'
    ab.style.padding = '0 5px'
    document.querySelector('.boxus').style.display = ''


}
function move2() {
    ac.style.color = '#015ecc'
    ac.style.top = '10px'
    ac.style.left = '6px'
    ac.style.backgroundColor = '#fff'
    ac.style.padding = '0 5px'
    document.querySelector('.boxpw').style.display = ''
}


var login = document.querySelector('.dangnhap')
login.addEventListener('click', loginn)

function loginn() {
    var us1 = document.querySelector('.user1').value
    var us2 = document.querySelector('.user2').value
    console.log('user: ', us1)
    console.log('password: ', us2)
    var checkus = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/
    var checkpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/

    var check = true
    if (!checkus.test(us1)) {
        console.log("username error")
        check = false
        ab.style.color = 'red'
        document.querySelector('.user1').style.border = '1px solid red'
        document.querySelector('.boxus').style.display = 'inline-block'


    }
    if (!checkpw.test(us2)) {
        console.log("password error")
        check = false
        ac.style.color = 'red'
        document.querySelector('.user2').style.border = '1px solid red'
        document.querySelector('.boxpw').style.display = 'inline-block'
    }
    if (check == false) {
        return false

    }
    else if(check == true)
    {
        alert('Đăng nhập thành công')
    }


}
function revertColorus() {
    ab.style.color = '';
    document.querySelector('.user1').style.border = ''
    document.querySelector('.boxus').style.display = ''


}

function revertColorpw() {
    ac.style.color = '';
    document.querySelector('.user2').style.border = ''
    document.querySelector('.boxpw').style.display = ''
}




//blur doi lap click
document.querySelector(".user1").addEventListener("blur", revertColorus);
document.querySelector(".user2").addEventListener("blur", revertColorpw);


