function validateForm() {
    var name = document.f1.name.value;
    var password = document.f1.password.value;
    var namePattern = /^[A-Za-z]{6,}$/;

    if(!namePattern.test(name)) {
        alert("Name must only contain alphabet");
        return false;
    }
    alert("Registration successful");
    return true;
}