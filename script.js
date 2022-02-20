let ham = document.getElementById("ham")
let links= document.getElementById("link")
let bar1 = document.getElementById("1bar")
let bar2= document.getElementById("2bar")
let bar3= document.getElementById("3bar")





ham.addEventListener("click", () => {
    
// links.style.transform = "translate(0%)"
    if (links.style.transform == "translate(0%)") {
        links.style.transform = "translate(100%)"
        bar2.style.display = "block"
        bar1.style.transform = "rotate(0deg)"
        bar3.style.transform ="rotate(0deg)"
       ham.style.gap="4px"

    } else {
        links.style.transform = "translate(0%)"
        bar2.style.display = "none"
        bar1.style.transform = "rotate(-45deg)"
        bar3.style.transform ="rotate(-135deg)"
       ham.style.gap="0px"
        

    }
    

})
