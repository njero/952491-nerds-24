var openForm = document.querySelector(".open-form");
var write = document.querySelector(".letter-form");
var closeForm = document.querySelector(".form-close");

var form = document.querySelector(".contact-us-form");

var userName = document.querySelector("[name=name]");
var userEmail = document.querySelector("[name=email]");
var letterText = document.querySelector("[name=form-text]");

openForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  write.classList.add('form-show');
  userName.focus();
});

closeForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  write.classList.remove('form-show');
  write.classList.remove("modal-error");

});
form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !letterText.value) {
    evt.preventDefault();
    write.classList.remove("form-error");
    write.offsetWidth = write.offsetWidth;
    write.classList.add("form-error");
    userName.value ? userName.classList.remove('input-error') : userName.classList.add('input-error');
    userEmail.value ? userEmail.classList.remove('input-error') : userEmail.classList.add('input-error');
    letterText.value ? letterText.classList.remove('input-error') : letterText.classList.add('input-error');
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (write.classList.contains("form-show")) {
      write.classList.remove("form-show");
      write.classList.remove("form-error");

    }
  }
});
