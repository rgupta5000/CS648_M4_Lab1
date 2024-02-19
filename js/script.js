// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let employee_form = document.getElementById('addForm');
let employee_table = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
employee_form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let new_row = employee_table.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell_id = new_row.insertCell(0);
    let cell_name = new_row.insertCell(1);
    let cell_extension = new_row.insertCell(2);
    let cell_email = new_row.insertCell(3);
    let cell_department = new_row.insertCell(4);
    let cell_delete = new_row.insertCell(5);


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell_id.appendChild(document.createTextNode(id));
    cell_name.appendChild(document.createTextNode(name));
    cell_extension.appendChild(document.createTextNode(extension));
    cell_email.appendChild(document.createTextNode(email));
    cell_department.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let delete_button = document.createElement('button');
    delete_button.innerHTML = '<i class="fas fa-trash-alt"></i> X';
    delete_button.style.backgroundColor = 'red';
    delete_button.style.color = 'white';
    delete_button.style.borderRadius = '5px';
    delete_button.style.border = 'none';
    delete_button.style.padding = '3px 13px';
    delete_button.addEventListener('click', (e) => {
                    employee_table.deleteRow(e.target.parentNode.parentNode.rowIndex);
                    count--;
                    document.getElementById('empCount').innerHTML = ` ( ${count} ) `;
                })

    // APPEND THE DELETE BUTTON AS A CHILD ELEMENT OF THE NEW ROW
    cell_delete.appendChild(delete_button);
    count++;
    document.getElementById('empCount').innerHTML = ` ( ${count} ) `;

    // RESET THE FORM
    employee_form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE