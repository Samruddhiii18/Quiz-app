let data = [
  {
    Q: "Q : What is JavaScript primarily used for?",
    a: "Data analysis",
    b: "Developing mobile apps only",
    c: "Creating interactive web pages",
    d: "System programming",
    ans: "ans3",
  },
  {
    Q: "Q : What does DOM stand for in JavaScript?",
    a: "Document Object Model",
    b: "Data Oriented Management",
    c: "Dynamic Object Manipulation",
    d: "Document Object Management",
    ans: "ans1",
  },
  {
    Q: "Q : Which company developed JavaScript?",
    a: "Microsoft",
    b: "Netscape",
    c: "Google",
    d: "IBM",
    ans: "ans2",
  },
  {
    Q: "Q : Which of these is a JavaScript framework?",
    a: "React",
    b: "Django",
    c: "Laravel",
    d: "Flask",
    ans: "ans1",
  },
  {
    Q: "Q : What is the correct syntax for a function in JavaScript?",
    a: "def functionName()",
    b: "function functionName()",
    c: "create function functionName()",
    d: "func functionName()",
    ans: "ans2",
  },
];

let question = document.getElementById("question");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let nextBtn = document.getElementById("next");
let answer = document.querySelectorAll(".option");

let num = 0;
var score = 0;
let myScore = document.querySelector(".score");
let showScore = document.querySelector(".showScore");

question.innerText = data[num].Q;
option1.innerText = data[num].a;
option2.innerText = data[num].b;
option3.innerText = data[num].c;
option4.innerText = data[num].d;

function checkingAns() {
  let ans;
  answer.forEach((curElement) => {
    if (curElement.checked) {
      ans = curElement.id;
    }
  });
  return ans;
}

function disSelect() {
  answer.forEach((curElement) => {
    curElement.checked = false;
  });
}

function next() {
  let checkedAns = checkingAns();

  if (checkedAns == data[num].ans) {
    score++;
  }

  num++;
  disSelect();
  if (num < data.length) {
    question.innerText = data[num].Q;
    option1.innerText = data[num].a;
    option2.innerText = data[num].b;
    option3.innerText = data[num].c;
    option4.innerText = data[num].d;
  } else {
    showScore.innerHTML = `You Scored <br/> ${score}/${data.length} <br/><br/>
       <button onclick="location.reload()">Play Again </button>`;
    nextBtn.style.display = "none";
    showScore.style.backgroundColor = "aqua";
  }
}
