const addbutton = document.querySelector('.lists button');
const writetask = document.querySelector('.writetaskclass');
const button  = document.querySelector('.plus');
const spanElement = document.getElementById('clicktoadd');

const writetaskinput = document.getElementById('writetask');

let offset = 0;
var arr = [];


let count = 0;
let arraycount = 0;


addbutton.addEventListener('click' , ()=>{
if(count == 0 ){
    spanElement.textContent = ' ';
    offset += 60;
    count = count+1;
    writetask.style.scale = '1';
    writetask.style.transform = `translateY(${offset}px)`;
    addbutton.style.transform = `translateY(${offset}px)`;
  
   
}
else{
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


        checkbox.onclick = function(){
            checkboxfunc(textNode);
        };
        li.appendChild(checkbox);




        //crossbutton functionality
        
        var listSeperate= document.querySelector('.seperateList');
        var crossbutton = document.querySelector('.fas fa-plus-square');
        
      

        li.addEventListener('mouseenter',()=>{
        
        i.style.scale = '1';
          

            // when click on the cross
            i.addEventListener('click',()=>{
var parent = li.parentNode;
parent.removeChild(li);
offset -= 60;
countofcheckboxes -= 1;

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

    // checkbox functioality 
 
   checkbox.addEventListener('change' , ()=>{

   })


}
}


});



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








function checkboxfunc(text){
    var a = document.getElementsByClassName('myCheckbox');
    var newvar = 0;
    var inbound = document.getElementById('taskinbound');
    console.log("WORKEDDDDDD");
   
    
    
    
    for(var i = 0 ; i < a.length ; i++){
        if(a[i].checked == true){
            var string = 'Task '+ text + ' is in bound';
            inbound.innerHTML = string;
            newvar += 1;
        }else{
            inbound.innerHTML = 'No task is selected!'
        }
        
    }
    if(newvar>1){
        return false;
    }
}












