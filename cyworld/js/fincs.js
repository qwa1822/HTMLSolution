const clickedFocus = () => {
  const phoneOne = document.getElementById("phone_one").value;
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");
  console.log(phoneOne);
  const phoneTwo = document.getElementById("phone_two").value;
  const phoneThree = document.getElementById("phone_three").value;

  if (phoneOne.length === 3) {
    document.getElementById("phone_two").focus();
  }
  if (phoneTwo.length === 4) {
    document.getElementById("phone_three").focus();
  }

  if (phoneThree.length === 4) {
    btn1.disabled = false;
    btn2.disabled = false;
  }
};

const clickedChange = () => {
  const authen__1 = document.querySelector(".authen__1");
  const authen__2 = document.querySelector(".authen__2");

  let time = 180;
  let minute = 0;
  let second = 0;
  setInterval(() => {
    minute = Math.floor(time / 60);
    second = String(time % 60).padStart(2, "00");
    time = time - 1;

    authen__2.textContent = `${minute} : ${second}`;

    if (time < 0) {
      return;
    }
  }, 1000);
};
