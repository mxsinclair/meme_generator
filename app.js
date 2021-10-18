//Need to wait for page to load to create meme
document.addEventListener('DOMContentLoaded', function(){
//Need to be able to refer to my meme form and the meme list
    let memeForm = document.getElementById('meme-form');
    let memeList = document.getElementById('meme-list');

    //Each meme that is created has to be a list item for the memeList
    let createdMeme = document.createElement('li');
    createdMeme.classList.add('created-meme');

    //Need to create element for the image that is uploaded
    let memeImgLocation = document.getElementById('meme-image').value;
    let src = memeImgLocation;
    let memeImg = document.createElement('img');
    memeImg.src = memeImgLocation;

    //Need to create element to overlay text at the top
    let topTextContainer = document.createElement('div');
    topTextContainer.innerText = document.getElementById('top-text');

    //Need to create element to overlay text at the bottom
    let bottomTextContainer = document.createElement('div');
    bottomTextContainer.innerText = document.getElementById('bottom-text');

    //Need to add close button to the created meme
    let deleteMeme = document.createElement('div');
    deleteMeme.innerText = "Delete Meme";

    //Need to add the image, top text, bottom text, and close button to the created meme

    //Need to add the created meme to my meme list

    //After meme is created and added I should clear inputs from my form

})

//Need a function to delete memes