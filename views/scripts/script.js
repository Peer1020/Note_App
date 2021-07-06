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
    var mainContainer = document.getElementById("tabtwo2");
    // all buttons for sort
    var btnFinishDate = document.getElementById("byFinish");
    var btnCreateDate = document.getElementById("byCreation");
    var btnImportance = document.getElementById("byImportance");
    let request = fetch('http://localhost:3000/notes')
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            for(let i = 0; i < data.length; i++){
                var div = document.createElement("div");
                div.setAttribute("id", "note")
                div.innerHTML += "<p>" + data[i].due_temp +"</p><p class='note-title'>"+data[i].title + "</p><p></p><div><label for='finished'>Finished</label><input type='checkbox' id='check' name='checkbox'></div>" + "<p class='note-content'>" +data[i].content + "</p><button id='edit'>Edit</button><br><br>";
                document.getElementById("notes").appendChild(div);
            }

            //div.innerHTML = 'Content ' + data[0].content;
            
        });
}


// Modal not in use at the moment

document.getElementById("edit").addEventListener('click', openModal);
function openModal(){
    let request = fetch('http://localhost:3000/notes')
    .then(function(response){
        return response.json();

    }).then(function (data){
        alert(data)

    })
    // var closeMod = document.getElementsByClassName("exit");
    // var modal = document.getElementsByClassName("modal");
    



    // closeMod.onclick = function() {
    //     modal.style.display = "none";
    // }
}


document.getElementById("check").addEventListener('click', check);
functi