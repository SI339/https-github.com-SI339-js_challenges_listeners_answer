// Challenge 4: show an error message for each empty field
document.querySelector("#challenge4_form").addEventListener("submit", function (e) {
    console.log("here");

    const nameField = document.querySelector("#name").value.trim();
    const addrField = document.querySelector("#addr").value.trim();
    const nameError = document.querySelector("#nameError");
    const addrError = document.querySelector("#addrError");

    if (nameField.length == 0) {
        nameError.classList.remove("errormsg");
    } else {
        nameError.classList.add("errormsg");
    }

    if (addrField.length == 0) {
        addrError.classList.remove("errormsg");
    } else {
        addrError.classList.add("errormsg");
    }

    // return false does not stop submission with addEventListener, so use preventDefault
    if (nameField.length == 0 || addrField.length == 0) {
        e.preventDefault();
    }
});
