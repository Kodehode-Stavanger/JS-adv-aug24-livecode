/* 

Events

Mouse Events:
click: Occurs when the mouse is clicked.
dblclick: Occurs when the mouse is double-clicked.
mousedown: Occurs when a mouse button is pressed.
mouseup: Occurs when a mouse button is released.
mousemove: Occurs when the mouse pointer is moved.
mouseover: Occurs when the mouse pointer enters an element.
mouseout: Occurs when the mouse pointer leaves an element.
Keyboard Events:
keydown: Occurs when a key is pressed down.
keyup: Occurs when a key is released.
keypress: Occurs when a key is pressed.
Form Events:
submit: Occurs when a form is submitted.
reset: Occurs when a form is reset.
change: Occurs when the value of an input element changes.
input: Similar to change, occurs when the value of an input element changes (modern browsers).
focus: Occurs when an element receives focus.
blur: Occurs when an element loses focus.
Window Events:
load: Occurs when the document and all external resources have finished loading.
unload: Occurs when the user navigates away from the page.
resize: Occurs when the browser window is resized.
scroll: Occurs when the user scrolls in the window.
Document Events:
DOMContentLoaded: Occurs when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
Media Events:
play: Occurs when media playback begins.
pause: Occurs when media playback is paused.
ended: Occurs when media playback has reached the end.
Drag and Drop Events:
dragstart: Occurs when the user starts dragging an element.
drag: Occurs when an element is being dragged.
dragend: Occurs when the user releases the mouse button after dragging. */

const incButton = document.querySelector("#increment")
const counter = document.querySelector("#counter")
const hoverBox = document.querySelector("#hover")
const coordinates = document.querySelector("#coordinates")

let count = 0
counter.textContent = count

// addEventListener tar i mot 2 parametre:
// event type og callback funksjon
incButton.addEventListener("click", () => {
    count++
    counter.textContent = count
})

// hoverBox.addEventListener("mouseenter", () => {
//     hoverBox.style.backgroundColor = "red"
// })
// hoverBox.addEventListener("mouseleave", () => {
//     hoverBox.style.backgroundColor = "black"
// })
// hoverBox.addEventListener("mouseover", () => {
//     hoverBox.style.backgroundColor = "red"
// })

let redToggle = false

hoverBox.addEventListener("click", () => {
    redToggle = !redToggle
    if (redToggle) {
        hoverBox.style.backgroundColor = "red"
    } else {
        hoverBox.style.backgroundColor = "black"
    }
})

document.body.addEventListener("click", (e) => {
    console.log(e)
    window.alert("BUY NOW!!!")
})

document.body.removeEventListener()

window.addEventListener("keydown", (event) => {
    //console.log(event.key)
    if (event.key === "a") console.log("Going left")
    if (event.key === "d") console.log("Going right")
    if (event.key === "w") console.log("Going forward")
    if (event.key === "s") console.log("Going back")
})

