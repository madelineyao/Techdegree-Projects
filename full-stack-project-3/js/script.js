//set focus on the first text field in the text form 
//const first_textfield = document.querySelectorAll('fieldset')[0]; 
//first_textfield.focus(); 

//add a text field for the 'Other' option in 'Job Role' and hide the input for the 'Other' option
const other_job_input = document.querySelector('.other-job-section'); 
const options = document.getElementById('title'); 
other_job_input.style.display= ''; 

//color selection based on the theme
const theme_selection = document.getElementById('design'); 
const color_menu = document.getElementById('color'); 

theme_selection.addEventListener('click', (e)=>{
    const colors = color_menu.children; 
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
}); 
 

