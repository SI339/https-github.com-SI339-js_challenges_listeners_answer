// Challenge 3: make sure one radio button in each group is selected
document.querySelector("#ch3form").addEventListener("submit", function (e) {
    // :checked returns the selected radio button, or null if none is selected
    const date = document.querySelector('input[name="gradDate"]:checked');
    const standing = document.querySelector('input[name="standing"]:checked');

    console.log("Good job clicking the button");
    console.log("Grad date is", date);
    console.log("Standing is", standing);

    if (date == null || standing == null) {
        alert("You must select a choice from each set of radio buttons");
        e.preventDefault();
    }
});
