const containerElement = document.querySelector('.container')

const options = ['Youtuber', 'Freelancer', 'Cloud Engineer', 'Web Developer']

let optionsIndex = 0

let characterIndex = 0

updateText()

function updateText(){
    characterIndex++
    containerElement.innerHTML = `<h1>I am a ${options[optionsIndex].slice(0,characterIndex)}</h1>`

    if(characterIndex === options[optionsIndex].length){
        optionsIndex++
        characterIndex = 0
    }

    if(optionsIndex === options.length){
        optionsIndex = 0
    }
    setTimeout(updateText, 200)

}

