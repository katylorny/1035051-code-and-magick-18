'use strict';

var NUMBER_OF_WIZARDS = 4;
var wizardForm = document.querySelector('.setup');
var fragment = document.createDocumentFragment();
var setupSimilar = document.querySelector('.setup-similar');

// куда вставлять волшебников
var similarList = document.querySelector('.setup-similar-list');

// шаблон
var setupSimilarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomNumber = function (max) {
  return Math.floor(max * Math.random());
};
// выбирает случайное число от 0 до max

var createWizard = function (namesArr, surnamesArr, coatColorsArr, eyesColorsArr) {
  return {
    name: namesArr[getRandomNumber(namesArr.length)] + ' ' + surnamesArr[getRandomNumber(surnamesArr.length)],
    coatColor: coatColorsArr[getRandomNumber(coatColorsArr.length)],
    eyesColor: eyesColorsArr[getRandomNumber(eyesColorsArr.length)]
  };
};

wizardForm.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var wizards = [];
for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizards[i] = createWizard(names, surnames, coatColors, eyesColors);
}

var createDomElement = function (wizard) {
  var clone = setupSimilarItem.cloneNode(true);
  clone.querySelector('.setup-similar-label').textContent = wizard.name;
  clone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  clone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return clone;
};

for (var j = 0; j < NUMBER_OF_WIZARDS; j++) {
  var newElement = createDomElement(wizards[j]);
  fragment.appendChild(newElement);
}

similarList.appendChild(fragment);
