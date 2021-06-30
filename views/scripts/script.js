document.getElementById("encode").addEventListener('click', postFunction);

function postFunction() {
    var title_temp = document.getElementById("title").value;
    var content_temp = document.getElementById("content").value;
    var importance_temp = document.getElementById("importance").value;
    var due_temp = document.getElementById("due").value;
    let response = fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title_temp, content: content_temp, importance: importance_temp, due: due_temp})

    }).then(response => {
        console.log(response)
    })
}


var importance_options = ["Blocker", "Critical", "Major", "Minor", "Trivial"];

document.getElementById("importance").addEventListener("", dropdownFunction);

function dropdownFunction() {
    var urgency=document.getElementById("importance");
    for (var x in importance_options) {
        urgency[urgency.options.length] = new Option(x, x);
    }

}




