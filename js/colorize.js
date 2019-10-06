'use strict';

(function () {
  var wizardCoat = window.setup.setupWizard.querySelector('.wizard-coat');
  var coatInput = window.setup.setupPopup.querySelector('input[name="coat-color"]');
  var wizardEyes = window.setup.setupWizard.querySelector('.wizard-eyes');
  var eyesInput = window.setup.setupPopup.querySelector('input[name="eyes-color"]');
  var wizardFireball = window.setup.setupPopup.querySelector('.setup-fireball-wrap');
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fireballInput = window.setup.setupPopup.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(window.setup.coatColors);
    wizardCoat.style = 'fill: ' + color;
    coatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(window.setup.eyesColors);
    wizardEyes.style = 'fill: ' + color;
    eyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var color = window.util.getRandomArrayElement(fireballColors);
    wizardFireball.style = 'background-color: ' + color;
    fireballInput.value = color;
  });


})();
