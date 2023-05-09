function solution(myString) {
  return [...myString]
    .map(item => (["a", "A"].includes(item) ? "A" : item.toLowerCase()))
    .join("");
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));
