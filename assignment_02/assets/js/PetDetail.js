document.addEventListener('DOMContentLoaded', () => onLoad(), false);

function onLoad() { 
    // holding json data
    let pets = new Array;
    // call the function to get the json
   pets = fetchFunction("/assets/json/Pets.json").then(console.log("Push file fetch worked")).catch(error =>{
            console.log(error);
            console.log("PushFile can't fetch");
        }
    );
    console.log('Checking if data wrote to Pets' + pets);
    // making changes to the HTML of detail.html
    // getAllUrlParams().index is here because in index.html we push across the index of the petObject in Pets
    /* document.getElementById('main').innerHTML += `
    <div id="petName" class="container">
        <h1>${pets.pet[getAllUrlParams().index].petName}</h1>
        <p>
            ID: ${json.pet[getAllUrlParams().index].ID}<br />
            Species: ${json.pet[getAllUrlParams().index].petType}<br />
            Breed: ${json.pet[getAllUrlParams().index].breed}<br />
            Fixed: ${json.pet[getAllUrlParams().index].spayedNeutered}<br />
            Sex: ${json.pet[getAllUrlParams().index].Sex}<br />
            Age: ${json.pet[getAllUrlParams().index].age}<br />
            Vaccinated: ${json.pet[getAllUrlParams().index].vaccinationStatus}<br />
            Location: ${json.pet[getAllUrlParams().index].location}<<br />
            Availble to Adopt: ${json.pet[getAllUrlParams().index].available}<br />
            Additional Information: ${json.pet[getAllUrlParams().index].additionalDetail}<br />
        </p>
    </div>`; */
}

//Function to get json
async function fetchFunction(id){
    // Fetch the JSON 
    const response = await fetch(id);
    // Resolves the promise as JSON
    const content = await response.json();
    // write JSON object to a variable.
   // writeToVariable(content, pets); 
    //Finally returns the JSON object 
    return content;
}

// might use this to get the JSON object into pets object.
function writeToVariable(json, variable){
    variable = json;
} 