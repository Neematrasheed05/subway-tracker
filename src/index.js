let count = 0;
//initialised count to 0
let h2 = document.getElementById("count-el")//contains the count no.
let S = document.getElementById("save-el") //container for saving the no.of people
//h2.innerText = count
//console.log(h2)
function increment(){//increment button
    count += 1;
    h2.textContent = count
}
function save(){//save button
    let countStr = count + " - "
    S.textContent += countStr
    h2.textContent = 0//to set the text to 0 evrytime where done incrementing
    count = 0
}
