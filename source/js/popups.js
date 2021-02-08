/* var */
var enter = document.querySelector(".enter");
var modal_authorization = document.querySelector(".modal-authorization");
var button_close_authorization = document.querySelector(
  ".modal-authorization > .button-close"
);
var login = modal_authorization.querySelector("[name=username]");

var map = document.querySelector(".map");
var modal_map = document.querySelector(".modal-map");
var button_close_map = document.querySelector(".modal-map > .button-close");

var cart = document.querySelector(".button-buy");
var modal_add_cart = document.querySelector(".modal-add-cart");
var button_close_cart = document.querySelector(
  ".modal-add-cart > .button-close"
);

var feedback = document.querySelector(".button-feedback");
var modal_feedback = document.querySelector(".modal-feedback");
var button_close_feedback = document.querySelector(
  ".modal-feedback > .button-close"
);
var feedfocus = modal_feedback.querySelector("[name=your_name]");

/* authorization */
enter.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_authorization.classList.add("modal-show");
  login.focus();
});

button_close_authorization.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_authorization.classList.remove("modal-show");
});

/* map */
map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.add("modal-show");
});

button_close_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_map.classList.remove("modal-show");
});

/* cart */
cart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_add_cart.classList.add("modal-show");
});

button_close_cart.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_add_cart.classList.remove("modal-show");
});

/* feedback */
feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_feedback.classList.add("modal-show");
  feedfocus.focus();
});

button_close_feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_feedback.classList.remove("modal-show");
});
