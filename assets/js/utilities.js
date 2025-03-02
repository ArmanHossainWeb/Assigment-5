
function btn_disable(id){
    document.getElementById(id).disabled = true;
}


function parse_floatand_task(Id) {
    const value = document.getElementById(Id).innerText;
    let task = parseFloat(value);
    const finalvalue= task-1;
    document.getElementById(Id).innerText= finalvalue;
    
    if (Id === "task-assigned" && finalvalue === 0) {
        alert("All tasks are completed! Great job!");
    }
    return finalvalue;
}
function parse_floatand_task_plus(id) {
    const taskChecked = document.getElementById(id).innerText
    const newtask = parseInt(taskChecked) + 1;
    document.getElementById(id).innerText = newtask
    return newtask;

}

function append(id){
    const taskHeading = document.getElementById(id).innerText;
    const time = new Date().toLocaleTimeString()
    const conteiner = document.getElementById("activity-container")
    const div = document.createElement("div");
    div.classList.add("bg-slate-200", "mt-5", "rounded-lg", "m-2")
    div.innerHTML =`
    <p class="p-2">You have Complete The Task ${taskHeading} at ${time}</p>
    `
    return conteiner.appendChild(div)

}
