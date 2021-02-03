import {retrieveMeme,
        clearMeme} from "./meme.js";


import {getSearchTerm,
        retrieveSearchResults} from "./searchData.js";


import {setFocus,
        clearSearchBar,
        displayClear
    } from "./searchBar.js";

import {buildResultArea,
        clearsearch, deleteSearchResult} from "./resultArea.js";


const url = 'https://meme-api.herokuapp.com/gimme';
function initApp(){
    //Getting the the meme button By ID
    let dankMeme = document.getElementById("dankMeme"); // This works 
    dankMeme.addEventListener("click", retrieveMeme);
    dankMeme.addEventListener("click",deleteSearchResult);

    //........................................................................
    setFocus(); //Sets focus on searcdh bar
    displayClear();

    let submit = document.getElementById("searchButton");
    submit.addEventListener("click", submitTheSearch);
    
    let clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchBar);
    
}

const submitTheSearch = (event) => { //TODO: Work on this 
    event.preventDefault();
   
    clearMeme();
    processSearch();
    clearSearchBar();
    
  };
  

async function processSearch(){
    deleteSearchResult(); //deletes search 
    const searchTerm = getSearchTerm();
  
    if(searchTerm === "") return;

    const resultArray = await retrieveSearchResults(searchTerm);
    console.log(resultArray);

    for(let i=0; i<resultArray.length; i++){
        let name = "result" + i;
        let result = resultArray[i];
        
        buildResultArea(result);
    }
};




initApp();
