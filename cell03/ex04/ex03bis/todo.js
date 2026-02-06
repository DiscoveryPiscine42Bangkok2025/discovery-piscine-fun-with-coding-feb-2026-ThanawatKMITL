$(document).ready(function() {
    
    // --- COOKIE FUNCTIONS (Standard JS) ---
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function saveList() {
        var todos = [];
        // jQuery Loop: iterate over each div inside #ft_list
        $('#ft_list div').each(function() {
            todos.push($(this).text());
        });
        setCookie('ft_list', JSON.stringify(todos), 7);
    }

    // --- CORE LOGIC ---
    
    function addTask(text) {
        // Create the div using jQuery
        var $div = $('<div>').text(text);

        // Add Click Event (Delete)
        $div.click(function() {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove(); // jQuery remove() is super simple
                saveList();
            }
        });

        // Add to top of list (prepend)
        $('#ft_list').prepend($div);
    }

    // Event: Click "New" Button
    $('#newBtn').click(function() {
        var task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTask(task);
            saveList();
        }
    });

    // --- INITIALIZATION ---
    var cookie = getCookie('ft_list');
    if (cookie) {
        var todos = JSON.parse(cookie);
        // Load in reverse order so they appear correctly
        for (var i = todos.length - 1; i >= 0; i--) {
            addTask(todos[i]);
        }
    }
});