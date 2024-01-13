// const apiUrl = 'https://api.adviceslip.com/advice';
const apiUrl = 'https://hindi-jokes-api.onrender.com/jokes?api_key=c2fec43900c4c1b09072b7748d3b';
document.getElementById("advice").addEventListener("click",()=>{
    document.getElementById("advice").innerHTML="Loading...";
    fetch(apiUrl).then(response => {if (!response.ok) {throw new Error('Network response was not ok');}return response.json();}).then(data => {
        // document.querySelector("#sadvice").innerText = data["slip"]["advice"];
        document.querySelector("#sadvice").innerText = data["jokeContent"];
        document.getElementById("front").setAttribute("class", "card generate");
        document.getElementById("back").setAttribute("class", "card back");
    }).catch(error => {console.log(error);});
})

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("advice").innerHTML="Generate";
    document.getElementById("sadvice").innerHTML="";
    document.getElementById("front").setAttribute("class", "card generateBack");
    document.getElementById("back").setAttribute("class", "card backBack");
})