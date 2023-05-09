function solution(myString, pat) {
  if (myString.length < pat.length) {
    return 0;
  }

  for (let i = 0; i < myString.length - pat.length; i++) {
    const substring = myString.slice(i, i + pat.length).toLowerCase();
    console.log(substring);
    if (substring == pat.toLowerCase()) {
      return 1;
    }
  }
}

console.log(solution("AbCdEfG", "aBc"));
