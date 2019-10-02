'use strict';

(function () {
  window.setupE = {
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    setupWizard: window.util.setup.querySelector('.setup-wizard'),
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    setupOpen: document.querySelector('.setup-open'),
    setupClose: window.util.setup.querySelector('.setup-close'),
    setupIcon: document.querySelector('.setup-open-icon'),
    setupUserName: window.util.setup.querySelector('.setup-user-name'),
  };

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
      coatColor: window.setupE.coatColors[window.util.getRandomNumber(window.setupE.coatColors.length)],
      eyesColor: window.setupE.eyesColors[window.util.getRandomNumber(window.setupE.eyesColors.length)]
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
