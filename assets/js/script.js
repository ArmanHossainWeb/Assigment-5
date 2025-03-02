// navbar section 
document.getElementById("theme-btn").addEventListener("click",
    function(){
        const randomTheme = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomTheme;
    }
)


// discover somthing
document.getElementById("DiscoverSomthing").addEventListener("click",
    function(){
        window.location.href = "../../blog.html"
        
    }
)

// date and time 
const today = new Date(); 
const dayOfWeek = today.toLocaleString('default', { weekday: 'short' }); 
const month = today.toLocaleString('default', { month: 'short' }); 
const day = today.getDate(); 
const year = today.getFullYear(); 

document.getElementById("dayOfWeek").innerText = `${dayOfWeek},`;

document.getElementById("fullDate").innerText = `${month} ${day} ${year}`;

// clear history 
document.getElementById("claer-history-btn").addEventListener("click",
    function(event){
        document.getElementById("activity-container").innerHTML =" ";
    }
)


// task-1 section 
document.getElementById("task-1").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-1").disabled = true;
        append("task-heading-1")
        
    }
)
// task-2 section 
document.getElementById("task-2").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-2").disabled = true;
        append("task-heading-2")
        
    }
)
// task-3 section 
document.getElementById("task-3").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-3").disabled = true;
        append("task-heading-3")
        
    }
)
// task-4 section 
document.getElementById("task-4").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-4").disabled = true;
        append("task-heading-4")
        
    }
)
// task-5 section 
document.getElementById("task-5").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-5").disabled = true;
        append("task-heading-5")
        
    }
)
// task-6 section 
document.getElementById("task-6").addEventListener("click",
    function(event){
        event.preventDefault();

        alert("Board updated successfully");
        parse_floatand_task("task-assigned")
        parse_floatand_task_plus("CheckedTask")
        document.getElementById("task-btn-6").disabled = true;
        append("task-heading-6")
        
    }
)

