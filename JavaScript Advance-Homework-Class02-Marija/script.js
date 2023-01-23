let titleElem = document.getElementById("title");
let priorityElem = document.getElementById("priority");
let colorElem = document.getElementById("color");
let description = document.getElementById("description");
let createReminderBtn = document.getElementById("createRemainderButton");
let showReminderBtn = document.getElementById("showRemainderButton");
let result = document.getElementById("result");
let reminders = [];





function Reminder(inputTitle, inputPriority, inputColor, inputDescription){
    this.title = inputTitle;
    this.priority = inputPriority;
    this.color = inputColor;
    this.description = inputDescription;
}

createReminderBtn.addEventListener("click", () => {
    if (!titleElem.value && !priorityElem.value && !colorElem.value && !description.value) {
      alert("Please fill the fields!!!");
    } else {
        reminders.push(new Reminder(titleElem.value, priorityElem.value, colorElem.value, description.value));
        titleElem.value = "";
        priorityElem.value = "";
        colorElem.value = "";
        description.value = "";
    }
});

let myTable = "tableReminder";
let table = document.createElement("table");
table.id = myTable;
document.body.appendChild(table); 

showReminderBtn.addEventListener("click", () => {
    if (!reminders.length) {
      alert("The table is empty!!!");
      return;
    }
    table.innerHTML = "";
    let headerRow = document.createElement("tr");
    let headerTitle = document.createElement("th");
    headerTitle.innerHTML = "Title";
    let headerPriority = document.createElement("th");
    headerPriority.innerHTML = "Priority";
    let headerDescription = document.createElement("th");
    headerDescription.innerHTML = "Description";
    headerRow.appendChild(headerTitle);
    headerRow.appendChild(headerPriority);
    headerRow.appendChild(headerDescription);
    table.appendChild(headerRow);
    for (const reminder of reminders) {
        let row = document.createElement("tr");
        let title = document.createElement("td");
        title.innerHTML = reminder.title;
        let priority = document.createElement("td");
        priority.innerHTML = reminder.priority;
        let description = document.createElement("td");
        description.innerHTML = reminder.description;
        title.style.color = reminder.color;
        row.appendChild(title);
        row.appendChild(priority);
        row.appendChild(description);
        table.appendChild(row);
    }
});



