var addBtn = document.getElementById("add-button");

function justchecking(addBtn) {

    if (addBtn.click) {
      console.log("fuck");
    } else {
      console.log("you");
    }

  }

addBtn.addEventListener("click", justchecking);