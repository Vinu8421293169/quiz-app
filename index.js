window.onload = function () {
  show(0);
};

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  location.href = "quizgeneral.html";
}

let questions = [
  {
    id: 1,
    question: "what is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Ramdomely Access Memory",
      "Run Accept Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "what is the full form of CPU ?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "The chief constituent of gobar gas is",
    answer: "methane",
    options: ["ethane", "methane", "hydrogen", "ethane", "carbon dioxide"]
  },
  {
    id: 4,
    question: "Galileo was an Italian astronomer who",
    answer: "All of the above",
    options: [
      "developed the telescope",
      "discovered four satellites of Jupiter",
      "discovered that the movement of pendulum produces a regular time measurement",
      "All of the above"
    ]
  },

  {
    id: 5,
    question: "Exposure to sunlight helps a person improve his health because",
    answer: "the ultraviolet rays convert skin oil into Vitamin D",
    options: [
      "the infrared light kills bacteria in the body",
      "resistance power increases",
      "the pigment cells in the skin get stimulated and produce a healthy tan",
      "the ultraviolet rays convert skin oil into Vitamin D"
    ]
  },

  {
    id: 6,
    question: "Film and TV institute of India is located at",
    answer: "Pune (Maharashtra)",
    options: [
      "Pune (Maharashtra)",
      "Rajkot (Gujarat)",
      "Pimpri (Maharashtra)",
      "Perambur (Tamilnadu)"
    ]
  },

  {
    id: 7,
    question: "The ozone layer restricts",
    answer: "Ultraviolet radiation",
    options: [
      "Visible light",
      "Infrared radiation",
      "X-rays and gamma rays",
      "Ultraviolet radiation"
    ]
  },

  {
    id: 8,
    question: "For purifying drinking water alum is used",
    answer: "for coagulation of mud particles",
    options: [
      "for coagulation of mud particles",
      "to remove gases",
      "to kill bacteria",
      "to remove salts"
    ]
  },

  {
    id: 9,
    question: "India has largest deposits of ____ in the world.",
    answer: "mica",
    options: ["gold", "copper", "mica", "None of the above"]
  },

  {
    id: 10,
    question: "India's first satellite is named after",
    answer: "Aryabhatta",
    options: ["Aryabhatta", "Bhaskara II", "Bhaskara I", "Albert Einstein"]
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
