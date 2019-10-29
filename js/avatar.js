'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var avatar = document.querySelector('.setup-user-pic');
  var fileChooser = document.querySelector('.upload input[type=file]');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var isPicture = FILE_TYPES.some(function (element) {
      return fileName.endsWith(element);
    });

    if (isPicture) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        avatar.src = reader.result;
      });
      reader.readAsDataURL(file);
    }
  });
})();
