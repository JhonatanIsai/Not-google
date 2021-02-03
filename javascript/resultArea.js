export function buildResultArea(result){
    const divmine = document.getElementById("searchBlock");
    let newdiv = document.createElement("div");
    newdiv.classList.add("resultDiv");

    checkIfNull(result, newdiv);
    let title = resultName(result);
    let description = resultDescription(result);

    newdiv.append(title);
    newdiv.append(description);

    divmine.append(newdiv);
}
export function deleteSearchResult(){
    const parentElement = document.getElementById("searchBlock");
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

/*Makes a div for the the title  */
function resultName(result){
    let resultDiv= document.createElement("div");
    resultDiv.classList.add("resultNameDiv"); // Make this 

    let resultName = document.createElement("div");
    resultName.classList.add("resultName");

    let resultLink = document.createElement("a");
    resultLink.href = `https://en.wikipedia.org/?curid=${result.id}`;
    resultLink.textContent = result.title;
    resultLink.target = "_blank";

    resultDiv.append(resultLink);
    resultDiv.append(resultName);
    
    return resultDiv;

}

/*Makes a div which holds the image content for image in the object */
function resultImg(result){
    const resultImg = document.createElement("div");
    resultImg.classList.add("resultImg"); 

    const img = document.createElement("img");
    img.src = result.img;
    img.alt = result.title;

    resultImg.append(img);
    return resultImg;
}

/*makes div for the description from the text attribute from the object  */
function resultDescription(result){
    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("decriptionDiv");

    let resultDescription = document.createElement("p");
    resultDescription.classList.add("resultDescription");
    resultDescription.textContent = result.text;

    descriptionDiv.append(resultDescription);
    return descriptionDiv;
}

/* We dont want the null find way to check if null
If null return, else run resultImg. */
function checkIfNull(result,element){
    if (result.img === null){

        console.log("The image : " + result.id + " was null for the item.");
        
        return;
    }else{
        element.append(resultImg(result));
        
    }
}

 export function clearsearch(){
     const divmine = document.getElementById("searchBlock");
     divmine.removeChild();
    
}