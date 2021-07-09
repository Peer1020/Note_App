document.getElementById("encode").addEventListener("click", postFunction);

function postFunction() {
  var title_temp = document.getElementById("title").value;
  var content_temp = document.getElementById("content").value;
  var importance_temp = document.getElementById("importance").value;
  var due_temp = document.getElementById("due").value;
  let response = fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title_temp,
      content: content_temp,
      importance: importance_temp,
      due: due_temp,
      checked: true,
    }),
  }).then((response) => {
    console.log(response);
  });
}
function updateFunction() {
  var title_temp = document.getElementById("titleMod").value;
  var content_temp = document.getElementById("contentMod").value;
  var importance_temp = document.getElementById("importanceMod").value;
  var due_temp = document.getElementById("dueMod").value;
  var id_temp = document.getElementById("idMod").value;
  let response = fetch("http://localhost:3000/notes/" + id_temp, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title_temp,
      content: content_temp,
      importance: importance_temp,
      due: due_temp,
    }),
  }).then((response) => {
    modal.style.display = "none";
    getFunction();
  });
}

document.getElementById("tabtwo").addEventListener("click", getFunction);
function getFunction(sortBy = "_id") {
  var mainContainer = document.getElementById("tabtwo2");
  var checked = document.getElementById("done");
  function isChecked(data) {
    return data._id != true;
  }
  let request = fetch("http://localhost:3000/notes/sortBy/" + sortBy)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("notes").innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        console.log(checked.checked);
        if (checked.checked === false && data[i].checked === true) {
          continue;
        }
        var div = document.createElement("div");
        div.setAttribute("id", "note");
        div.innerHTML +=
          "<p>Due:" +
          data[i].due +
          "</p><p class='note-title'>" +
          data[i].title +
          "</p><p></p><div><label for='finished'>Finished</label><input type='checkbox' id='check' name='checkbox'" +
          (data[i].checked === true ? "checked" : "") +
          "></div>" +
          "<p class='note-content'>" +
          data[i].content +
          "</p><button id='edit' onclick='openModal(\"" +
          data[i]._id +
          "\")'>Edit</button><br><br>";
        document.getElementById("notes").appendChild(div);
      }
    });
}

// Modal not in use at the moment

function openModal(id) {
  const openMod = document.getElementById("edit");
  const modal = document.getElementById("modal");
  const closeMod = document.getElementById("exit");
  const saveMod = document.getElementById("save");
  var content_temp = document.getElementById("contentMod");

  modal.style.display = "block";

  closeMod.onclick = function () {
    modal.style.display = "none";
  };
  saveMod.onclick = function () {
    updateFunction();
  };

  let response = fetch("http://localhost:3000/notes/" + id)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("idMod").value = data._id;
      document.getElementById("titleMod").value = data.title;
      document.getElementById("contentMod").value = data.content;
      document.getElementById("importanceMod").value = data.importance;
      document.getElementById("dueMod").value = data.due;
    });
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
