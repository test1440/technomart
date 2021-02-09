var enter = document.querySelector(".enter");
if (enter != null) {
  var modal_authorization = document.querySelector(".modal-authorization");
  var button_close_authorization = document.querySelector(
    ".modal-authorization > .button-close"
  );

  popup(enter, modal_authorization, button_close_authorization);
}

var map = document.querySelector(".map");
if (map != null) {
  var modal_map = document.querySelector(".modal-map");
  var button_close_map = document.querySelector(".modal-map > .button-close");
  popup(map, modal_map, button_close_map);
}

var cart = document.querySelectorAll(".button-buy");
if (cart != null) {
  var modal_add_cart = document.querySelector(".modal-add-cart");
  var button_close_cart = document.querySelector(
    ".modal-add-cart > .button-close"
  );
  cart.forEach((element) => popup(element, modal_add_cart, button_close_cart));
}

var feedback = document.querySelector(".button-feedback");
if (feedback != null) {
  var modal_feedback = document.querySelector(".modal-feedback");
  var button_close_feedback = document.querySelector(
    ".modal-feedback > .button-close"
  );
  popup(feedback, modal_feedback, button_close_feedback);
}

function popup(open, modal, close) {
  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    var form = modal.getElementsByTagName("form")[0];
    if (form) {
      var firstInput = form.getElementsByTagName("input")[0];
      firstInput.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
  });
}
