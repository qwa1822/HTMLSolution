const startWord = () => {
  const word = document.querySelector("#word").innerText;
  const myWord = document.querySelector("#myword").value;

  const searchBtn = document.querySelector("#search");
  const result = document.getElementById("result");

  let lastWord = word[word.length - 1];
  let firstWord = myWord[0];
  if (lastWord === firstWord) {
    result.textContent = `정답입니다!`;
    word.innerText = myWord;
    myWord.value = "";
  } else {
    result.textContent = `오답입니다!`;
  }
};

searchBtn.addEventListener("click", startWord);
