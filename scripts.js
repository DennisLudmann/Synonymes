
async function getSynonymes(){  // async is needed, because we dont just wanna process the code the "normal" way but wait

    let url = 'https://www.openthesaurus.de/synonyme/search?q=test&format=application/json';
       let response = await fetch(url); //it always takes some time to download the data - so we need to wait for it 'await'
                                         //fetch is needed to get/fetch the data from the server.
       let responseAsJson = await response.json(); // .json() is needed to get "workable" info as return
    
       console.log('The response is:', responseAsJson);  
                                                         
    document.getAnimations('container').innerHTML = responseAsJson;
}