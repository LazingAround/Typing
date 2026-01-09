import './style.css'

const theWord = document.getElementById('word')

const word = "Hello"
const letters = word.split('');
letters.forEach((letter) => {
  const l = document.createElement('letter')
  l.textContent = letter
  theWord.appendChild(l)
})

let index = 0
let typed = []

document.addEventListener('keydown', (event) => {
  const key = event.key
  if (key === "Backspace") {
    typed.splice(-1, 1)

    index = Math.max(0, index - 1)
    theWord.children[index].className = ""
  }
  else {
    if (key != "Shift" && key != "Tab" && key != "Enter" && key != "Escape" && key != "CapsLock" && key != "Control" && key != "Alt" && key != "Meta" && key != "ArrowUp" && key != "ArrowRight" && key != "ArrowDown" && key != "ArrowLeft") {
      if (typed.length < letters.length) {
        typed.push(key)
      }
      index = Math.min(index + 1, letters.length)
    }
  }
  updateInput()
})

const statusElement = document.getElementById('shower')
function updateInput() {

  typed.forEach((element, index) => {

    theWord.children[index].className = (element === letters[index]) ? "correct" : "incorrect"
  })
}

