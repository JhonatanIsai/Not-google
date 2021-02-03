

export function clearSearchBar(){
    const searchBar  = document.getElementById("searchBar");
    searchBar.value = "";
}

export function setFocus(){
    document.getElementById("searchBar").focus(); //TODO: Works search make focus more noticable, lok foe the ather TODO for betert instruction 
}

export function displayClear(){
    let searchBar = document.getElementById("searchBar");
    let clearButton = document.getElementById("clear");
    clearButton.classList.remove("clear");
}



