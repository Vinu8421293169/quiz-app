window.onload = function () {
  show(0);
};

function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcome_form"]["name"].value;
  sessionStorage.setItem("name", name);
  location.href = "quizmovie.html";
}

let questions = [
  {
    id: 1,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood1.jpg?w=670&h=900"/>',
    answer: "Good News",
    options: ["Tashan", "Good News", "Heroine", "None of these"]
  },
  {
    id: 2,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood2.jpg?w=670&h=900"/>',
    answer: "Satte pe satta",
    options: ["Satte pe satta", "Adalat", "Mahaan", "None of these"]
  },
  {
    id: 3,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood3.jpg?w=670&h=900"/>',
    answer: "Kuch Kuch Hota Hai",
    options: [
      "Kuch Kuch Hota Hai",
      "Kal Ho Na Ho",
      "Fir Bi Dil Hai Hindustani",
      "None of These"
    ]
  },
  {
    id: 4,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood4.jpg?w=670&h=900"/>',
    answer: "Gupt",
    options: ["Hamesha", "Gupt", "Ajnabee", "None of the above"]
  },

  {
    id: 5,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood5.jpg?w=670&h=900"/>',
    answer: "Mashaal",
    options: ["Karma", "Shakti", "Mashaal", "None of These"]
  },

  {
    id: 6,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood6.jpg?w=670&h=900"/>',
    answer: "Tridev",
    options: ["Tridev", "Shahenshah", "Mujarim", "None of These"]
  },

  {
    id: 7,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood7.jpg?w=670&h=900"/>',
    answer: "Hum Hai Rahi Pyaar Ke",
    options: [
      "Swarg",
      "Hum Hai Rahi Pyaar Ke",
      "One two Ka Four",
      "None of These"
    ]
  },

  {
    id: 8,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood8.jpg?w=670&h=900"/>',
    answer: "Dil To Pagal Hai",
    options: ["Taal", "Dil To Pagal Hai", "Bunty Our Babli", "None of These"]
  },

  {
    id: 9,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood9.jpg?w=670&h=900"/>',
    answer: "Kalia",
    options: ["Shaan", "Namak Halal", "Kalia", "None of the above"]
  },

  {
    id: 10,
    question:
      '<img src="https://im.rediff.com/movies/2020/jun/01bollywood10.jpg?w=670&h=900"/>',
    answer: "Angoor",
    options: ["Pyaasa Sawan", "Angoor", "Swayamwar", "None of These"]
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
