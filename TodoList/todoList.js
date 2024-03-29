




function render() {
    // console.log("ok")



    listTodo = localStorage.getItem("listTodo") ? JSON.parse(localStorage.getItem("listTodo")) : [];
    listDoing = localStorage.getItem("listDoing") ? JSON.parse(localStorage.getItem("listDoing")) : [];
    listCompleted = localStorage.getItem("listCompleted") ? JSON.parse(localStorage.getItem("listCompleted")) : [];
    listBlocked = localStorage.getItem("listBlocked") ? JSON.parse(localStorage.getItem("listBlocked")) : [];

    let renderTodo = listTodo.map(function (value, index) {

        return `
    
            <div class="box">

            <div class="function">
                <button onclick="edit(${index})" class="edit"></button>
                <button onclick="deletee(${index})" class="delete"></button>
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
    
            <div class="box">

            <div class="function">
                <button onclick="edit(${index})" class="edit"></button>
                <button onclick="deletee(${index})" class="delete"></button>
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
    
            <div class="box">

            <div class="function">
                <button onclick="edit(${index})" class="edit"></button>
                <button onclick="deletee(${index})" class="delete"></button>
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
    
            <div class="box">

            <div class="function">
                <button onclick="edit(${index})" class="edit"></button>
                <button onclick="deletee(${index})" class="delete"></button>
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
}


function exit() {
    document.querySelector(".containerAddNew").style.display = "none"
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





function edit(index) {


    console.log("okoko")
    document.querySelector(".containerAddNew").style.display = "flex"
    document.querySelector(".checkTodo").style.display = "flex";
    document.querySelector(".titleBoxAdd").style.display = "none";
    document.querySelector(".titleBoxEdit").style.display = "inline-block"
    document.querySelector(".btnUpdate").style.display = "inline-block"
    document.querySelector(".btnSubmit").style.display = " none"


    document.getElementById("link").value = listTodo[index].link;
    document.getElementById("title").value = listTodo[index].title;
    document.getElementById("content").value = listTodo[index].content;

    console.log("link:  ", listTodo[index].link);

    document.getElementById("ckTodo").checked = true;
    document.querySelector(".indexBox").value = index;
    console.log("index: ", index)


}

function update() {
    let link = document.getElementById("link").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    listTodo = localStorage.getItem("listTodo") ? JSON.parse(localStorage.getItem("listTodo")) : [];
    let index = document.querySelector(".indexBox").value;
    // console.log("index: ", index);
    listTodo[index].link = document.getElementById("link").value;
    listTodo[index].title = document.getElementById("title").value;
    listTodo[index].content = document.getElementById("content").value;

    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.querySelector(".containerAddNew").style.display = "none";

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
    }

    else if (selectedRadio && selectedRadio.id === "ckDoing") {


        listDoing.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listDoing", JSON.stringify(listDoing));
    }


    else if (selectedRadio && selectedRadio.id === "ckCompleted") {


        listCompleted.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listCompleted", JSON.stringify(listCompleted));
    }

    else if (selectedRadio && selectedRadio.id === "ckBlocked") {


        listBlocked.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("listBlocked", JSON.stringify(listBlocked));
    }



    else {
        alert("ERROR")
    }

    render();
}

function deletee(index) {

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
        document.getElementById("ckTodo").checked = true;

        document.getElementById("numberTodo").innerText = listTodo.length;


        console.log("lenght: ", listTodo.length);
        render();



    }


}


