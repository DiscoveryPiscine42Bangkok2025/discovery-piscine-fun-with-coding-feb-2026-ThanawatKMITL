var ft_list = document.getElementById('ft_list');

// --- 1. COOKIE HELPERS ---
// Function to get the cookie value
function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

// Function to save the list to a cookie
function saveList() {
    var todos = [];
    var items = ft_list.children;
    // Loop through all tasks and save their text
    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].innerHTML);
    }
    // Convert array to string and save (expires in 7 days)
    var jsonStr = JSON.stringify(todos);
    document.cookie = "ft_list=" + encodeURIComponent(jsonStr) + "; path=/; max-age=604800";
}

// --- 2. CORE FUNCTIONS ---

// Add a new task to the DOM
function addTaskToDom(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    
    // Add click event to remove it
    div.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            this.remove();
            saveList(); // Update cookie after delete
        }
    };

    // Insert at the top of the list
    ft_list.insertBefore(div, ft_list.firstChild);
}

// The main function called by the "New" button
function newTask() {
    var task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTaskToDom(task);
        saveList(); // Update cookie after add
    }
}

// --- 3. INITIALIZATION ---
// When page loads, check for cookies
window.onload = function() {
    var cookie = getCookie('ft_list');
    if (cookie) {
        var todos = JSON.parse(decodeURIComponent(cookie));
        // We loop backwards because addTaskToDom adds to the top
        for (var i = todos.length - 1; i >= 0; i--) {
            addTaskToDom(todos[i]);
        }
    }
};