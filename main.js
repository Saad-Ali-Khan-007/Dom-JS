//traversing the dom
// const itemList = document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'grey'

//childNodes
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='yellow'

// //firstChld

// console.log(itemList.firstChild)

// //firstElementChild

// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello 1'
// //lastChild

// console.log(itemList.lastChild)

// //lastElementChild

// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Hello 1'

// //nextSibling
// console.log(itemList.nextSibling)
// //nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)
// //previousElementSibling
// console.log(itemList.previousElementSibling)

//createElement

// //create a div
// const newDiv = document.createElement('div')

// //add class

// newDiv.className= 'hello'

// //add id
// newDiv.id= 'hello'

// //add attribute
// newDiv.setAttribute('title','Hello Div')

// //create text node
// var newDivText = document.createTextNode('Hello World')

// //Add text to div
// newDiv.appendChild(newDivText)
// const container = document.querySelector('header .container')
// const h1 = document.querySelector('header h1')

// console.log(newDiv)
// container.insertBefore(newDiv,h1)

//events
// const button = document.getElementById('button').addEventListener('click',btnClick)

// function btnClick(){
//     document.getElementById('header-title').textContent = 'completed'
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// }

// var button = document.getElementById('button')
// button.addEventListener('click',runEvent)
// const itemInput = document.querySelector('input[type="text"]');
// const form = document.querySelector("form");

// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//   // document.body.style.backgroundColor = 'rgb(`${e.offsetx},${e.offsety},40`)'
// }

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

form.addEventListener('submit',addItem)

function addItem(e){
    e.preventDefault();
    
    const newItem = document.getElementById('item').value
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))
    itemList.appendChild(li)

}

