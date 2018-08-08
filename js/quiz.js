(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter].answer}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      console.log()
    //   currentQuestion.answers.forEach((element,value) => {
    //       console.log(element[value].value)
    //   });
        // console.log(currentQuestion.answers[0].value)
      // if answer is correct
    //   if (userAnswer == true) {
        // add to the number of correct answers
        // console.log(currentQuestion.answers[questionNumber].value)
        numCorrect += currentQuestion.answers[userAnswer].value;

        // // color the answers green
        // answerContainers[questionNumber].style.color = "lightgreen";
    //   } 
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
        question: "Qué tipo de servicio requiere?",
        answers: [
            {answer: "Aplicación Móvil", value:100},
            {answer: "Sistema", value:200},
            {answer: "Sistema Web",value:3000},
            {answer: "Sitio Web", value:5000},
        ],
    },
    {
        question: "¿Qué nivel de calidad busca?",
        answers: [
            {answer: "Calidad óptima", value:100},
            {answer: "Buena relación calidad/precio", value:200},
            {answer: "No importa mucho la calidad",value:3000},
        ],
    },
    {
        question: "¿En qué plataforma desea su idea?",
        answers: [
            {answer: "Sistema Escritorio", value:100},
            {answer: "Móvil", value:200},
            {answer: "Web",value:3000},
        ],
    },
    {
        question: "¿Qué diseño desea?",
        answers: [
            {answer: "Interfaz Sencilla", value:100},
            {answer: "Interfaz Personalizada", value:200},
            {answer: "Interfaz duplicada de la web",value:3000},
            {answer: "No se necesita diseño",value:3000},

        ],
    },
    {
        question: "¿Qué diseño desea?",
        answers: [
            {answer: "Interfaz Sencilla", value:100},
            {answer: "Interfaz Personalizada", value:200},
            {answer: "Interfaz duplicada de la web",value:3000},
            {answer: "No se necesita diseño",value:3000},

        ],
    },
    {
        question: "¿Cómo desea sacar beneficio?",
        answers: [
            {answer: "Acceso gratuito con publicidad", value:100},
            {answer: "Freemiun, pagar por ciertos usos", value:200},
            {answer: "Compras en dentro del sistema",value:3000},
            {answer: "Otros",value:3000},

        ],
    },
    {
        question: "¿Se requiere un login?",
        answers: [
            {answer: "Si, con redes sociales", value:100},
            {answer: "Si, usuarios dentro del sistema", value:200},
            {answer: "No",value:3000},

        ],
    },
    {
        question: "¿Los usuarios tienen perfiles?",
        answers: [
            {answer: "Si", value:100},
            {answer: "No", value:200},
            {answer: "No lo sé",value:3000},
        ],
    },
    {
        question: "¿Se requiere un panel de administración?",
        answers: [
            {answer: "Si", value:100},
            {answer: "No", value:200},
            {answer: "No lo sé",value:3000},

        ],
    },
    {
        question: "¿Qué idioma tendrá?",
        answers: [
            {answer: "Un único idioma", value:100},
            {answer: "Bilingue", value:200},
            {answer: "Multilingue",value:3000},
        ],
    },
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();