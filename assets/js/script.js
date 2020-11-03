
// Exercice 1
// let prenom = 'Will'
// alert('Salut c\'est ' + prenom);

// Exercice 2
// let lastName = 'Diglé'
// let firstName = 'Will'
// let city = 'Compiègne'
// alert('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city);

// Exercice 3
// let name = prompt("Comment t'appelles-tu ?");
// alert("Bonjour, " + name);

// Exercice 4
function exercice4() {
    var lastName = document.getElementById('lastName').value;
    var firstName = document.getElementById('firstName').value;
    var city = document.getElementById('city').value;
    alert('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city);
}

// Exercice 5
function exercice5() {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    alert('Reste : ' + firstNumber % secondNumber);
}

// Exercice 6
function exercice6() {
    var pointure = document.getElementById('pointure').value;
    var birthDate = document.getElementById('birthDate').value;
    var resultat = (pointure*2 + 5)*50 - birthDate + 1769;
    alert(resultat);
}

// Exercice 7
function exercice7() {
    var age = document.getElementById('age').value;
    if (age >= 18) {
        alert("Vous êtes majeur");
    } else {
        alert("Vous êtes mineur");
    }
}