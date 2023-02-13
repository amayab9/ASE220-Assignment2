document.addEventListener('DOMContentLoaded', () => fetchFunction(), false);

function loadScript(pets1) { 
    // call the function to get the json
    // fetchFunction('Pets.json');

    let targetIndex;

    console.log(getAllUrlParams().index);
    console.log("length of pet array:" + pets1.pet.length);
    for(let i=0; i < pets1.pet.length; i++){
        if(pets1.pet[i].ID == getAllUrlParams().index){
            console.log("print found ID:" + pets1.pet[i].ID);
            targetIndex = i;
        }
        else{}
    }

    // making changes to the HTML of detail.html
    petInfo.innerHTML += `
    <div id="petName" class="container">
        <h1>${pets1.pet[targetIndex].petName}</h1>
        <p>
            ID: ${pets1.pet[targetIndex].ID}<br />
            Species: ${pets1.pet[targetIndex].petType}<br />
            Breed: ${pets1.pet[targetIndex].breed}<br />
            Fixed: ${pets1.pet[targetIndex].spayedNeutered}<br />
            Sex: ${pets1.pet[targetIndex].Sex}<br />
            Age: ${pets1.pet[targetIndex].age}<br />
            Vaccinated: ${pets1.pet[targetIndex].vaccinationStatus}<br />
            Location: ${pets1.pet[targetIndex].location}<br />
            Availble to Adopt: ${pets1.pet[targetIndex].available}<br />
            Additional Information: ${pets1.pet[targetIndex].additionalDetail}<br />
        </p>
    </div>`;

    //Carousel of images

}

//Function to get json
async function fetchFunction(){
    // Fetch the JSON 
    const response = await fetch('Pets.json');
    // Resolves the promise as JSON
    const content = await response.json();
    // pass content to loadScript for usage
    loadScript(content);
}

// might use this to get the JSON object into pets object.
function writeToVariable(content1, variable){
    let parsedJSON;
    parsedJSON = JSON.parse(content1);
    console.log("Check for parsed JSON" + parsedJSON);
    variable = parsedJSON;
} 