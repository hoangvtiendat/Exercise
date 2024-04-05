
function render() {
    // console.log("ok")




    listTodo = localStorage.getItem("listTodo") ? JSON.parse(localStorage.getItem("listTodo")) : [];
    listDoing = localStorage.getItem("listDoing") ? JSON.parse(localStorage.getItem("listDoing")) : [];
    listCompleted = localStorage.getItem("listCompleted") ? JSON.parse(localStorage.getItem("listCompleted")) : [];
    listBlocked = localStorage.getItem("listBlocked") ? JSON.parse(localStorage.getItem("listBlocked")) : [];

    let renderTodo = listTodo.map(function (value, index) {

        return `
        
                <div class="box"  draggable = "true">

                <div class="function">
                    <button onclick="edit(${index}, 'todo')" class="edit"></button>
                    <button onclick="deletee(${index}, 'todo')" class="delete"></button>
                    <input type="text" class="indexBox" name="" id="">

                </div>
                <div class="linkBox">${value.link}</div>
                <div class="titleBox">${value.title}</div>
                <div class="lineBox"></div>
                <div class="contentBox">${value.content}</div>

                <div class="timeBox">
                    <img src="clock.png" alt="">
                    <div class="time">June 30, 2022</div>
                </div>
            </div>

                `

    });
    let listboxTodo = document.getElementById("listboxTodo");
    listboxTodo.innerHTML = renderTodo.join("");



    let renderDoing = listDoing.map(function (value, index) {

        return `
        
                <div class="box"  draggable = "true">

                <div class="function">
                    <button onclick="edit(${index}, 'doing')" class="edit"></button>
                    <button onclick="deletee(${index}, 'doing')" class="delete"></button>
                    <input type="text" class="indexBox" name="" id="">

                </div>
                <div class="linkBox">${value.link}</div>
                <div class="titleBox">${value.title}</div>
                <div class="lineBox"></div>
                <div class="contentBox">${value.content}</div>

                <div class="timeBox">
                    <img src="clock.png" alt="">
                    <div class="time">June 30, 2022</div>
                </div>
            </div>

                `

    });
    let listboxDoing = document.getElementById("listboxDoing");
    listboxDoing.innerHTML = renderDoing.join("");


    let renderCompleted = listCompleted.map(function (value, index) {

        return `
        
                <div class="box"  draggable = "true">

                <div class="function">
                    <button onclick="edit(${index}, 'completed')" class="edit"></button>
                    <button onclick="deletee(${index}, 'completed')" class="delete"></button>
                    <input type="text" class="indexBox" name="" id="">

                </div>
                <div class="linkBox">${value.link}</div>
                <div class="titleBox">${value.title}</div>
                <div class="lineBox"></div>
                <div class="contentBox">${value.content}</div>

                <div class="timeBox">
                    <img src="clock.png" alt="">
                    <div class="time">June 30, 2022</div>
                </div>
            </div>

                `

    });
    let listboxCompleted = document.getElementById("listboxCompleted");
    listboxCompleted.innerHTML = renderCompleted.join("");


    let renderBlocked = listBlocked.map(function (value, index) {

        return `
        
                <div class="box" draggable = "true">

                <div class="function">
                    <button onclick="edit(${index}, 'blocked')" class="edit"></button>
                    <button onclick="deletee(${index}, 'blocked')" class="delete"></button>
                    <input type="text" class="indexBox" name="" id="">

                </div>
                <div class="linkBox">${value.link}</div>
                <div class="titleBox">${value.title}</div>
                <div class="lineBox"></div>
                <div class="contentBox">${value.content}</div>

                <div class="timeBox">
                    <img src="clock.png" alt="">
                    <div class="time">June 30, 2022</div>
                </div>
            </div>

                `

    });
    let listboxBlocked = document.getElementById("listboxBlocked");
    listboxBlocked.innerHTML = renderBlocked.join("");
    document.getElementById("numberTodo").innerText = listTodo.length;
    document.getElementById("numberDoing").innerText = listDoing.length;
    document.getElementById("numberCompleted").innerText = listCompleted.length;
    document.getElementById("numberBlocked").innerText = listBlocked.length;
}


function exit() {
    document.querySelector(".containerAddNew").style.display = "none";
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

}

function newTask() {
    document.querySelector(".containerAddNew").style.display = "flex"
    document.querySelector(".checkTodo").style.display = "none";
    document.querySelector(".titleBoxAdd").style.display = "inline-block";
    document.querySelector(".titleBoxEdit").style.display = "none"
    document.querySelector(".btnUpdate").style.display = "none"
    document.querySelector(".btnSubmit").style.display = "inline-block"

}


function validated() {
    let boxElement = document.querySelector(".boxAdd");
    let inpElement = boxElement.querySelectorAll(".inpBoxAdd");

    // console.log(inpElement);

    for (let i = 0; i < inpElement.length; i++) {
        if (inpElement[i].value.trim() === "") {
            // console.log("err")
            inpElement[i].style.border = "1px solid red";
        }
        else {
            inpElement[i].style.border = "1px solid green";
        }
    }
}
// var listTodo;

// var listCompleted;
// var listBlocked;

listTodo = localStorage.getItem("listTodo") ? JSON.parse(localStorage.getItem("listTodo")) : [];
listDoing = localStorage.getItem("listDoing") ? JSON.parse(localStorage.getItem("listDoing")) : [];
listCompleted = localStorage.getItem("listCompleted") ? JSON.parse(localStorage.getItem("listCompleted")) : [];
listBlocked = localStorage.getItem("listBlocked") ? JSON.parse(localStorage.getItem("listBlocked")) : [];


var typeList;


function edit(index, type) {

    typeList = type;
    console.log("typeList: ", typeList)
    if (type === 'todo') {
        document.getElementById("ckTodo").checked = true;

        document.getElementById("link").value = listTodo[index].link;
        document.getElementById("title").value = listTodo[index].title;
        document.getElementById("content").value = listTodo[index].content;



    }
    else if (type === 'doing') {
        document.getElementById("ckDoing").checked = true;
        document.getElementById("link").value = listDoing[index].link;
        document.getElementById("title").value = listDoing[index].title;
        document.getElementById("content").value = listDoing[index].content;
    }
    else if (type === 'completed') {
        document.getElementById("ckCompleted").checked = true;
        document.getElementById("link").value = listCompleted[index].link;
        document.getElementById("title").value = listCompleted[index].title;
        document.getElementById("content").value = listCompleted[index].content;
    }
    else if (type === 'blocked') {
        document.getElementById("ckTodo").checked = false;
        document.getElementById("ckDoing").checked = false;
        document.getElementById("ckCompleted").checked = false;
        document.getElementById("ckBlocked").checked = true;
        document.getElementById("link").value = listBlocked[index].link;
        document.getElementById("title").value = listBlocked[index].title;
        document.getElementById("content").value = listBlocked[index].content;
    }

    else {
        console.log("err ck")
    }
    document.querySelector(".containerAddNew").style.display = "flex"
    document.querySelector(".checkTodo").style.display = "flex";
    document.querySelector(".titleBoxAdd").style.display = "none";
    document.querySelector(".titleBoxEdit").style.display = "inline-block"
    document.querySelector(".btnUpdate").style.display = "inline-block"
    document.querySelector(".btnSubmit").style.display = " none"




    console.log("link:  ", listTodo[index].link);


    document.querySelector(".indexBox").value = index;
    // console.log("index: ", index)
    // console.log("type: ", typeList);
    // console.log("type: ", type);



}

function update() {

    let index = document.querySelector(".indexBox").value;
    deletee(index, typeList);


    console.log("type: ", typeList);
    let link = document.getElementById("link").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;



    // if (typeList === 'todo') {
    //     listTodo.push({
    //         link: link,
    //         title: title,
    //         content: content
    //     });
    // }
    // else if (typeList === 'doing') {



    //     listDoing.push({
    //         link: link,
    //         title: title,
    //         content: content
    //     });


    // }
    // else if (typeList === 'completed') {

    //     listCompleted.push({
    //         link: link,
    //         title: title,
    //         content: content
    //     });

    // }
    // else if (typeList === 'blocked') {


    //     listBlocked.push({
    //         link: link,
    //         title: title,
    //         content: content
    //     });
    // }

    // else {
    //     console.log("err")
    // }



    // console.log("index: ", index);

    document.querySelector(".containerAddNew").style.display = "none";
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    let radioButton = document.querySelectorAll('input[type="radio"][name="radio"]');
    let selectedRadio = null;




    radioButton.forEach(function (button) {
        if (button.checked) {
            selectedRadio = button;
            return;
        }
    });



    console.log("slt: ", selectedRadio.id);

    if (selectedRadio && selectedRadio.id === "ckTodo") {

        listTodo.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listTodo", JSON.stringify(listTodo));
        console.log("radioTodo")
    }

    else if (selectedRadio && selectedRadio.id === "ckDoing") {


        listDoing.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listDoing", JSON.stringify(listDoing));
        console.log("radioDoing")


    }
    else if (selectedRadio && selectedRadio.id === "ckCompleted") {


        listCompleted.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listCompleted", JSON.stringify(listCompleted));
        console.log("radioCompleted")

    }

    else if (selectedRadio && selectedRadio.id === "ckBlocked") {


        listBlocked.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listBlocked", JSON.stringify(listBlocked));
        console.log("radioBlocked")

    }
    else {
        alert("ERROR")
    }
    render();
}

function deletee(index, type) {
    if (type === 'todo') {

        listTodo.splice(index, 1);
        localStorage.setItem("listTodo", JSON.stringify(listTodo));



    }
    else if (type === 'doing') {
        listDoing.splice(index, 1);
        localStorage.setItem("listDoing", JSON.stringify(listDoing));


    }
    else if (type === 'completed') {
        listCompleted.splice(index, 1);
        localStorage.setItem("listCompleted", JSON.stringify(listCompleted));


    }
    else if (type === 'blocked') {
        listBlocked.splice(index, 1);
        localStorage.setItem("listBlocked", JSON.stringify(listBlocked));


    }

    else {
        console.log("err")
    }
    console.log("xoa thanh cong")
    render();
}



function submit() {

    let checkVal = false
    let boxElement = document.querySelector(".boxAdd");
    let inpElement = boxElement.querySelectorAll(".inpBoxAdd");
    validated();
    let dem = 0;
    for (let i = 0; i < inpElement.length; i++) {
        // console.log("check: ", inpElement[i].style.border)
        if (inpElement[i].style.border === "1px solid green") {
            dem = dem + 1;
            // console.log("green: ", dem)

        }

    }
    if (dem === inpElement.length) {

        checkVal = true;
    }
    else {
        dem = 0;
        // console.log("errr")
    }
    // console.log("dem: ", dem)

    if (checkVal) {
        // console.log("ok")
        let link = document.getElementById("link").value;
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;

        // console.log("link: ", link);
        // console.log("title: ", title);
        // console.log("content: ", content);

        listTodo = localStorage.getItem("listTodo") ? JSON.parse(localStorage.getItem("listTodo")) : [];

        listTodo.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listTodo", JSON.stringify(listTodo));
        document.querySelector(".containerAddNew").style.display = "none";
        document.querySelector("#link").value = "";
        document.querySelector("#title").value = "";
        document.querySelector("#content").value = "";


        document.getElementById("numberTodo").innerText = listTodo.length;


        console.log("lenght: ", listTodo.length);
        render();
    }
}

document.addEventListener("DOMContentLoaded", animationn);


function animationn() {
    // document.getElementById("myElement").style.animation = "anima 8s ease-out ";
    // document.getElementById("logo").style.animation = "effect 8s ease-out";
    // document.getElementById("anmSlogan").style.animation = "slogan 8s ease-out";
    // document.getElementById("mask").style.animation = "mask 8s ease-out";
    // document.getElementById("mask1").style.animation = "mask1 8s ease-out";
    // document.getElementById("mask2").style.animation = "mask2 8s ease-out";
} 



// Lắng nghe sự kiện khi hiệu ứng "anima" kết thúc
document.querySelector('.animation').addEventListener('animationend', function() {
    // Khi hiệu ứng kết thúc, thay đổi trạng thái hiển thị của thẻ div thành "none"
    this.style.display = 'none';
});
