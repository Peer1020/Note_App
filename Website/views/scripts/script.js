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
  var finished_temp = document.getElementById("finishedMod").checked;
  console.log(finished_temp)

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
      finished: finished_temp,
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
        var actDate = new Date(data[i].due)
        var due_date = actDate.getUTCDate() + "." + actDate.getUTCMonth() + "." + actDate.getUTCFullYear();
        var finishedDate = new Date(data[i].updatedAt)
        finishedDate = finishedDate.getUTCDate() + "." + finishedDate.getUTCMonth() + "." + finishedDate.getUTCFullYear();
        console.log(data[i].finished)
        if (checked.checked === true && data[i].finished === true) {
          continue;
        }
        var div = document.createElement("div");
        div.setAttribute("id", "note");
        div.innerHTML +=
          "<p>Due: " +
          due_date +
          "</p><p class='note-title'>" +
          data[i].title +
          "</p><img src='./images/" + data[i].importance + ".png'/><div> "+
          (data[i].finished === true ? "<label for='finished' id='finished'>Finished</label><p>" +finishedDate : "<strong>TBD</strong>") +
          "</p></div>" +
          "<p class='note-content'>" +
          data[i].content +
          "</p><button id='edit' onclick='openModal(\"" +
          data[i]._id +
          "\")'>Edit</button><br><br>";
        document.getElementById("notes").appendChild(div);
      }
    });
}


function openModal(id) {
  const modal = document.getElementById("modal");
  const closeMod = document.getElementById("exit");
  const saveMod = document.getElementById("save");


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
      var checkDate = new Date(data.due);
        var date = checkDate.getFullYear()  + "-" + checkDate.getMonth() + "-" + checkDate.getDate();

        if(checkDate.getDate() < 10 && checkDate.getMonth() < 10){
          date = checkDate.getFullYear()  + "-0" + checkDate.getMonth() + "-0" + checkDate.getDate();
       }
       else if (checkDate.getMonth() < 10){
            date = checkDate.getFullYear()  + "-0" + checkDate.getMonth() + "-" + checkDate.getDate();

        }

        else if (checkDate.getDate() < 10){
            date = checkDate.getFullYear()  + "-" + checkDate.getMonth() + "-0" + checkDate.getDate();
        }
      document.getElementById("idMod").value = data._id;
      document.getElementById("titleMod").value = data.title;
      document.getElementById("contentMod").value = data.content;
      document.getElementById("importanceMod").value = data.importance;
      document.getElementById("dueMod").value = date;
      document.getElementById("finishedMod").checked = data.finished;
    });
}
document.getElementById("theme").addEventListener('click', switchMode)
function switchMode() {
  var site = document.body;
  site.classList.toggle("darkMode");
  
}
