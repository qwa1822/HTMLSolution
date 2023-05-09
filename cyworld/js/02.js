const checkValuedation = function () {
  let email = document.getElementById("email").value;
  let pw1 = document.getElementById("pw1").value;
  let pw2 = document.getElementById("pw2").value;

  if (email && pw1 && pw2) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
};

const changeFocus = () => {
  let id1 = document.getElementById("check1").value;

  if (id1.length === 3) {
    document.getElementById("check2").focus();
  }
};

const changeFocus2 = () => {
  let id2 = document.getElementById("check2").value;

  if (id2.length === 4) {
    document.getElementById("check3").focus();
  }
};
