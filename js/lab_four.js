var acc = document.getElementsByClassName("accordion");
var i;              

for (i=0; i<acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        const iconElement = this.querySelector(".accordion_icon");
        iconElement.classList.toggle("fa-plus");
        iconElement.classList.toggle("fa-minus");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
    
}

document.getElementById("year").innerHTML = new Date().getFullYear();
