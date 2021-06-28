const notes = require('../controllers/note.controllers.js');

app.post('/notes', notes.create);







button.addEventListener('click', async _ => {
    try {
        function addComment() {
            var xhttp = new XMLHttpRequest();
            var commentJson = '{"body" : "adding comment to the task from client side javascript code"}';

            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    document.getElementById("demo").innerHTML = xhttp.responseText;
                }
            };

            xhttp.open("POST", "URL", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(commentJson);
        }}})
