let data = [
  {
    Q: "Q : What was the most popular search engine in the 90's?",
    a: "Google",
    b: "Yahoo",
    c: "Bing",
    d: "Ask Jeeves",
    ans: "ans2",
  },
  {
    Q: "Q : Which animated series featured a character named Bart?",
    a: "The Flintstones",
    b: "The Simpsons",
    c: "Scooby-Doo",
    d: "DuckTales",
    ans: "ans2",
  },
  {
    Q: "Q : What was the name of the first widely popular video game console?",
    a: "PlayStation",
    b: "Sega Genesis",
    c: "Nintendo 64",
    d: "Atari 2600",
    ans: "ans2",
  },
  {
    Q: "Q : Which movie featured the quote 'I'll be back'?",
    a: "Die Hard",
    b: "Terminator",
    c: "RoboCop",
    d: "Predator",
    ans: "ans2",
  },
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {
  let ans;
  answers.forEach((curElement) => {
    if (curElement.checked) {
      ans = curElement.id;
      console.log(ans);
    }
  });
  return ans;
}

function disSelect() {
  answers.forEach((curElement) => {
    curElement.checked = false;
  });
}

function next() {
  let checkedAns = checkAns();

  if (checkedAns == data[num].ans) {
    score++;
  }
  num++;
  disSelect();

  if (num < data.length) {
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
  } else {
    myScore.innerHTML = `You Scored ${score}/${data.length} <br/><br/>
        <button onclick="location.reload()">Play Again</button>`;

    nextBtn.style.display = "none";
    document.querySelector(".btn").style.backgroundColor = "lightBlue";
  }
}
