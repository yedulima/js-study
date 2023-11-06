document.addEventListener("DOMContentLoaded", function(){
    let figure = document.querySelector("img");
    figure.addEventListener("click", function(){
        if (figure.src.match("gato1.jpg")){
            figure.src = "gato2.jpg";
        } else{
            figure.src = "gato1.jpg"
        }
    })
})