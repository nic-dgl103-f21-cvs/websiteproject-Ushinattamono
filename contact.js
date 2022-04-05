'use strict'

const appetizers = [
    {
        name: "misosoup",
        label: "Miso Soup",
        price: 2.50
    },
    {
        name: "misotofu",
        label: "Miso Soup with Tofu",
        price: 3.50
    },
    {
        name: "edamame",
        label: "Edamame",
        price: 4.75
    },
    {
        name: "bakedscallop",
        label: "Ichiban Baked Scallop",
        price: 5.50
    },
    {
        name: "takoyaki",
        label: "Takoyaki (6 pieces)",
        price: 5.95
    },
    {
        name: "springrolls",
        label: "Spring Rolls (2 pieces)",
        price: 5.50
    },
    {
        name: "agedashitofu",
        label: "Agedashi Tofu",
        price: 5.50
    },
    {
        name: "gomaae",
        label: "Goma-ae",
        price: 5.50
    },
    {
        name: "spicytakosalad",
        label: "Spicy Tako Salad",
        price: 5.95
    },
    {
        name: "seaweedsalad",
        label: "Seaweed Salad",
        price: 5.95
    },
    {
        name: "sunomonoveggie",
        label: "Sunomono Salad (Veggie)",
        price: 5.00
    },
    {
        name: "sunomonoebi",
        label: "Sunomono Salad (Shrimp)",
        price: 5.95
    },
    {
        name: "sunomonorealcrab",
        label: "Sunomono Salad (Real Crab or Octopus)",
        price: 6.95
    },
    {
        name: "mixedsunomono",
        label: "Mixed Sunomono Salad",
        price: 7.95
    },
    {
        name: "smokedsalmonwraps",
        label: "Smoked Salmon Wraps",
        price: 7.95
    },
    {
        name: "summerrolls",
        label: "Summer Rolls (2 pieces)",
        price: 7.95
    },
    {
        name: "tunatataki",
        label: "Tuna Takaki",
        price: 14.50
    },
    {
        name: "spicygrilledtuna",
        label: "Spicy Grilled Tuna",
        price: 14.50
    }
]

const tempura = [
    {
        name: "salmonskintempura",
        label: "Salmon Skin Tempura",
        price: 5.50
    },
    {
        name: "yamtempura",
        label: "Yam Tempura",
        price: 9.50
    },
    {
        name: "vegetabletempura",
        label: "Vegetable Tempura",
        price: 9.95
    },
    {
        name: "prawntempura",
        label: "Prawn Tempura (6 Pieces)",
        price: 13.95
    },
    {
        name: "mixedtempura",
        label: "Mixed Tempura",
        price: 13.95
    },
    {
        name: "softshellcrabtempura",
        label: "Soft-Shell Crab Tempura",
        price: 13.95
    }
]

const sashimi = [
    {
        name: "salmonsashimi",
        label: "Salmon Sashimi (5 Pieces)",
        price: 14.25
    },
    {
        name: "tunasashimi",
        label: "Tuna Sashimi (5 Pieces)",
        price: 14.25
    },
    {
        name: "assortedsashimi",
        label: "Assorted Sashimi",
        price: 16.95
    },
    {
        name: "sashimideluxe",
        label: "Sashimi Deluxe",
        price: 31.95
    }
]

const makisushi = [
    {
        name: "tamagomaki",
        label: "Tamago Maki",
        price: 3.00
    },
    {
        name: "kappamaki",
        label: "Kappa Maki",
        price: 2.95
    },
    {
        name: "avocadomaki",
        label: "Avocado Maki",
        price: 5.25
    },
    {
        name: "ebimaki",
        label: "Ebi Maki",
        price: 5.95
    },
    {
        name: "salmonmaki",
        label: "Salmon Maki",
        price: 5.25
    },
    {
        name: "tunamaki",
        label: "Tuna Maki",
        price: 5.95
    },
    {
        name: "negitoromaki",
        label: "Negitoro Maki",
        price: 5.95
    },
    {
        name: "futomaki",
        label: "Futo Maki",
        price: 6.95
    },
    {
        name: "ichibanroll",
        label: "Ichiban Roll",
        price: 12.50
    },
    {
        name: "smokingtunaroll",
        label: "Smokin' Tuna Roll",
        price: 12.50
    },
    {
        name: "specialhouseroll",
        label: "Special House Roll",
        price: 12.95
    }
]

const uramakisushi = [
    {
        name: "californiaroll",
        label: "California Roll",
        price: 5.25
    },
    {
        name: "yamroll",
        label: "Yam Roll",
        price: 6.25
    },
    {
        name: "veggieroll",
        label: "Veggie Roll",
        price: 6.95
    },
    {
        name: "asparagusroll",
        label: "Asparagus Roll",
        price: 6.95
    },
    {
        name: "happypepperroll",
        label: "Happy Pepper Roll",
        price: 6.95
    },
    {
        name: "bcroll",
        label: "B.C. Roll",
        price: 5.95
    },
    {
        name: "tamagomaki",
        label: "Tamago Maki",
        price: 3.00
    },
    {
        name: "mangoroll",
        label: "Mango Roll",
        price: 6.95
    },
    {
        name: "teriyakichickenroll",
        label: "Teriyaki Chicken Roll",
        price: 7.95
    },
    {
        name: "spicyyamandavocadoroll",
        label: "Spicy Yam & Avo Roll",
        price: 7.50
    },
    {
        name: "teriyakichickenandyamroll",
        label: "Teriyaki Chicken and Yam Roll",
        price: 8.95
    },
    {
        name: "bbqduckroll",
        label: "BBQ Duck Roll",
        price: 7.95
    },
    {
        name: "komoxroll",
        label: "Komox Roll",
        price: 9.50
    },
    {
        name: "dynamiteroll",
        label: "Dynamite Roll",
        price: 8.50
    },
    {
        name: "spicydynamiteroll",
        label: "Spicy Dynamite Roll",
        price: 8.95
    },
    {
        name: "choppedscalloproll",
        label: "Chopped Scallop Roll",
        price: 8.95
    },
    {
        name: "phillyroll",
        label: "Philly Roll",
        price: 9.25
    },
    {
        name: "reddragonroll",
        label: "Red Dragon Roll",
        price: 9.50
    },
    {
        name: "unakyuroll",
        label: "Una-Kyu Roll",
        price: 9.95
    },
    {
        name: "spicychickenyamandavoroll",
        label: "Spicy Chicken, Yam, and Avo Roll",
        price: 9.95
    },
    {
        name: "spicytunaroll",
        label: "Spicy Tuna Roll",
        price: 9.50
    },
    {
        name: "prawnyamandavoroll",
        label: "Prawn, Yam and Avo Roll",
        price: 11.95
    },
    {
        name: "realcrabcaliforniaroll",
        label: "Real Crab California Roll",
        price: 14.50
    },
    {
        name: "spiderroll",
        label: "Spider Roll",
        price: 14.95
    },
    {
        name: "lobsterroll",
        label: "Lobster Roll",
        price: 19.95
    }
]

const nigirisushi = [
    {
        name: "inari",
        label: "Inari",
        price: 1.50
    },
    {
        name: "tamago",
        label: "Tamago",
        price: 1.50
    },
    {
        name: "masago",
        label: "Masago",
        price: 2.00
    },
    {
        name: "ebi",
        label: "Ebi",
        price: 2.75
    },
    {
        name: "hokkigai",
        label: "Hokkigai",
        price: 2.75
    },
    {
        name: "tobiko",
        label: "Tobiko",
        price: 2.95
    },
    {
        name: "maguro",
        label: "Maguro",
        price: 2.95
    },
    {
        name: "sake",
        label: "Sake",
        price: 2.95
    },
    {
        name: "hotate",
        label: "Hotate",
        price: 2.95
    },
    {
        name: "tako",
        label: "Tako",
        price: 2.95
    },
    {
        name: "unagi",
        label: "Unagi",
        price: 2.95
    },
    {
        name: "choppedscallopnigiri",
        label: "Chopped Scallop",
        price: 2.95
    },
    {
        name: "toro",
        label: "Toro",
        price: 2.95
    },
    {
        name: "tokiboandquailegg",
        label: "Tobiko and Quail Egg",
        price: 4.50
    },

]

const sushicones =[
    {
        name: "californiacone",
        label: "California Cone",
        price: 4.50
    },
    {
        name: "dynamitecone",
        label: "Dynamite Cone",
        price: 5.50
    },
    {
        name: "spicydynamitecone",
        label: "Spicy Dynamite Cone",
        price: 5.95
    },
    {
        name: "spicytunacone",
        label: "Spicy Tuna Cone",
        price: 5.95
    },
    {
        name: "negitorocone",
        label: "Negitoro Cone",
        price: 5.95
    },
    {
        name: "choppedscallopcone",
        label: "Chopped Scallop Cone",
        price: 7.50
    },
    {
        name: "spicyrealcrabandtobikocone",
        label: "Spicy Real Crab and Tobiko Cone",
        price: 8.50
    },

]

const sushiplatters = [
    {
        name: "assortednigiriplatter",
        label: "Assorted Nigiri Platter",
        price: 12.25
    },
    {
        name: "veggieloversplatter",
        label: "Veggie Lovers Platter",
        price: 12.95
    },
    {
        name: "ilovesushiplatter",
        label: "I Love Sushi Platter",
        price: 15.95
    },
    {
        name: "sushifortwo",
        label: "Sushi for Two",
        price: 34.95
    },
    {
        name: "ichibansushiparty",
        label: "Ichiban Party Platter",
        price: 46.95
    }
]

const bentoboxes = [
    {
        name: "chickenteriyakibento",
        label: "Chicken Teriyaki Bento",
        price: 16.95
    },
    {
        name: "beefteriyakibento",
        label: "Beef Teriyaki Bento",
        price: 16.95
    },
    {
        name: "bbqduckbento",
        label: "BBQ Duck Bento",
        price: 16.95
    }
]

const lightfare = [
    {
        name: "bbqduckricenoodles",
        label: "BBQ Duck Rice Noodles",
        price: 12.95
    },
    {
        name: "udonsoup",
        label: "Udon Soup",
        price: 12.95
    },
    {
        name: "yakiudon",
        label: "Yaki Udon",
        price: 13.95
    },
    {
        name: "chickenteriyakidonburi",
        label: "Chicken Teriyaki Donburi",
        price: 13.95
    },
    {
        name: "beefteriyakidonburi",
        label: "Beef Teriyaki Donburi",
        price: 13.95
    }
]

const maindishes = [
    {
        name: "panfriedvegetables",
        label: "Pan-Fried Vegetables",
        price: 12.95
    },
    {
        name: "chickenteriyaki",
        label: "Chicken Teriyaki",
        price: 12.95
    },
    {
        name: "beefteriyaki",
        label: "Beef Teriyaki",
        price: 12.95
    },
    {
        name: "curriedchicken",
        label: "Curried Chicken",
        price: 12.95
    },
    {
        name: "spicychicken",
        label: "Spicy Chicken Main Dish",
        price: 16.95
    },
    {
        name: "curriedprawns",
        label: "Curried Prawns",
        price: 16.95
    },
    {
        name: "spicyprawns",
        label: "Spicy Prawns",
        price: 20.00
    },
    {
        name: "garlicbutterprawns",
        label: "Garlic Butter Prawns",
        price: 20.00
    },
    {
        name: "bbqduckmaindish",
        label: "BBQ Duck Main Dish",
        price: 20.00
    },
    {
        name: "smallrice",
        label: "Add Rice (Small)",
        price: 1.00
    },
    {
        name: "regularrice",
        label: "Regular Rice",
        price: 2.50
    },
    {
        name: "largerice",
        label: "Large Rice",
        price: 5.50
    }
]

const menu = [
    {
        label: "Appetizers",
        data: appetizers
    },
    {
        label: "Tempura",
        data: tempura
    },
    {
        label: "Sashimi",
        data: sashimi
    },
    {
        label: "Maki Sushi",
        data: makisushi
    },
    {
        label: "Uramaki Sushi",
        data: uramakisushi
    },
    {
        label: "Nigiri Sushi",
        data: nigirisushi
    },
    {
        label: "Sushi Cones",
        data: sushicones
    },
    {
        label: "Sushi Platters",
        data: sushiplatters
    },
    {
        label: "Bento Boxes",
        data: bentoboxes
    },
    {
        label: "Light Fare",
        data: lightfare
    },
    {
        label: "Main Dishes",
        data: maindishes
    }
    
]

/* <div>
    <input type="checkbox" id="summerrollscheck" name="summerrollscheck" value="yes">
    <label for="summerrollscheck">Summer Rolls (2 Pieces)</label>
    <br>
    <label for="summerrolls">Quantity</label>
    <input type="number" name="summerrolls" id="summerrolls" min="0" max="20">
    <input type="hidden" name="summerrolls-price" value="5.45">
</div> */

function createGroup(name, label, price) {
    const div = document.createElement('div')
    const checkBox = document.createElement('input')
    const checkBoxLabel = document.createElement('label')
    const br = document.createElement('br')
    const numLabel = document.createElement('label')
    const numInput = document.createElement('input')
    const inputPrice = document.createElement('input')

    div.classList.add("inputgroup")

    checkBox.type = "checkbox"
    checkBox.id = name + "check"
    checkBox.name = name + "check"
    checkBox.value = "yes"

    checkBoxLabel.for = name + "check"
    checkBoxLabel.innerHTML = label

    numLabel.for = name
    numLabel.innerHTML = "Quantity"

    numInput.type = "number"
    numInput.name = name
    numInput.id = name
    numInput.min = "0"
    numInput.max = "20"

    inputPrice.type = "hidden"
    inputPrice.name = name + "-price"
    inputPrice.value = price

    div.appendChild(checkBox)
    div.appendChild(checkBoxLabel)
    div.appendChild(br)
    div.appendChild(numLabel)
    div.appendChild(numInput)
    div.appendChild(inputPrice)

    return div
}

function createForm() {
    const output = document.getElementById("contactformfieldset");
    // for(let { label, data } of menu)
    // for (let { name, label, price } of data)   

    for (let i = 0; i < menu.length; i++) {
        const label = menu[i].label
        const data = menu[i].data

        const formSection = document.createElement('div')
        const formSectionInputs = document.createElement('div')
        const formSectionLabel = document.createElement('h2')
        formSectionInputs.classList.add("formsection")
        formSectionLabel.innerHTML = label
        formSectionLabel.classList.add("formheader")
        formSection.appendChild(formSectionLabel)
        formSection.appendChild(formSectionInputs)

        for (let i = 0; i < data.length; i++) {
            const name = data[i].name
            const label = data[i].label
            const price = data[i].price

            const formItem = createGroup(name, label, price)
            formSectionInputs.appendChild(formItem)
        }
        output.appendChild(formSection)
    }
}
createForm();

// Add event listener to listen to form changes
document.getElementById('contactform').addEventListener('change', function () {
    // Get all the input groups
    const inputGroups = document.querySelectorAll('.inputgroup')

    // Track the current total price
    let total = 0

    // Loop through each input group
    inputGroups.forEach(inputGroup => {
        // Get all the data for each input
        const checkbox = inputGroup.querySelector('input[type="checkbox"]');
        const quantity = inputGroup.querySelector('input[type="number"]').value;
        const price = inputGroup.querySelector('input[type="hidden"]').value;

        // If the item is selected, then add it to the total
        // because Number(quanitity) can be null, we use isNaN in a if/else ( ? or : ) to use the numerical value of itemPrice or the value of 0.
        if (checkbox.checked) {
            const itemPrice = Number(price) * Number(quantity)
            total += isNaN(itemPrice) ? 0 : itemPrice
        }
    })

    // Add total to output div
    console.log(`Total: $${total.toFixed(2)}`)
});

/****************************
 * FUNCTIONALILTY ONE ABOVE.*
*****************************/


