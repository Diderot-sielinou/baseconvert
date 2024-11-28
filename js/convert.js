let result = document.querySelector("#resultat");
let number = document.querySelector("#number");
let startconvert = document.querySelector("#startbase");
let endconvert = document.querySelector("#endbase");
document.getElementById('btn').addEventListener('click', function() {
  // Récupérer l'élément <select>
  var select = document.getElementById('startbase');
  
  // Récupérer la valeur de l'option sélectionnée
  var optionSelectionnee = parseInt(select.value);
  console.log(typeof optionSelectionnee)
  
  // Récupérer le texte de l'option sélectionnée
  var texteOptionSelectionnee = select.options[select.selectedIndex].text;

  // Afficher le résultat
  document.getElementById('resultat').innerHTML = 'Valeur sélectionnée: ' + optionSelectionnee + '<br>Texte sélectionné: ' + texteOptionSelectionnee;
});
