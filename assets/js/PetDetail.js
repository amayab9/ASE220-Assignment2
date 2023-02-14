document.addEventListener('DOMContentLoaded', () => fetchFunction(), false);

function loadScript(pets1) { 
    let targetIndex;
    // pick the pet based on ID which is passed through query string.
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


    document.getElementById ('imageGallery') .innerHTML += `
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${pets1.pet[targetIndex].pictures[1]}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${pets1.pet[targetIndex].pictures[2]}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${pets1.pet[targetIndex].pictures[3]}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>`

    
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