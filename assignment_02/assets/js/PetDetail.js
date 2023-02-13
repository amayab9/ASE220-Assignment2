document.addEventListener('DOMContentLoaded', () => loadPage(), false);
var pets = JSON.parse(Pets.json);
var pet = pets[3];
// rewrite as var pet = pets[getAllURLParams().index];
// [getAllURLParams().index]
const setCurrentPage = (pageNum, content) => {
    /* not paginating
    const pageCount = Math.ceil(content.pet.length / paginationLimit);
    currentPage = pageNum;
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    */ 
    content.pet.forEach((item, index) => {
            document.getElementById('petInfo').innerHTML += `
            <div>
              <p>
                  ID: <a href="detail.html?index=${pet.ID}</a><br />
                  Species: <a href="detail.html?index=${pet.petType}</a><br />
                  Breed: <a href="detail.html?index=${pet.breed}</a><br />
                  Fixed: <a href="detail.html?index=${pet.spayedNeutered}</a><br />
                  Sex: <a href="detail.html?index=${pet.Sex}</a><br />
                  Age: <a href="detail.html?index=${pet.age}</a><br />
                  Vaccinated: <a href="detail.html?index=${pet.vaccinationStatus}</a><br />
                  Location: <a href="detail.html?index=${pet.location}</a><br />
                  Availble to Adopt: <a href="detail.html?index=${pet.available}</a><br />
                  Additional Information: <a href="detail.html?index=${pet.additionalDetail}</a><br />
              </p>
            </div>`
        }
    )
} 

async function loadPage() {
    let params = getAllUrlParams(window.location.href);
    let page;
    if (!params.hasOwnProperty('page')) {
        page = 1;
    } else {
        page = params.page;
    }
    console.log(page);
    const response = await fetch('Pets.json');
    const json = await response.json();
    setCurrentPage(page, json);
} 
