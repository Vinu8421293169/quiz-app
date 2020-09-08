sessionStorage.setItem("point", 0); //update
window.onload = function () {
  show(0);
};

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  location.href = "quizsports.html";
}

let questions = [
  {
    id: 1,
    question: "How many teams are participating in the ICC World Cup 2019?",
    answer: "10",
    options: ["8", "9", "10", "12"]
  },

  {
    id: 2,
    question: "Which cricket team has won most ICC Cricket World Cup titles? ",
    answer: "Australia",
    options: ["West Indies", "India", "England", "Australia"]
  },
  {
    id: 3,
    question:
      "Which of the following country did not won the ICC Cricket World Cup (50 over format) title so far?",
    answer: "All of the above",
    options: ["England", "South Africa", "New Zealand", "All of the above"]
  },
  {
    id: 4,
    question:
      " Which of the following Indian player have got first “Man of the Tournament” Award in the ICC Cricket World Cup?",
    answer: "Sachin Tendulkar",
    options: [
      "Sachin Tendulkar",
      "Yuvraj Singh",
      "Mohinder Amarnath",
      "M.S. Dhoni"
    ]
  },

  {
    id: 5,
    question: "When was first ICC cricket World Cup started?",
    answer: "1975",
    options: ["1972", "1975", "1985", "1979"]
  },

  {
    id: 6,
    question:
      "Which of the following statement is NOT correct about the ICC cricket World Cup?",
    answer:
      "The “Man of the Match” award in the ICC cricket World Cup was started in the 1992.",
    options: [
      "It is played after the gap of every 4 years.",

      "The “Man of the Match” award in the ICC cricket World Cup was started in the 1992.",

      "Pakistan and Sri Lanka are the other two countries that have won the World Cup in 1992 and 1996 respectively.",

      "England is the only country which lost 2 ICC World Cup finals."
    ]
  },

  {
    id: 7,
    question: "Who is the youngest player in the ICC Cricket World Cup 2019?",
    answer: "Mujeeb ur Rahman",
    options: [
      "Jonny 'Blaze' Bairstow",
      "Yuzvendra chahal",
      "Mujeeb ur Rahman",
      "Kagiso Rabada"
    ]
  },

  {
    id: 8,
    question:
      "Which Indian cricketer had won the “Man of the Match” award in the final of the ICC World Cup 1983?",
    answer: "Mohinder Amarnath",
    options: [
      "Kapil Dev",
      "Sunil Gavaskar",
      "Ravi Shastri",
      "Mohinder Amarnath"
    ]
  },

  {
    id: 9,
    question:
      "Who was the captain of the Indian cricket team in the ICC World Cup 1983?",
    answer: "Kapil Dev",
    options: ["Sunil Gavaskar", "Kirti Azad", "Kapil Dev", "None of these"]
  },

  {
    id: 10,
    question:
      "Which of the following country has hosted the ICC World Cup most times?",
    answer: "England",
    options: ["England", "India", "Australia", "West Indies"]
  }
];

let point = 0;
let question_count = 0;
function next() {
  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer === questions[question_count].answer) {
    point += 10;
    sessionStorage.setItem("point", point);
  }

  if (question_count == questions.length - 1) {
    location.href = "final.html";
    return;
  }
  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");

  question.innerHTML = `<h2>Q${question_count + 1} ${
    questions[count].question
  }</h2>
  <ul class="option_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul>`;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

let id = setInterval(() => {
  show(question_count);
  if (question_count == questions.length - 1) {
    location.href = "final.html";
    clearInterval(id);
    return;
  }
  question_count++;
}, 10000);
