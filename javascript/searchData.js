
export function getSearchTerm(){
    var rawSearchTerm = document.getElementById("searchBar").value;
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    console.log("search results");
    return searchTerm;
}

//This runs in the main
export async function retrieveSearchResults(term){
    const wikiSearchString = wikiSearch(term);
    const wikiSearchResult = await requestData(wikiSearchString);
    

    let resultArray = [];

    if(wikiSearchResult.hasOwnProperty("query")){
        resultArray = processWikiSearch(wikiSearchResult.query.pages);
    }
    
    return resultArray;
}

 

function wikiSearch(term){
    const maxChar = 63;
    const correctFormatURL= `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${term}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChar}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const sendSearchString = encodeURI(correctFormatURL);
    return sendSearchString;

}


export async function requestData(searchString){

    try {
        const response = await fetch(searchString);
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err);
      }

  
};

/*gets the Json, takes ceratin values like Id and the description
makes an opbject for each ID */
function processWikiSearch(result){
    let resultArray = [];
    Object.keys(result).forEach((key)=>{
        const id = key;
        const title = result[key].title;
        const text = result[key].extract;
        const img = result[key].hasOwnProperty("thumbnail")
        ? result[key].thumbnail.source
        : null;
        const itemObject = {
            id: id, 
            title: title, 
            text: text,
            img: img
        };
        resultArray.push(itemObject);
    });
    return resultArray;
}
