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


function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}




