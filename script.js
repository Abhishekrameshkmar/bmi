document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100;
    var age = parseInt(document.getElementById('age').value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var bmi = weight / (height * height);

    var category = '';
    var message = '';
    if (bmi < 18.5) {
        category = 'Underweight';
        message = 'Your BMI is low. This indicates underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 39 && bmi < 30) {
        category = 'Overweight';
        message = 'Your BMI is high. This indicates overweight.';
    } else {
        category = 'Obese';
        message = 'Your BMI is high. This indicates obesity.';
    }

    document.getElementById('result').innerHTML = "Name: " + name;
    document.getElementById('result').innerHTML += "<br>Phone Number: " + phone;
    document.getElementById('result').innerHTML += "<br>Your BMI: " + bmi.toFixed(2) + " (" + category + ")";
    document.getElementById('result').innerHTML += "<br>Gender: " + gender;
    document.getElementById('result').innerHTML += "<br>Age: " + age;

    if (message) {
        var alertClass = (category === 'Normal weight') ? 'alert-info' : 'alert-danger';
        var alertHTML = '<div class="alert ' + alertClass + '">' + message + '</div>';
        document.getElementById('result').innerHTML += alertHTML;
    }
}