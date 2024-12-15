let data = [
  {
    Q: "Q: What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    ans: "ans3",
  },
  {
    Q: "Q: Which programming language is known as the backbone of web development?",
    a: "Python",
    b: "JavaScript",
    c: "Ruby",
    d: "C++",
    ans: "ans2",
  },
  {
    Q: "Q: What is the largest planet in our solar system?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    ans: "ans3",
  },
  {
    Q: "Q: What is the boiling point of water in Celsius?",
    a: "90°C",
    b: "80°C",
    c: "100°C",
    d: "120°C",
    ans: "ans3",
  },
];

let question = document.getElementById("qns");
let option1 = document.querySelector(".opt1");
let option2 = document.querySelector(".opt2");
let option3 = document.querySelector(".opt3");
let option4 = document.querySelector(".opt4");

let answers = document.querySelectorAll(".options");
let myScore = document.querySelector(".score");
let score = 0;
let num = 0;
let nextBtn = document.querySelector(".next");

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

  if (checkedAns === data[num].ans) {
    score++;
  }
  disSelect();
  num++;
  if (num < data.length) {
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
  } else {
    myScore.innerHTML = `You Scored ${score}/${data.length} <br/> <br/>
        <button onclick="location.reload()">Play Again</button>`;
    nextBtn.style.display = "none";

    document.querySelector(".btn").style.backgroundColor = "lightblue";
  }
}
