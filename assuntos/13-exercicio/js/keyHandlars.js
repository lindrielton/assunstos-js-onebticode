 import calculate from "./calculat.js"

 
  const input = document.getElementById('input')
 
 
 function rendowbtnpress(ev) {
   
    const value = ev.currentTarget.dataset.value
    input.value += value
  }

 function handowclierbtn () {
  input.value = ""
  input.focus()
}

 function includkaybtn (ev) {
  ev.preventDefault()
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
}

export { rendowbtnpress, handowclierbtn, includkaybtn}