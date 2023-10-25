const data = [
    {
        name: "Hegymegi Ferenc",
        age: 22,
        pets: ["Nina", "Maci", "Fagyi"],
        mostRecentPurchase: {
            price: 10000,
            color: "green",
        }
    },
    {
        name: "Kis Géza",
        age: 61,
        pets: ["Alma", "Jóska", "Fagyi"],
        mostRecentPurchase: {
            price: 15450,
            color: "blue",
        }
    },
    {
        name: "Nagy Macska",
        age: 50,
        pets: ["Körte", "Maci", "Béla"],
        mostRecentPurchase: {
            price: 900,
            color: "darkblue",
        }
    },
    {
        name: "ELek Péter",
        age: 66,
        pets: ["Nina", "Kormi", "Macko"],
        mostRecentPurchase: {
            price: 40000,
            color: "yellow",
        }
    },
    {
        name: "Kovacs Andras Peter",
        age: 25,
        pets: ["Jakab", "Jani", "Tomi"],
        mostRecentPurchase: {
            price: 10400,
            color: "black",
        }
    },
    {
        name: "Kovács Petra",
        age: 29,
        pets: ["Béli", "Medvécske", "Jégkrém"],
        mostRecentPurchase: {
            price: 20000,
            color: "brown",
        }
    },
    {
        name: "Nagy András",
        age: 30,
        pets: ["Nana", "Elek", "Nóri"],
        mostRecentPurchase: {
            price: 19875,
            color: "orange",
        }
    },
    {
        name: "Kiss Gergo",
        age: 31,
        pets: ["Bali", "Kormi", "Lazacka"],
        mostRecentPurchase: {
            price: 25300,
            color: "white",
        }
    },
    {
        name: "Hagymási Lajos",
        age: 55,
        pets: ["Nina", "Maci", "Fagyi"],
        mostRecentPurchase: {
            price: 10000,
            color: "red",
        }
    },
    {
        name: "Nemcsá Károly",
        age: 47,
        pets: ["Cucu", "Cirmi", "Kutyus"],
        mostRecentPurchase: {
            price: 13501,
            color: "rose",
        }
    }
]

/* for (let i = 0; i < data.length; i++) {
    if (data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000) {
    console.log(data[i].age)
    console.log(data[i].mostRecentPurchase)
 } 
} */

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}

const addTwoNumbersResult = addTwoNumbers(1, 2)
//console.log("addTwoNumbers:", addTwoNumbersResult)

function concatentaArray(array) {
    /* let result = ""
    array.forEach((kismacska) => {
        result += kismacska
        console.log(result)
    });
    return result */

   /*  let result = array.join("")

    return result */
}

const arrayOfStrings = ["kismacska", "codecool", "vizsga", "alma"]
const concatentaArrayResulte = concatentaArray(arrayOfStrings)
concatentaArray(arrayOfStrings)


//                       object{} arraynel mindig loop
/* function getOldPeople(arraOfPeople, minimuAge) {
    let result = ""
    arraOfPeople.map((person) => {
    if (person.age >= minimuAge) {
        result.push(person)
    }
}) 
ret */

//const oldPeople = getOldPeople(data, 60)
//getOldPeople(oldPeople)



function getRichPeople(arraOfPeople, minimumValue) {
    let resulte = arraOfPeople.filter((person) => person.mostRecentPurchase.price > minimumValue)
    return resulte
}
const richPeople = getRichPeople(data, 20000)
console.log(richPeople)