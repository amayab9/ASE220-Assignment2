document.addEventListener('DOMContentLoaded', () => loadPage(), false);

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

}
