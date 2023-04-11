const gridcontainer =document.getElementById("GameBoard")
const inputvalue =document.getElementById("GridCount")
let CurrentInput = 16
let CurrnetDivCount = 16*16



window.onload=()=>{ 
    changeinputtext()
    changegridsize()
    addblocks() 
    pressforpen()
    
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
pressforpen()
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
            smallGrids[j].onmouseover = function() {
                this.style.backgroundColor=`${currentcolor}`
                
            }}penstatus=1
        }
        else{
            for(var z = 0; z < smallGrids.length; z++){
                smallGrids[z].onmouseover = function() {
                    penstatus=0
                }
            }
        }
}}

function pressforpen(){

    gridcontainer.onclick= function() {}
    for(var j = 0; j < smallGrids.length; j++){
    smallGrids[j].onmouseover = function() {}}


    let mousestatus=0
    smallGrids = document.querySelectorAll("#smallgrid");
    gridcontainer.onmousedown= function(){mousestatus=1}
    gridcontainer.onmouseup= function(){mousestatus=0}
    gridcontainer.onmouseleave=function(){mousestatus=0}
    for(var j = 0; j < smallGrids.length; j++){
        smallGrids[j].onmouseover = function() {
            if(mousestatus===0){return}
            else if(mousestatus===1){
            this.style.backgroundColor=`${currentcolor}`
            penstatus=1
        }}
        


}}






let gridstatus=0
const gridborderb=document.getElementById("gridborder")


function togglegrid(){
    if(gridstatus===1){
        for (var i = 0; i < smallGrids.length; i++) {
            smallGrids[i].classList.remove("dogrid") 
            smallGrids[i].classList.add("smallbox")    
            gridstatus=0
        }}
    else{ 
        for(var i = 0; i < smallGrids.length; i++){
        smallGrids[i].classList.add("dogrid") 
        smallGrids[i].classList.remove("smallbox") 

        gridstatus=1
    }
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

    document.getElementById("Eraser").checked=false
    document.getElementById("RandomColor").checked=false
    gridcontainer.removeEventListener("mousemove", mousemoveListener);
}

    
let mousemoveListener = (event) => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    currentcolor= `rgb(${r}, ${g}, ${b})`
};

document.getElementById("RandomColor").addEventListener('change', function() {
    if(this.checked){
        gridcontainer.addEventListener("mousemove", mousemoveListener);
        document.getElementById("Eraser").checked=false

    } else {
        gridcontainer.removeEventListener("mousemove", mousemoveListener);
        changecolor()
    }
})



            document.getElementById("Penmode").addEventListener('change', function() {
                if(this.checked){
                    togglepen()
                    }
                   else{
                    pressforpen()
        
                    }});
                



document.getElementById("Eraser").addEventListener('change',function() {
    if(this.checked){
        
                currentcolor = `#acacac`
                document.getElementById("RandomColor").checked=false
    gridcontainer.removeEventListener("mousemove", mousemoveListener);
        }
       else{
         
                changecolor()

        }});


            
        
        


    













