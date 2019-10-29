const tituloInput = document.getElementById("titulo")
const imgInput = document.getElementById("img")
const button = document.getElementById("registro")

const ul = document.querySelector("ul")

let posts = []
// obtener todos los posts
fetch("http://localhost:8080/posts")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        posts = data
        for (let i = 0; i < posts.length; i++) {
            createListItem(posts[i])
        }
    })

button.addEventListener("click", function() {
    let post = {
        titulo: tituloInput.value,
        img: imgInput.value
    }
    posts.push(post)
    createListItem(post)

    // registrar nuevo post
    fetch("http://localhost:8080/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data)
        })
})

function createListItem(post) {
    const li = document.createElement("li")
    const h1 = document.createElement("h1")
    const img = document.createElement("img")

    h1.innerHTML = post.titulo
    img.src = post.img

    li.appendChild(h1)
    li.appendChild(img)
    ul.appendChild(li)
}
