//Need to wait for page to load to create meme
document.addEventListener('DOMContentLoaded', function(){
//Need to be able to refer to my meme form and the meme list
    let memeForm = document.getElementById('meme-form');
    let memeList = document.getElementById('meme-list');

    //Each meme that is created has to be a list item for the memeList
    let createdMeme = document.createElement('li');
    createdMeme.classList.add('created-meme');

    //Need to create element for the image that is uploaded

    //Need to create element to overlay text at the top

    //Need to create element to overlay text at the bottom

    //Need to add close button to the created meme

    //Need to add the image, top text, bottom text, and close button to the created meme

    //Need to add the created meme to my meme list

    //After meme is created and added I should clear inputs from my form

})

//Need a function to delete memes