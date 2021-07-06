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
function getFunction(sortBy="") {
    var mainContainer = document.getElementById("tabtwo2");
    // all buttons for sort
    
    let request = fetch('http://localhost:3000/notes/sortBy/'+sortBy)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            document.getElementById("notes").innerHTML="";
            for(let i = 0; i < data.length; i++){
                var div = document.createElement("div");
                div.setAttribute("id", "note")
                div.innerHTML += "<p>Due:" + data[i].due + "</p><p class='note-title'>"+data[i].title + "</p><p></p><div><label for='finished'>Finished</label><input type='checkbox' id='check' name='checkbox'></div>" + "<p class='note-content'>" +data[i].content + "</p><button id='edit' onclick='openModal(\"" + data[i]._id + "\")'>Edit</button><br><br>";
                document.getElementById("notes").appendChild(div);
            }

            
        });
}


// Modal not in use at the moment

function openModal(id){
    const openMod = document.getElementById("edit");
    const modal = document.getElementById("modal");
    const closeMod = document.getElementById("exit");
    var content_temp = document.getElementById("contentMod");


    modal.style.display = "block";

    closeMod.onclick = function(){
        modal.style.display = "none";
    }

    let response = fetch('http://localhost:3000/notes/' + id).then(response => {
        return response.json()
    }).then(function(data){
        document.getElementById("titleMod").value = data.title;
        document.getElementById("contentMod").value = data.content;
        document.getElementById("importanceMod").value = data.importance;
        document.getElementById("dueMod").value = data.due;
    })
}



    

    // closeMod.addEventListener('click', () => {
    //     modal.classList.remove('display');
    // });




// document.getElementById("check").addEventListener('click', check);
// function check(){
//     var chbox = document.getElementById("check")
//     if(chbox.checked == 1){
//         alert("checked");

//     }else{
//         alert("no check");
//     }
// }


