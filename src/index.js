let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => appendData(data))
  function appendData(data) {
    console.log(data)
    const toycards = document.getElementById('toy-collection')
    data.forEach(element => {
    const card = document.createElement('div')
    card.innerHTML = 
    `<div class="card">
    <h2>${element.name}</h2>
    <img src=${element.image} class="toy-avatar" />
    <p>${element.likes}</p>
    <button class="like-btn" id=${element.id}>Like ❤️</button>
  </div>`,
  toycards.append(card) })}
  const form = document.querySelector('form')
  let toyName = document.getElementById('toyName')
  let toyimgURL = document.getElementById('toyimgurl')
  
      function appendNewData(data) {
        const toycards = document.getElementById('toy-collection')
    const card = document.createElement('div')
    card.innerHTML = 
    `<div class="card">
    <h2>${data.name}</h2>
    <img src=${data.image} class="toy-avatar" />
    <p>${data.likes}</p>
    <button class="like-btn">Like ❤️</button>
  </div>`,
  toycards.append(card) 
      }
  
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(toyName.value);
  fetch('http://localhost:3000/toys', {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
    "name": `${toyName.value}`,
    "image": `${toyimgURL.value}`,
    "likes": 0})
  })
  .then(res => res.json())
    .then((data) => {
      appendNewData(data)
    })})
  
}
  )
  


