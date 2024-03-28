function exit() {
    document.querySelector(".containerAddNew").style.display = "none"
}

function newTask() {
    document.querySelector(".containerAddNew").style.display = "flex"
    document.querySelector(".checkTodo").style.display = "none";
    document.querySelector(".titleBoxAdd").style.display = "inline-block";
    document.querySelector(".titleBoxEdit").style.display = "none"
}

function edit() {
    document.querySelector(".containerAddNew").style.display = "flex"
    document.querySelector(".checkTodo").style.display = "flex";
    document.querySelector(".titleBoxAdd").style.display = "none";
    document.querySelector(".titleBoxEdit").style.display = "inline-block"
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
var list;

function render() {
    list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

    let render = list.map(function (value, index) {
        return `
       
                <div class="box">

                    <div class="function">
                        <button onclick="edit()" class="edit"></button>
                        <button class="delete"></button>
                    </div>
                    <div class="linkBox">${value.link}</div>
                    <div class="titleBox">${value.title}</div>
                    <div class="lineBox"></div>
                    <div class="contentBox">${value.content}</div>

                    <div class="timeBox">
                        <img src="clock.png" alt="">
                        <div class="time">June 30, 2022
                    </div>
                </div>
        
    `

       
    })

    let listbox  =  document.getElementById("listbox");
    listbox.innerHTML = render.join("");

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
        console.log("errr")
    }
    // console.log("dem: ", dem)

    if (checkVal) {
        // console.log("ok")
        let link = document.getElementById("link").value;
        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;

        console.log("link: ", link);
        console.log("title: ", title);
        console.log("content: ", content);

        list = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

        list.push(
            {
                link: link,
                title: title,
                content: content
            });
        localStorage.setItem("list", JSON.stringify(list));
        render();
    }

}

