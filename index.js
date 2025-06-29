const btnEl = document.getElementById('btn')
const jokeEl = document.getElementById('joke')
const apiKey = 'DlfCTkeBNSiq0jrRB0wnmw==Bo4uYnwftteRloqL'
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?'

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
}

async function getJoke(){
    try {
        jokeEl.innerText = 'Updating the Joke...'
        btnEl.disabled = true
        btnEl.innerText = 'Loading...'

        const response = await fetch(apiURL, options)
        const data = await response.json()

        btnEl.disabled = false
        btnEl.innerText = 'tell me a joke'

        jokeEl.innerText = data[0].joke 
    } catch (error) {
        jokeEl.innerText = 'Check your internet and try again!!!'
        btnEl.disabled = false
        btnEl.innerText = 'tell me a joke'
        console.log(error);
        
    }   
}

btnEl.addEventListener('click', getJoke)