'use strict';

var NUMBER_OF_WIZARDS = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
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
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var coatInput = setup.querySelector('input[name="coat-color"]');
var eyesInput = setup.querySelector('input[name="eyes-color"]');
var fireballInput = setup.querySelector('input[name="fireball-color"]');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupIcon = document.querySelector('.setup-open-icon');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = setup.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');

var getRandomNumber = function (max) {
  return Math.floor(max * Math.random());
};
// выбирает случайное число от 0 до max

var getRandomMinMax = function (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
// находит случайное целое число в промежутке от min до max


var createWizard = function () {
  return {
    name: names[getRandomNumber(names.length)] + ' ' + surnames[getRandomNumber(surnames.length)],
    coatColor: coatColors[getRandomNumber(coatColors.length)],
    eyesColor: eyesColors[getRandomNumber(eyesColors.length)]
  };
};

// wizardForm.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var wizards = [];
for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizards[i] = createWizard();
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

var getRandomArrayElement = function (arr) {
  return arr[getRandomMinMax(0, arr.length - 1)];
};
// выбирает случайный элемент из массива

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    setup.classList.add('hidden');
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onEscPress);
};

// var changeCoatColor = function () {
//
// };

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    event.stopPropagation();
  }
});

wizardCoat.addEventListener('click', function () {
  var color = getRandomArrayElement(coatColors);
  wizardCoat.style = 'fill: ' + color;
  coatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var color = getRandomArrayElement(eyesColors);
  wizardEyes.style = 'fill: ' + color;
  eyesInput.value = color;
});

wizardFireball.addEventListener('click', function () {
  var color = getRandomArrayElement(fireballColors);
  wizardFireball.style = 'background-color: ' + color;
  fireballInput.value = color;
});
