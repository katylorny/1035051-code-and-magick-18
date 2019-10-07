'use strict';

(function () {
  window.setup = {
    setupPopup: document.querySelector('.setup'),
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    // setupWizard: window.setup.setupPopup.querySelector('.setup-wizard'), // - это не работает!
    // setupWizard: document.querySelector('.setup').querySelector('.setup-wizard'), // это работает
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    setupOpen: document.querySelector('.setup-open'),
    setupIcon: document.querySelector('.setup-open-icon'),
  };

  window.setup.setupWizard = window.setup.setupPopup.querySelector('.setup-wizard');
  window.setup.setupClose = window.setup.setupPopup.querySelector('.setup-close');
  window.setup.setupUserName = window.setup.setupPopup.querySelector('.setup-user-name');

  // console.log(window.setup.setupPopup.querySelector('.setup-wizard')); // здесь его видно нормально

  var NUMBER_OF_WIZARDS = 4;
  var fragment = document.createDocumentFragment();
  var setupSimilar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list'); // куда вставлять волшебников
  var setupSimilarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // шаблон
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var createWizard = function () {
    return {
      name: names[window.util.getRandomNumber(names.length)] + ' ' + surnames[window.util.getRandomNumber(surnames.length)],
      coatColor: window.setup.coatColors[window.util.getRandomNumber(window.setup.coatColors.length)],
      eyesColor: window.setup.eyesColors[window.util.getRandomNumber(window.setup.eyesColors.length)]
    };
  };
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
})();
