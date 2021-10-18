//Need to wait for page to load to create meme
document.addEventListener('DOMContentLoaded', function(){
//Need to be able to refer to my meme form and the meme list
    let memeForm = document.getElementById('meme-form');
    let memeList = document.getElementById('meme-list');

    //Need to know when a meme is being created
    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();
    //Each meme that is created has to be a list item for the memeList
    let createdMeme = document.createElement('li');
    createdMeme.classList.add('created-meme');

    //Need to create element for the image that is uploaded
    let linkLocation = document.getElementById('meme-image').value;
    src = linkLocation;
    let memeImg = document.createElement('img');
    memeImg.src = src;

    //Need to create element to overlay text at the top
    let topTextContainer = document.createElement('div');
    topTextContainer.innerText = document.getElementById("tp-text").value;

    //Need to create element to overlay text at the bottom
    let bottomTextContainer = document.createElement('div');
    bottomTextContainer.innerText = document.getElementById("bt-text").value;

    //Need to add close button to the created meme
    let deleteMeme = document.createElement('div');
    deleteMeme.classList.add('deletion')
    deleteMeme.innerText = "Delete Meme";

    //Need to add the created meme to my meme list
    //Need to add the image, top text, bottom text, and close button to the created meme
    memeList.appendChild(createdMeme);
    createdMeme.appendChild(memeImg);
    createdMeme.appendChild(topTextContainer);
    createdMeme.appendChild(bottomTextContainer);
    createdMeme.appendChild(deleteMeme);

    //After meme is created and added I should clear inputs from my form
    memeForm.reset();

    })

//Need to know when a meme has been selected for deletion and a function to delete memes

function memeDeletion(event) {
    event.target.parentNode.remove();
}

memeList.addEventListener('click', memeDeletion, false)

})



