document.addEventListener("DOMContentLoaded", function() {

    loadImages();
    showImage();
    loadBreeds();
})

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
        results.message.forEach(image => showImage(image))
    })
}

function showImage(dogUrl) {
    let container = document.querySelector("#dog-image-container")
    let imgTag = document.createElement("img")
    imgTag.src = dogUrl
    imgTag.style = "100x100"
    container.append(imgTag)
}

function loadBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(res => res.json())
    .then(result => {
        breeds = Object.keys(result.message)
        breeds.forEach(breed => showBreed(breed))
    })
}

function showBreed(breedName) {
    let ul = document.querySelector("#dog-breeds")
    let li = document.createElement("li")
    li.innerText = breedName
    ul.append(li)
}