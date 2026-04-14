

// codigo principal 

import calculate from "./calculat.js"
import copythoclipboard from "./copythoclipboard.js"
import finiswither from "./finiswither.js"
import { handowclierbtn, includkaybtn, rendowbtnpress} from "./keyHandlars.js"



document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", rendowbtnpress )
})

document.getElementById("clear").addEventListener("click",handowclierbtn)

document.getElementById("input").addEventListener("keydown", includkaybtn )

document.getElementById("equal").addEventListener("click", calculate)


document.getElementById("copyToClipboard").addEventListener("click", copythoclipboard)

document.getElementById("themeSwitcher").addEventListener("click", finiswither )
