'use strict';

(function () {

  var NUMBER_OF_WIZARDS = 4;
  var fragment = document.createDocumentFragment();
  var setupSimilar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list'); // куда вставлять волшебников
  var setupSimilarItem = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // шаблон
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var loadedWizards = [];
  setupSimilar.classList.remove('hidden');

  var createDomElement = function (wizard) {
    var clone = setupSimilarItem.cloneNode(true);
    clone.querySelector('.setup-similar-label').textContent = wizard.name;
    clone.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    clone.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    return clone;
  };

  var render = function (data) { // рендерит похожих магов
    var number = data.length > NUMBER_OF_WIZARDS ? NUMBER_OF_WIZARDS : data.length;
    similarList.innerHTML = '';
    for (var j = 0; j < number; j++) {
      var newElement = createDomElement(data[j]);
      fragment.appendChild(newElement);
    }
    similarList.appendChild(fragment);
  };


  var updateWizards = function () {

    var massiv = loadedWizards.sort(function (left, right) {

      var rankDiff = window.colorize.getRank(right) - window.colorize.getRank(left);
      if (rankDiff === 0) {
        rankDiff = window.colorize.compareNames(left.name, right.name);
      }
      return rankDiff;
    });
    render(massiv);
  };

  var loadHandler = function (data) { // сохраняет полученные с сервера данные в разметку
    loadedWizards = data;
    // render(loadedWizards);
    updateWizards();
  };

  var saveHandler = function () {
    window.setup.setupPopup.classList.add('hidden');
  };

  var errorHandler = function (errorMessage) { // выводит сообщение об ошибке
    var node = document.createElement('div');
    node.style = 'z-index: 100; background-color: red; text-align: center; padding: 10px 100px; margin-left: 50%; transform: translateX(-50%)';
    node.style.position = 'absolute';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // ------------------- глобальное
  window.setup = {
    setupPopup: document.querySelector('.setup'),
    eyesColors: eyesColors,
    coatColors: coatColors,
    setupOpen: document.querySelector('.setup-open'),
    setupIcon: document.querySelector('.setup-open-icon'),
    updateWizards: updateWizards,
  };

  window.setup.setupWizard = window.setup.setupPopup.querySelector('.setup-wizard');
  window.setup.setupClose = window.setup.setupPopup.querySelector('.setup-close');
  window.setup.setupUserName = window.setup.setupPopup.querySelector('.setup-user-name');
  window.setup.setupForm = window.setup.setupPopup.querySelector('.setup-wizard-form');

  // ------------------

  window.backend.load(loadHandler, errorHandler);
  window.setup.setupForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(window.setup.setupForm), saveHandler, errorHandler);
    evt.preventDefault();
  });
})();
