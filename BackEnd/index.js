const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded());
app.use(express.json())

let users = [{
    id: 1,
    name: "Nguyen Van A"
},
{
    id: 2,
    name: "Nguyen Van B"
},
{
    id: 3,
    name: "Nguyen Van C"
}
]

app.get('/users', (req, res) => {
    console.log("GET All Users")
    console.log(users)
    res.json(users)


})

app.get('/users/:id', (req, res) => {
    console.log("GET User by ID")
    const id = req.params.id
    const user = users.find(user => user.id == id)
    console.log(user)
    res.json(user)


})

app.post('/users', (req, res) => {

    const newUsers = req.body
    console.log("POST User: ", newUsers)

    users.push(newUsers);
    res.json(newUsers);


})

app.put('/users/:id', (req, res) => {

    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    console.log(`PUT users with id ${userId}: `, updateUser);

    for (const index in users) {
        if (users[index].id == userId) {
            users[index] = updateUser;
            return res.json(updateUser);
        } else {
            return res.status(404).json({
                message: `User with id ${userId} not found`
            })
        }
    }
    console.log(body)

})

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(`DELETE user with id ${userId}`);
    users = users.filter(user => user.id != userId);
    res.json(users);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})