
//Task 2: Adding Employee Cards Dynamically


// Creates a new employee card
function employeeCard( name, position) {
    const card = document.createElement ('div');
    card.setAttribute('class', 'employee-card');
 
 
 // set attributes
 const heading = document.createAttribute ('h3')
 heading.textContent =name
 
 
 //
 const paragraph = document.createElement('p')
 paragraph.textContent = position;
 
 
 //
 const removeButton = document.createElement('button');
 removeButton.textContent = 'remove the card belonging to the employee';
 
 
 //
 const editButton = document.createElement('button');
 editButton.textContent = 'edit the card belonging to the employee';
 
 
 }

//Task 3 - 
function createUpdatedBulk(){
    //
    const employeeCard = document.querySelectorAll('.employee-card');
    
    //
    const employeeCardArray = Array.from(employeeCard);//

    employeeCardArray.forEach (card=> {card.style.backgroundColor= 'purple';
    });
}
 