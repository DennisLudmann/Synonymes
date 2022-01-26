
async function getSynonymes() {  // async is needed, because we dont just wanna process the code the "normal" way but wait

    let query = document.getElementById('inputQuery').value; //get word from the inputfield and add it to the URL
    let url = `https://www.openthesaurus.de/synonyme/search?q=${query}&format=application/json`;
    let response = await fetch(url); //it always takes some time to download the data - so we need to wait for it 'await'
    //fetch is needed to get/fetch the data from the server.
    let responseAsJson = await response.json(); // .json() is needed to get "workable" info as return
    let synsets = responseAsJson['synsets'];
    renderSynests(synsets);
}

function renderSynests(synsets) {
    let container = document.getElementById('container');
    container.innerHTML = `<div>We have Loaded <b>${synsets.length} </b> Set(s) of Synomymes.</div>`

    for (let i = 0; i < synsets.length; i++) {
        const synset = synsets[i];
        let terms = synset['terms'];    // is am Array (so we need a forloop within our forloop) so we can get the arrays out of our array
        container.innerHTML += `<h2 id="h2"> New Set</h2>`

        for (let j = 0; j < terms.length; j++) {
            const term = terms[j];
            container.innerHTML += `<p>${term['term']}</p>`
        }
    }

}