
// Event listener for Submit button click
document.getElementById("SubmitBtn").addEventListener("click",checktxt);

// fucnction to handle submit button click
function checktxt()
{
    // get value of input fields
let taskName = document.getElementById("txtTaskName").value;
let txtDate = document.getElementById("txtDate").value;

// alert if text boxes are empty 
// if (!taskName || !txtDate) {
//     alert("Please fill in both fields.");
//     return;
// }

//  dynamically create elements (div,textboxes,buttons)
    let taskDiv = document.createElement("div");
    let taskNameInput = document.createElement("Input");
    let taskDateTimeInput = document.createElement ("Input");
    let btnEdit = document.createElement("button");
    let btnDelete = document.createElement ("button");

 // setting value attribute of textboxes
    taskDateTimeInput.type = "datetime-local";
    taskNameInput .setAttribute("value",taskName);
    taskDateTimeInput.setAttribute("value",txtDate);
    
    // setting text of buttons
    btnEdit.innerText = "E";
    btnDelete.innerText = "D";
  
    // setting styles
    btnEdit.style.color = "green";
    btnDelete.style.color = "red";
    taskNameInput.style.width = "90px";
    taskDateTimeInput.style.width = "150px"
    
    // appening div to newbox Div
    let newBox = document.getElementById ("detDiv");
    newBox.appendChild(taskDiv);

    // appending elements to taskDiv
    taskDiv.appendChild(taskNameInput);
    taskDiv.appendChild(taskDateTimeInput);
    taskDiv.appendChild(btnEdit);
    taskDiv.appendChild(btnDelete);

    // adding edit button eventlistener
    btnEdit.addEventListener("click", ()=>{
        if(btnEdit.innerText ==="E")
           {
            taskName.readOnly = false;
            taskDateTimeInput.readOnly = false;
            taskNameInput.focus();
            //taskDateTimeInput.type = "datetime-local";
            btnEdit.innerText= "S";
        } 
        else
        {
            taskName.readOnly = true;
            taskDateTimeInput.readOnly = true;
            btnEdit.innerText= "E";
        }
    })

    // adding delete button event listener
    btnDelete.addEventListener("click", ()=>
    {
        newBox.removeChild(taskDiv);
    })

    // Clear input fields
    document.getElementById("txtTaskName").value = "";
    document.getElementById("txtDate").value = "";
}

