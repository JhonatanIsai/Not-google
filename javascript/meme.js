
//This will provide a random dank meme for your enjoyment

function provideMeme(url){

    //Making image
    let source = url; // Getting the meme to apass to the img
    const img = document.getElementById("elMeme");
    const memeArea = document.getElementById("memeArea");
    memeArea.style.display = "block"; // changes display to show meme

    img.src = source;
}

export async function retrieveMeme(){
    let response = await fetch('https://meme-api.herokuapp.com/gimme');
    
    if(!response.ok){
        // In case there is a problem lo0ading a new meme there will 
        // be a picture letting user know and an error will be thrown

        const errorPic = './errors/error.jpg';
        provideMeme(errorPic);

        throw new Error('Sorry, there was a mistake fetching some dankity dank memes.');

    }
    else{
        response = await response.json(); // I get the url here
        response = response['url'];
        console.log(response); //Keep track on terminal
        provideMeme(response); 
    }
}    

export function clearMeme(){
    const img = document.getElementById("memeArea");
    img.style.display = "none";
}


