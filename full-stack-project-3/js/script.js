//set focus on the first text field in the text form 
//const first_textfield = document.querySelectorAll('fieldset')[0]; 
//first_textfield.focus(); 

//add a text field for the 'Other' option in 'Job Role' and hide the input for the 'Other' option
const other_job_input = document.querySelector('.is-hidden'); 
const options = document.getElementById('title'); 
options.childNodes.addEventListener('click',(e)=>{
    //if(e.target.tagName==='option'){
        if(e.target.textContent ==='Other'){
            other_job_input.className = 'show'; 
        }  
    
}); 


//color selection based on the theme
const theme_selection = document.getElementById('design'); 
const color_menu = document.getElementById('color'); 

theme_selection.addEventListener('click', (e)=>{
    const colors = color_menu.children;
    if(e.target.tagName==='option'){
        if(e.target.textContent === 'Theme - JS Puns'){
        for(let i = 0; i < colors.length; i += 1){
             if(colors.indexOf(colors[i])=== 3|4|5){
                 colors.removeChild(colors[i]); 
             }
        }
    } else if(e.target.textContent === 'Theme - I &#9829; JS'){
        for(let i = 0; i< colors.length; i+=1){
            let color = colors[i]; 
            if(color.textContent === 'Cornflower Blue (JS Puns shirt only)'||'Dark Slate Grey (JS Puns shirt only)'||'Gold (JS Puns shirt only)'){
                colors.removeChild(colors[i]);
            }
        }
    }
    }
}); 


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

