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


document.getElementById("tabtwo").addEventListener('click', getFunction);
function getFunction() {
    var mainContainer=document.getElementById("tabtwo2");
    let request=  fetch('http://localhost:3000/notes')
        .then(res => res.json());
    console.log(request);
    var request1=JSON.parse(request)
    var div=document.createElement("div");
    div.innerHTML='Content '+ request1[0].content;
    mainContainer.appendChild(div);
}