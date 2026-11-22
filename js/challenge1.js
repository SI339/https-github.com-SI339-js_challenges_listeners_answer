// Challenge 1: show or hide the email field when the checkbox is toggled
document.querySelector("#subscribe").addEventListener("click", function () {
    console.log(`Checkbox checked: ${this.checked}`);

    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
});
