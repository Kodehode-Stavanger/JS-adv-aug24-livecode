/* class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }
    honk() {
        console.log("Honk honk")
    }
}

const myCar = new Car("Mercedes", 2018)
console.log(myCar)
myCar.honk()

Math.random()

const myDate = new Date()
console.log(myDate.getTime())

const mySound = new Audio() */


//// DRUMKIT!

// En knapp for hver trommelyd
// Kunne trykke på knappen for å lage lyden
// Hver knapp skal ha en dedikert keyboard shortcut.

const container = document.querySelector("#container")

const drumMap = {
    kick: "q",
    snare: "w",
    hihat: "e",
    openhat: "r",
    ride: "t",
    tom: "y",
    tink: "u",
    clap: "i"
}


// Loop over the keys in the drummap object
// using the "for in" loop
for (let key in drumMap) {
    
    // Make drum button div and set it to flex/column
    const drum = document.createElement("div")
    drum.style.display = "flex"
    drum.style.flexDirection = "column"
    // Make drum image
    const image = document.createElement("img")
    image.src = `./pics/${key}.jpg`
    image.style.height = "100px"
    image.style.width = "100px"
    // Drum names.
    const drumTxt = document.createElement("p")
    drumTxt.textContent = `${key[0].toUpperCase()}${key.slice(1)}`
    // Display keyboard shortcut
    const shortcut = document.createElement("kbd")
    shortcut.textContent = drumMap[key] // -> drumMap.kick / drumMap.key
    shortcut.style.fontSize = "2rem"
    // Eventlistener for clicks
    image.addEventListener("click", () => {
        new Audio(`./sounds/${key}.wav`).play()       
    })
    // Appending.
    drum.append(image, drumTxt, shortcut)
    container.append(drum)
}

window.addEventListener("keydown", (event) => {
    for (let key in drumMap) {
        console.log(event)
        if (event.key === drumMap[key]) {
            new Audio(`./sounds/${key}.wav`).play()
            break
        }
    }
})

// Bilde
// Navn på tromme
// Keyboard shortcut

/* const myObject = {
    navn: "Ola"
}

const key = "navn"

// myObject[key] blir myObject.navn
// myObject.key blir myObject.key
console.log(myObject[key]) */