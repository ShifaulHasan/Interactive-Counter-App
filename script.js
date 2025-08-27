
let count = 0;
const countValue = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");


decreaseBtn.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

increaseBtn.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});
