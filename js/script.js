function addTask() {
    var new_task = document.getElementById("new_task").value;
    var new_description = document.getElementById("new_description").value;
    var new_time = document.getElementById("new_time").value;
    var new_priority = document.getElementById("new_priority").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='task_row" + table_len + "'>" + new_task + "</td><td id='description_row" + table_len + "'>" + new_description + "</td><td id='time_row" + table_len + "'>" + new_time + "</td><td id='priority_row" + table_len + "'>" + new_priority + "</td><td><a id='edit_button" + table_len + "' class='button button_edit' onclick='editTask(" + table_len + ")'><i class='glyphicon glyphicon-pencil'></i></a><a id='delete_button" + table_len + "' class='button button_delete' onclick='deleteTask(" + table_len + ")'><i class='glyphicon glyphicon-trash'></i></a><a id='save_button" + table_len + "' class='button button_save' onclick='saveTask(" + table_len + ")'><i class='glyphicon glyphicon-save'></i></a></td></tr>";

    document.getElementById("new_task").value = "";
    document.getElementById("new_description").value = "";
    document.getElementById("new_time").value = "Choose time estimated";
    document.getElementById("new_priority").value = "Choose priority";

    document.getElementById('add_item').style.opacity = 0;
    document.getElementById('add_item').style.pointerEvents = 'none';
}

function editTask(id) {
    document.getElementById("edit_button" + id).style.display = "none";
    document.getElementById("delete_button" + id).style.display = "none";
    document.getElementById("save_button" + id).style.display = "block";

    var task = document.getElementById("task_row" + id);
    var description = document.getElementById("description_row" + id);
    var time = document.getElementById("time_row" + id);
    var priority = document.getElementById("priority_row" + id);
    
    var task_data = task.innerHTML;
    var description_data = description.innerHTML;
    var time_data = time.innerHTML;
    var priority_data = priority.innerHTML;
    
    task.innerHTML = "<input type='text' id='task_text" + id + "' value='" + task_data + "'>";
    description.innerHTML = "<input type='text' id='description_text" + id + "' value='" + description_data + "'>";
    time.innerHTML = "<select id='time_text" + id + "'><option disabled selected>Choose time estimated</option><option value='1 day'>1 day</option><option value='2 days'>2 days</option><option value='3 days'>3 days</option><option value='4 days'>4 days</option><option value='5 days'>5 days</option><option value='6 days'>6 days</option><option value='1 week'>1 week</option><option value='2 - 3 weeks'>2 - 3 weeks</option><option value='1 - 6 months'>1 - 6 months</option><option value='6 - 11 months'>6 - 11 months</option><option value='1 year'>1 year</option>';";
    priority.innerHTML = "<select id='priority_text" + id + "'><option disabled>Select Priority</option><option value='Low'>Low</option><option value='Medium'>Medium</option><option value='High'>High</option></select>";

    document.getElementById("time_text" + id).value = time_data;
    document.getElementById("priority_text" + id).value = priority_data;
}

function deleteTask(id) {
    document.getElementById("row" + id + "").outerHTML = "";
}

function saveTask(id) {
    var task_val = document.getElementById("task_text" + id).value;
    var description_val = document.getElementById("description_text" + id).value;
    var time_val = document.getElementById("time_text" + id).value;
    var priority_val = document.getElementById("priority_text" + id).value;

    document.getElementById("task_row" + id).innerHTML = task_val;
    document.getElementById("description_row" + id).innerHTML = description_val;
    document.getElementById("time_row" + id).innerHTML = time_val;
    document.getElementById("priority_row" + id).innerHTML = priority_val;

    document.getElementById("edit_button" + id).style.display = "block";
    document.getElementById("delete_button" + id).style.display = "block";
    document.getElementById("save_button" + id).style.display = "none";
}

function validateInput() {
    
    var inputTask = document.getElementById("new_task").value;
    var inputDescription = document.getElementById("new_description").value;
    var inputTime = document.getElementById("new_time").value;
    var inputPriority = document.getElementById("new_priority").value;
    
    if (inputTask !== '' && inputDescription !== '' && inputTime !== 'Choose time estimated' && inputPriority !== 'Choose priority') {
        document.getElementById('add_item').style.opacity = 1; 
        document.getElementById('add_item').style.pointerEvents = 'auto'; 
    } else { 
        document.getElementById('add_item').style.opacity = 0; 
    }
}