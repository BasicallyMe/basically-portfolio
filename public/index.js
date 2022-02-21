import './styles.scss'
import randomWordsGenerate from 'random-words'

const randomQuote = document.getElementById('random-quote')
randomQuote.innerHTML = `basically-${randomWordsGenerate({  exactly: 1, minLength: 5 }).toString()}`;  