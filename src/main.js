import './style.css'

const readerElement = document.getElementById('reader')
const statusElement = document.getElementById('shower')
let typed = []
document.addEventListener('keydown', (event) => {
  const key = event.key
  console.log(key === 'Backspace')
  if (key === "Backspace") {
    typed.splice(-1, 1)
  }
  else {
    if (key != "Shift" && key != "Tab") {
      typed.push(event.key)
    }
  }
  updateInput()
})

function updateInput() {
  statusElement.textContent = typed.join("")
}