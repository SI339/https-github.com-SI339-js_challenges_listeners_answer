// Challenge 2: copy the billing address into the home address
document.querySelector("#sameAddress").addEventListener("click", function () {
    console.log(`Checkbox checked: ${this.checked}`);

    const bill = document.querySelector("#bill");
    const home = document.querySelector("#home");
    console.log(`Home value is ${home.value}`);
    console.log(`Billing value is ${bill.value}`);

    if (this.checked) {
        console.log("Set it");
        home.value = bill.value;
        // readOnly (not disabled) so the value is still sent when the form submits
        home.readOnly = true;
    } else {
        console.log("Unset it");
        home.value = "";
        home.readOnly = false;
    }
});
