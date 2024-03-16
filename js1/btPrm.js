const data  = fetch("https://jsonplaceholder.org/posts?fbclid=IwAR1ZQ3Mh7TaHy03yb_-4Yl4_RlmR1YEuTYLqn8BGThT7xg4YjGrmEkE5uTo")

data.then(function(res)
{
    console.log(res)
    return res.json()
})
.then(function(res)
{
    console.log(res)
    const child = res.map(function(item)
    {
        return `
        <div class="article">
                    <div class = "img">
                        <img class="image" src="${item.image}"
                        alt="">
                        <img class="thumbnail" src="${item.thumbnail}" alt="">
                    </div>
                    
                    <div class = "context">
                        <div class="title">${item.title}</div>
                        <div class="ct">
                            <div class="content">${item.content}</div>
                    
                        </div>


                        <div class="id">${item.id}</div>
                        <a href="${item.image}" class="link">link url</a>

                        <div class="category">
                            <div class="titlect">slug:</div>
                            <div class="contentct">${item.slug}</div>

                        </div>
                        <div class="status">${item.status}</div>
                        <div class="category">√
                            <div class="titlect">category: </div>
                            <div class="contentct">${item.category}</div>
                        </div>
                        <div class="publishedAt">
                            <div class="pubTlt">published At: </div>
                            <div class="pubct">${item.publishedAt}</div>
                        </div>
                        <div class="publishedAt">
                            <div class="pubTlt">updated At: </div>
                            <div class="pubct">${item.updatedAt}</div>
                        </div>
                    </div>
                    

        </div>`
    })
    let container = document.getElementById("container")
    container.innerHTML = child.join("")
   
})
.catch(function(err)    
{
    console.log("Error: ",err)
})
.finally(function()
{
    console.log("finally")
})

