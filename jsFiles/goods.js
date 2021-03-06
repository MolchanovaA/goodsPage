class Counter {
  constructor(counter) {
    this._counter = counter;
    counter.toStart = this.toDetermineTarget();
  }

  toDetermineTarget() {
    let counterScore = parseInt(localStorage.getItem("score"));
    document.querySelector(".score").innerText = counterScore || 0;

    this._counter.addEventListener("click", ({ target }) => {
      if (target.classList.contains("increase")) {
        function incr() {
          counterScore++;
        }
        incr();
      } else if (target.classList.contains("decrease")) {
        function decr() {
          if (counterScore === 0 || isNaN(counterScore)) {
            return (counterScore = 0);
          }
          counterScore--;
        }
        decr();
      } else if (target.classList.contains("clear")) {
        counterScore = 0;
      } else if (target.classList.contains("setNewValue")) {
        do {
          var newValue = +prompt("set new value", "");
        } while (isNaN(newValue));
        counterScore = newValue || counterScore;
      }

      this.setScore(counterScore);
    });
  }
  setScore(e) {
    let scoreElement = document.querySelector(".score");
    localStorage.setItem("score", e);
    scoreElement.innerText = localStorage.getItem("score");
    scoreElement.classList.add("getBigger");
    setTimeout(() => {
      scoreElement.classList.remove("getBigger");
    }, 1000);
  }
}

new Counter(counterContainer);
