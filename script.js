const gridcontainer =document.getElementById("GameBoard")
const inputvalue =document.getElementById("GridCount")
let CurrentInput = 16
let CurrnetDivCount = 16*16



window.onload=()=>{ 
    changeinputtext()
    changegridsize()
    addblocks() 
    togglepen()
}




inputvalue.oninput = showinput
inputvalue.onchange = changeGrid


function changeGrid(){
setnewinputs()
changeinputtext()
cleargridsanddivs()
changegridsize()
addblocks()
changecolor()
togglepen()
}


function showinput(){
setnewinputs()
changeinputtext()
}

function setnewinputs(){
    CurrentInput=document.getElementById("GridCount").value
    CurrnetDivCount=CurrentInput*CurrentInput
}



function changeinputtext(){
    document.getElementById("gridcounttext").innerHTML=`${CurrentInput}` + "x" + `${CurrentInput}` 
}

function cleargridsanddivs(){
    gridcontainer.innerHTML=""
}



function changegridsize(){
    gridcontainer.style.gridTemplateColumns = `repeat(${CurrentInput}, 1fr)`
    gridcontainer.style.gridTemplateRows = `repeat(${CurrentInput}, 1fr)`
}


function addblocks(){
    for (let index = 0; index < CurrnetDivCount; index++) {
        const sgrid = document.createElement("div");
        sgrid.className="smallbox"
        sgrid.id="smallgrid"
        gridcontainer.appendChild(sgrid);
      }
    
}





var mousedown=false
var mouseenter=false
let penstatus=0
var smallGrids = document.querySelectorAll("#smallgrid");


function togglepen(){
    smallGrids = document.querySelectorAll("#smallgrid");

    gridcontainer.onclick= function() {
        if(penstatus==0){
            for(var j = 0; j < smallGrids.length; j++){
            smallGrids[j].onmouseenter = function() {
                this.style.backgroundColor=`${currentcolor}`
                penstatus=1
            }}
        }
        else{
            for(var z = 0; z < smallGrids.length; z++){
                smallGrids[z].onmouseenter = function() {
                    penstatus=0
                }
            }
        }
}}


let gridstatus=1
const gridborderb=document.getElementById("gridborder")


function togglegrid(){
    if(gridstatus===0){
        for (var i = 0; i < smallGrids.length; i++) {
            smallGrids[i].classList.remove("nogrid") 
            gridstatus=1
        }}
    else{ for(var i = 0; i < smallGrids.length; i++){
        smallGrids[i].classList.add("nogrid") 
        gridstatus=0}
    }
    
}
const clearbutton=document.getElementById("clear");
clearbutton.onclick = cleargrid
function cleargrid(){
    for (var i = 0; i < smallGrids.length; i++) {
        smallGrids[i].style.backgroundColor=`#acacac`;
    }}


let currentcolor = 'black';
const colorpicker=document.getElementById("Color")
colorpicker.addEventListener('input',changecolor);


function changecolor(){
    let inputcolor=document.getElementById("Color").value
    currentcolor=inputcolor
}

    /*const randomcolorbutton=document.getElementById("RandomColor");
    randomcolorbutton.addEventListener('change', function() {
        if(this.checked){
            gridcontainer.addEventListener("mousemove", (event) => {
                let r = Math.random() * 256;
                    let g = Math.random() * 256;
                    let b = Math.random() * 256;
                    currentcolor= `rgb(${r}, ${g}, ${b})`
            });}
           else{
            alert("2")
            gridcontainer.removeEventListener("mousemove", (event) => {
                let r = Math.random() * 256;
                    let g = Math.random() * 256;
                    let b = Math.random() * 256;
                    currentcolor= `rgb(${r}, ${g}, ${b})`
            });
            changecolor();
             }})*/
        
        


    













