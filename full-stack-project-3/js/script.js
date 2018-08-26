//set focus on the first text field in the text form 
//const first_textfield = document.querySelectorAll('fieldset')[0]; 
//first_textfield.focus(); 

//add a text field for the 'Other' option in 'Job Role' and hide the input for the 'Other' option
const other_job_input = document.querySelector('.is-hidden'); 
const options = document.getElementById('title'); 
const input = document.getElementById('other-title');
input.style.display = 'none'; 
options.addEventListener('click',(e)=>{
    //if(e.target.tagName==='option'){
      
        if(e.target.value ==='other'){
            input.style.display = 'block';
        } else {
            input.style.display = 'none';
        }  
      
}); 


//color selection based on the theme
const theme_selection = document.getElementById('design'); 
const color_menu = document.getElementById('color'); 

theme_selection.addEventListener('click', (e)=>{
    
   // color_menu.style.display = 'none'; 
    if(e.target.textContent === 'Theme - JS Puns'){
        color_menu.innerHTML = '<select id="color"><option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>'+
            '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>'+ 
            '<option value="gold">Gold (JS Puns shirt only)</option></select>'; 
        color_menu.style.display = 'block'; 
    } else if(e.target.textContent === 'Theme - I &#9829; JS'){
        color_menu.innerHTML = '<select id="color"><option value="tomato">Tomato (I &#9829; JS shirt only)</option>'+
            '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>'+ 
            '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option></select>'; 
        color_menu.style.display = 'block'; 
    }
    
}); 

//Steps for the event checkup: 
//    Preparation: create some html that shows the cost and hide it
//    1. create a collection of those events (value, time, cost) 2. add Event Listener for checkup 3. check one event and find the value and the //object and the time and the cost   4. loop through the collection and find the event that has conflicting schedules 5. disable the checkbox for //those conflicting events 5. show the total cost of the checked up events 
const total = document.createElement('div'); 
total.className = 'total'; 
const p = document.createElement('p');
p.textContent = 'Total: '; 
total.appendChild(p); 
const container = document.querySelector('.container'); 
const fieldset_events = container.querySelectorAll('fieldset')[2]; 
fieldset_events.appendChild(total); 
total.style.display = 'none'; 






//event selection: if there is one event checked that conflicted with another, disable the latter event checkbox
const event_selection = document.getElementsByClassName('activities')[0]; 
const events = event_selection.querySelectorAll('label'); 
const div_for_total = document.createElement('div'); 
const totalinfo = document.createElement('p'); 

//checked the checkbox --> figure out the schedule-conflicting events --> disabled those events' checkboxes 
//--> color the label ---> creat a div under the checkbox --> put dollar in the div and display 
event_selection.addEventListener('change', (e) =>{
    const checkbox = e.target; 

    let totalPayment = 0; 
    const div_for_total = document.createElement('div'); 
    const totalinfo = document.createElement('p'); 
   
    div_for_total.appendChild(totalinfo); 
    event_selection.appendChild(div_for_total); 
    div_for_total.style.display = 'none'; 
    if(checkbox.type==='checkbox' ){
        if(checkbox.checked){
        switch(checkbox.parentNode.name){
            case "all": 
                totalPayment = totalPayment + 200; 
                break; 
            case "js-frameworks": 
                events[3].childNodes[0].disabled = true; 
                events[5].childNodes[0].disabled = true;
                totalPayment = totalPayment + 100;
                break; 
            case "js-libs": 
                events[4].childNodes[0].disabled = true; 
                events[6].childNodes[0].disabled = true; 
                totalPayment += 100; 
                break; 
                
            case "express": 
                events[1].childNodes[0].disabled = true; 
                events[5].childNodes[0].disabled = true; 
                totalPayment += 100; 
                break; 
               
            case "node": 
                events[2].childNodes[0].disabled = true; 
                events[6].childNodes[0].disabled = true; 
                totalPayment += 100; 
                break; 
            case "build-tools": 
                events[1].childNodes[0].disabled = true; 
                events[3].childNodes[0].disabled = true; 
                totalPayment += 100; 
                break; 
            case "npm": 
                events[2].childNodes[0].disabled = true; 
                events[4].childNodes[0].disabled = true; 
                totalPayment += 100; 
                break; 
               
               }
            totalinfo.textContent = 'Total: '+ totalPayment; 
            div_for_total.style.display = 'none'; 
        } 
    }
}); 

