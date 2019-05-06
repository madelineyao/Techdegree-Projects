//Plans to write the code: 
//
// a. Load the page into 10 individuals per page(priority)
//    create the button --> let the original page disappear ---> show the first 10 people 
//     ----> assign events to buttons 
//  how to assign events to buttons: 
//      (1) create a function to show the individual information 
//      (2) make the page number available 
//      (3) give instructions by combining the page number and the function in (1)
// b. add people to the webpage by JavaScript 
//     locate the object(the place to add and the object added) --> order the one object to add another
// c. add functionality to search button 
//      Let the user write the keyword --> try to let the keyword match info in the webpage 
//               Two situations to consider: 
//                       (1) No result match --> print the message to the webpage 
//                       (2) results match --> calculate number of items 
 
//                       if fewer than 10 items, just use 1 pagination link and display all info 
//                       if more than 10 items, just use more pagination links and display all info 
//                        if statement 
//                        no result ---> print the message 
//                        results ---> create buttons ---> use showeachpageinfo to display information 

/*
   pagination: 
   1. locate the people 
   2. hide everything 
   3. show the first 10 items 
   3. create buttons 
   4. create functions that display the people in that page 
   5. event handler that makes it happen

*/

/*
   search for certain people: 
   1. create the search bar and the input box 
   2. if the input is not null, then run the search on the name and the email and display related results 


*/ 
 
const people = document.getElementsByTagName('ul'); 
const page = document.getElementsByClassName('page')[0]; 
const people_list = people.getElementsByClassName('cf'); 
hideAll(people); 
for(let i=0; i <10; i+=1){
    people_list[i].style.display = 'block'; 
}

const all_buttons = createButtons(people_list); 
page.insertBefore(people, all_buttons); 
const buttons = all_buttons.getElementsByClassName('button'); 
for(let i = 0; i <buttons.length; i+=1 ){
    buttons[i].addEventListener('click', ()=>{
        showEachPageInfo(buttons[i].textContent, people_list); 
    }); 
}

//create a search button 
/*
const search_button = document.createElement('div');
search_button.className = 'student-search'; 
const input = document.createElement('input'); 
input.placeholder = "Search for students..."; 
const button_for_search = document.createElement('button'); 
button_for_search.innerHTML = "Search"; 
search_button.appendChild(input); 
search_button.appendChild(button_for_search);
page_header[0].appendChild(search_button); 

let value = document.querySelector(".student-search input").value; 
let people_list = document.createElement('ul');
*/ 

//let people = people_list.children; 
/*
button_for_search.addEventListener('click', ()=>{
    hideAll(people); 
    
    for(let i=0; i < people.length; i+=1){
        
        let student_detail = people[i].querySelector('.student-details'); 
        let name = student_detail.querySelector('h3'); 
        let email = student_detail.querySelector('.email'); 
        
        if(name.textContent.includes(value.toLowerCase) || email.textContent.includes(value.toLowerCase)){
            people[i].style.display = 'block'; 
            people_list.appendChild(people[i]); 
        }
    }
    
    if(people_list.length === 0){
        hideAll(all_buttons); 
        let statement_cover = document.createElement('div'); 
        let statement = document.createElement('p'); 
        statement.value = "Sorry we cannot find anything in our record that matches your keyword search";
        statement_cover.appendChild(statement); 
        webpage.insertBefore(statement_cover, people); 
        statement.style.display = 'block'; 
    
        
    } else {
        
        hideAll(all_buttons); 
        let pagination_number = getNumberOfPages(people_list); 
        let search_result_buttons = createButtons(pagination_number,"pagination",webpage[0]); 
        for(let i = 0; i < search_result_buttons.length; i+=1 ){
            search_result_buttons[i].addEventListener('click', ()=>{
            showEachPageInfo(search_result_buttons[i].value, people_list); 
    }); 

    }
    }
    
}); 
*/ 




function showEachPageInfo(page, list){
    for(let i = 0; i < list.length; i+=1){
        let end_item = page*10 - 1; 
        let first_item = page*10 - 10; 
        list[i].style.display = 'none'; 
       if(i<= end_item && i >= first_item){
        list[i].style.display = 'block'; 
     }
    }
}

 

function createButtons(list){
   
    let a = list.length; 
    let b = 0; 
    if(a%10 ==0){
      b = (a- a%10)/10; 
    } else {
       b = (a - a%10) /10 +1; 
    }
    let all_buttons = document.createElment('div'); 
    for(let i =0; i < b; i+=1){
        let button = document.createElement('button'); 
        button.value = i+1; 
        button.className = 'button'; 
        all_buttons.appendChild(button); 
    }
    return all_buttons; 
    
}









 

function hideAll(list){
    for(let i = 0; i < list.length; i+=1){
        list[i].style.display = 'none'; 
    }
}






 
 

