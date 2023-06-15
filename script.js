const addbutton = document.querySelector('.lists button');
const writetask = document.querySelector('.writetaskclass');
const button  = document.querySelector('.plus');
const spanElement = document.getElementById('clicktoadd');

const writetaskinput = document.getElementById('writetask');
var note = document.getElementById('note');
let offset = 0;
var arr = [];


let count = 0;
let arraycount = 0;


addbutton.addEventListener('click' , ()=>{
    note.textContent = ' ';
if(count == 0 ){

    spanElement.textContent = ' ';
    offset += 60;
    count = count+1;
    writetask.style.scale = '1';
    writetask.style.transform = `translateY(${offset}px)`;
    addbutton.style.transform = `translateY(${offset}px)`;
  
   
}
else{
    var computedstyle = getComputedStyle(addbutton);
    var transformvalue = computedstyle.transform;
    var translateYValue = 0;
    if(transformvalue && transformvalue!=='none'){
        var matrix  = transformvalue.match(/matrix.*\((.+)\)/)[1].split(', ');
        translateYValue = parseFloat(matrix[5]);
    }
    
    if(translateYValue+60>720){
console.log("BREACHHH");
    }else{

    
    spanElement.textContent = ' ';

    const inputelement = document.querySelector('.writetaskclass input');
   const task  = inputelement.value;
   inputelement.placeholder = 'Enter your task'

   if(task == ""){
        inputelement.placeholder = 'Please Enter a task before clicking add!'
    }
   
   else{
    let countofcheckboxes = 0;
    arr.push(task);
    offset += 60;
    //List element
        var li = document.createElement('li');
        li.className = 'seperateList';
        //making checkbox
        var checkbox = document.createElement('input'); countofcheckboxes += 1;
        checkbox.type = 'checkbox';
        checkbox.className = 'myCheckbox';
        checkbox.onclick = checkboxfunc;
        li.appendChild(checkbox);
       
        
        //making the crossbutton
        var crossbutton  = document.createElement('button');
        crossbutton.className = 'crossbutton';
        crossbutton.id = 'crossbuttonid';
        var i = document.createElement('i');
        i.className = 'fas fa-times-circle';
        crossbutton.append(i);
        i.style.scale = '0';
        li.append(crossbutton);       
       //Adding the task
        var textNode = document.createTextNode(task);
        li.appendChild(textNode);
        var ul = document.getElementById("list");
        ul.appendChild(li);
        console.log(ul);


     




        //crossbutton functionality
        
        var listSeperate= document.querySelector('.seperateList');
        var crossbutton = document.querySelector('.fas fa-plus-square');
        
      

        li.addEventListener('mouseenter',()=>{
        
        i.style.scale = '1';
          

            // when click on the cross
            i.addEventListener('click',()=>{
                note.textContent = ' ';
var parent = li.parentNode;
var headingaftercross = document.getElementById('taskinbound');

parent.removeChild(li);
offset -= 60;
countofcheckboxes -= 1;
if(checkbox.checked){
    headingaftercross.innerHTML = 'No task is selected.';
}

writetask.style.transform = `translateY(${offset}px)`;
addbutton.style.transform = `translateY(${offset}px)`;

            } )

            //when click on the check
          
        })
        
        li.addEventListener('mouseleave',()=>{
           
        i.style.scale = '0';
    
        })
        
       
    
    writetask.style.transform = `translateY(${offset}px)`;
    addbutton.style.transform = `translateY(${offset}px)`;
    writetaskinput.value = '';

    var h1 =  document.getElementById('taskinbound');

    // checkbox functioality 
 
   checkbox.addEventListener('change' , ()=>{
    if(checkbox.checked){
      
        note.textContent = ' ';
        var String  = li.innerText;
        h1.innerHTML = 'Task ' + String + ' is in bound!';

        const taskinit = document.getElementById("taskinit");
        const now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
const seconds = now.getSeconds();
let meridiem = "AM";
if(minutes<10){
minutes  = minutes.toString().padStart(2,'0');
}
if(hours>=12){
    hours = hours-12;
    meridiem = "PM";
}
console.log(hours + ":" + minutes + ":" + seconds + meridiem) ;


        
        taskinit.innerHTML = hours + ":" + minutes +" " +meridiem;


    }
    else{ note.textContent = ' ';
        h1.innerHTML = 'No task is selected!';
    }
   })


}
}

}
}); // end of else of click plus button 



// THE CLOCK

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()  =>{
 
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = (day.getSeconds())*deg;
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  
});

// Function of limiting checkboxes
function checkboxfunc(text){
    var note = document.getElementById('note');
    var a = document.getElementsByClassName('myCheckbox');
    var newvar = 0;
    var inbound = document.getElementById('taskinbound');
    console.log("WORKEDDDDDD");
   
    
    
    
    for(var i = 0 ; i < a.length ; i++){
        if(a[i].checked == true){
         
            newvar += 1;
        }
    }
    if(newvar>1){
        console.log ("hi??");
note.textContent = "*Dont go hard on yourself, focus on just one task at a time :)";
       console.log(note.textContent);
        return false;
    }   
}




// Time scripting

let ringtone = new Audio("./files/alarm_clock.mp3");
const minute = document.getElementById("Minute");
let alarmtime;

for(var i = 1 ; i < 60 ;i++){
var option = document.createElement('option');
option.value =  i;
option.textContent = i;
minute.append(option);


}

const setalarmbutton = document.querySelector(".setalarm");

setalarmbutton.addEventListener('click',()=>{
    const alarmbutton = document.getElementById('setalarm');
console.log(setalarmbutton.innerHTML);
const hourselect = document.getElementById("hour");
const minuteselect = document.getElementById("Minute");
const mardiemselect = document.getElementById("mardiem");
var alarmgoesin = document.getElementById('AlarmGoesIn');
    if(setalarmbutton.innerHTML == "Set Alarm"){

const hour = hourselect.value;


const minute = minuteselect.value;


const mardiem = mardiemselect.value;

console.log("Selected time : "+ hour + " " + minute + " " + mardiem);



alarmgoesin.textContent = 'Alarm will go off at '+hour+":"+minute+" "+mardiem;


var time = hour+":"+minute+" "+mardiem;

alarmtime = hour+ ":" + minute + " " + mardiem;

alarmbutton.textContent = "Stop/Remove Alarm"
hourselect.disabled = true;
minuteselect.disabled= true;
mardiemselect.disabled=true;

}
else if(setalarmbutton.innerHTML == "Stop/Remove Alarm"){
    alarmbutton.textContent = "Set Alarm";
alarmgoesin.innerHTML = " ";
    alarmtime = 0 ;
 ringtone.pause();
 hourselect.disabled = false;
 minuteselect.disabled= false;
 mardiemselect.disabled=false;
}

})

setInterval(()=>{

    let date = new Date;
   let h = date.getHours();
    let m = date.getMinutes();
    let mardiem = "AM";

if(h>=12){
mardiem = "PM"
h = h-12;}

    var time = h + ":"+m+" "+mardiem;
;
if(time == alarmtime){
    ringtone.play();
    ringtone.loop = true;
 
}



},1000);
import * as TimePicker from "./TimePicker.js";










