// Destructuring

// En måte å hente ut verdier fra objects og arrays på en enkel måte.

const numbers = [1, 2, 3, 4, 5]

const [firstNumber, secondNumber, ...theOtherNumbers] = numbers

/* const firstNumber = numbers[0]
const secondNumber = numbers[1] */

/* console.log(firstNumber)
console.log(secondNumber)
console.log(theOtherNumbers) */

function colors() {
    return ["blue", "red"]
}

const [firstColor, secondColor] = colors()
/* console.log(firstColor)
console.log(secondColor) */

const position = [
    ["x", 89],
    ["y", 14],
    ["z", 154]
]

/* position.forEach(element => {
    console.log(`Axis: ${element[0]} Value: ${element[1]}`)
})

position.forEach(([axis, value]) => {
    console.log(`Axis: ${axis} Value: ${value}`)
}) */

/* const matrix = [
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
] */

const user = {
    name: "Vikas",
    displayName: "Killer981",
    hobbies: ["Coding", "Gaming", "Cats"],
    address: {streetName: "Solskinnsgaten", streetNumber: 14},
    id: 78345612
}

const user2 = {
    name: "Vikas",
    displayName: "Killer981",
    hobbies: ["Coding", "Gaming", "Cats"],
    address: {streetName: "Solskinnsgaten", streetNumber: 14},
}

const {name, displayName: gamerTag, id="No ID!"} = user
/* console.log(name)
console.log(gamerTag)
console.log(id) */

function processInfo ({name, displayName: gamerTag, hobbies}) {
    console.log(name)
    console.log(gamerTag)
    console.log(hobbies)
}
function processInfo2 (gamerInfo) {
    console.log(gamerInfo.name)
    console.log(gamerInfo.displayName)
    console.log(gamerInfo.hobbies)
}
/* processInfo(user)
processInfo2(user) */

const people = [
    {
      name: "Thomas",
      male: true,
      age: 23,
      hobbies: ["cycling", "football", "pool"],
    },
    {
      name: "Susan",
      male: false,
      age: 26,
      hobbies: ["jogging", "travelling", "dancing"],
    },
    {
      name: "Monica",
      male: false,
      age: 21,
      hobbies: ["skateboarding", "guitar", "concerts"],
    },
    {
      name: "Avery",
      male: true,
      age: 28,
      hobbies: ["writing", "games", "memes"],
    },
    {
      name: "Phillip",
      male: true,
      age: 24,
      hobbies: ["boxing", "wrestling", "mma"],
    },
    {
      name: "Otto",
      male: true,
      age: 36,
      hobbies: ["movies", "cinema", "music"],
    },
    {
      name: "Annabelle",
      male: false,
      age: 30,
      hobbies: ["makeup", "fashion", "shopping"],
    },
    {
      name: "Cathy",
      male: false,
      age: 18,
      hobbies: ["design", "drawing", "css"],
    },
  ];

/* for (let {name, male, age, hobbies} of people) {
    console.log(name, male, age, hobbies)
} */

people.forEach(({name, male, age, hobbies}) => {
    console.log(name, male, age, hobbies)
})

