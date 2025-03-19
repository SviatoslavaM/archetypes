const mainPage = document.getElementById("hero");
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quiz");
const quizWrapp = document.getElementById("quizContainer");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");
startButton.addEventListener("click", () => {
  mainPage.style.display = "none";
  quizWrapp.style.display = "block";
});

const questions = [
  {
    question: "Як ви реагуєте на несподівані життєві зміни?",
    answers: [
      {
        text: "Я знаходжу в них можливості для нового досвіду.",
        archetype: "Шукач",
      },
      {
        text: "Підходжу до них із довірою, що все буде добре.",
        archetype: "Невинний",
      },
      {
        text: "Аналізую ситуацію та шукаю логічний вихід.",
        archetype: "Мудрець",
      },
      {
        text: "Намагаюся повернути ситуацію під свій контроль.",
        archetype: "Правитель",
      },
    ],
  },
  {
    question: "Що для вас найважливіше у відносинах із людьми?",
    answers: [
      { text: "Довіра та підтримка.", archetype: "Сирота" },
      { text: "Можливість надихати інших своїми ідеями.", archetype: "Маг" },
      { text: "Глибокий емоційний зв’язок.", archetype: "Люблячий" },
      {
        text: "Можливість допомагати іншим розвиватися.",
        archetype: "Наставник",
      },
    ],
  },
  {
    question: "Як ви поводитеся, коли перед вами з’являється важке завдання?",
    answers: [
      { text: "Сміливо беру на себе відповідальність.", archetype: "Герой" },
      {
        text: "Думаю, як зробити це завдання унікальним і творчим.",
        archetype: "Творець",
      },
      { text: "Намагаюся знайти нестандартний підхід.", archetype: "Бунтар" },
      {
        text: "Ставлюся до нього із гумором, щоб зменшити напругу.",
        archetype: "Блазень",
      },
    ],
  },
  {
    question:
      "Уявіть, що ви маєте можливість провести день як завгодно. Що ви оберете?",
    answers: [
      { text: "Подорож до нового місця.", archetype: "Шукач" },
      { text: "Робота над своїм творчим проєктом.", archetype: "Творець" },
      {
        text: "Зустріч із друзями для підтримки та спілкування.",
        archetype: "Сирота",
      },
      { text: "Спокійний день для роздумів і читання.", archetype: "Мудрець" },
    ],
  },
  {
    question: "Як ви ставитеся до ризику?",
    answers: [
      {
        text: "Я готовий прийняти ризик заради досягнення мети.",
        archetype: "Герой",
      },
      {
        text: "Уникаю ризиків, якщо вони можуть зашкодити мені чи іншим.",
        archetype: "Невинний",
      },
      {
        text: "Я готовий ризикувати, якщо це допоможе змінити існуючий порядок.",
        archetype: "Бунтар",
      },
      {
        text: "Використовую ризик як можливість для зростання.",
        archetype: "Маг",
      },
    ],
  },
  {
    question: "Що вас мотивує долати труднощі?",
    answers: [
      { text: "Бажання допомогти іншим.", archetype: "Наставник" },
      { text: "Бажання досягти ідеального порядку.", archetype: "Правитель" },
      {
        text: "Задоволення від створення чогось нового.",
        archetype: "Творець",
      },
      { text: "Прагнення знайти глибший сенс у житті.", archetype: "Мудрець" },
    ],
  },
  {
    question: "Як ви зазвичай справляєтеся зі стресом?",
    answers: [
      { text: "Шукаю гумор у ситуації.", archetype: "Блазень" },
      {
        text: "Спілкуюся з людьми, які мене підтримують.",
        archetype: "Сирота",
      },
      {
        text: "Застосовую свої знання або магічне мислення, щоб знайти рішення.",
        archetype: "Маг",
      },
      { text: "Концентруюся на своїх цілях і йду вперед.", archetype: "Герой" },
    ],
  },
  {
    question: "Що для вас є джерелом натхнення?",
    answers: [
      { text: "Природа і подорожі.", archetype: "Шукач" },
      { text: "Любов і турбота про інших.", archetype: "Люблячий" },
      { text: "Люди, які змінюють світ на краще.", archetype: "Маг" },
      { text: "Великі ідеї та пошук істини.", archetype: "Мудрець" },
    ],
  },
  {
    question: "Як ви поводитеся, коли працюєте в команді?",
    answers: [
      { text: "Беру на себе роль лідера.", archetype: "Правитель" },
      { text: "Вношу легкість і гумор у роботу.", archetype: "Блазень" },
      { text: "Слухаю і підтримую інших.", archetype: "Наставник" },
      { text: "Пропоную нові ідеї та творчі підходи.", archetype: "Творець" },
    ],
  },
  {
    question: "Що найкраще описує ваше ставлення до життя?",
    answers: [
      {
        text: "Життя – це можливість для відкриттів і пригод.",
        archetype: "Шукач",
      },
      {
        text: "Життя – це місце для прояву любові та турботи.",
        archetype: "Люблячий",
      },
      {
        text: "Життя – це поле для боротьби за справедливість.",
        archetype: "Герой",
      },
      {
        text: "Життя – це гра, в якій важливо насолоджуватися моментами.",
        archetype: "Блазень",
      },
    ],
  },
  {
    question:
      "Оберіть позитивні якості, які вам найближчі (можна вибрати кілька):",
    multipleChoice: true,
    answers: [
      { text: "Мужність", archetype: "Герой" },
      { text: "Мудрість", archetype: "Мудрець" },
      { text: "Креативність", archetype: "Творець" },
      { text: "Співчуття", archetype: "Наставник" },
      { text: "Любов", archetype: "Люблячий" },
      { text: "Лідерство", archetype: "Правитель" },
      { text: "Свобода", archetype: "Шукач" },
      { text: "Віра", archetype: "Невинний" },
      { text: "Стійкість", archetype: "Сирота" },
      { text: "Грайливість", archetype: "Блазень" },
    ],
  },
  {
    question: "Оберіть негативні якості, які іноді проявляються у вас:",
    multipleChoice: true,
    answers: [
      { text: "Несерйозність", archetype: "Блазень" },
      { text: "Інфантилізм", archetype: "Невинний" },
      { text: "Агресія", archetype: "Герой" },
      { text: "Гіперконтроль", archetype: "Правитель" },
      { text: "Нав’язливість", archetype: "Маг" },
      { text: "Самотність", archetype: "Сирота" },
      { text: "Впертість", archetype: "Творець" },
      { text: "Схильність до конфліктів", archetype: "Бунтар" },
      { text: "Перфекціонізм", archetype: "Наставник" },
      { text: "Гіперактивність", archetype: "Шукач" },
      { text: "Маніпуляція", archetype: "Маг" },
      { text: "Залежність від чужої думки", archetype: "Люблячий" },
    ],
  },
];

function displayQuiz() {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.answers.forEach((answer, answerIndex) => {
      const label = document.createElement("label");
      label.style.display = "block";

      const input = document.createElement("input");
      input.type = q.multipleChoice ? "checkbox" : "radio";
      input.name = `question-${index}`;
      input.value = answer.archetype;

      label.appendChild(input);
      label.appendChild(document.createTextNode(answer.text));

      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function calculateResult() {
  const answers = document.querySelectorAll(
    "input[type=checkbox]:checked, input[type=radio]:checked"
  );
  if (answers.length < questions.length) {
    resultContainer.textContent = "Будь ласка, відповідайте на всі питання!";
    return;
  }

  const archetypeCounts = {};

  answers.forEach((answer) => {
    const archetype = answer.value;
    archetypeCounts[archetype] = (archetypeCounts[archetype] || 0) + 1;
  });

  const sortedArchetypes = Object.keys(archetypeCounts)
    .sort((a, b) => archetypeCounts[b] - archetypeCounts[a])
    .slice(0, 3);
  const resultText = sortedArchetypes
    .map((archetype) => {
      return `${archetype}`;
    })
    .join(", ");

  resultContainer.textContent = `Ваші три домінуючі архетипи: ${resultText}`;
  localStorage.setItem("archetypeResults", JSON.stringify(sortedArchetypes));
  window.location.href = "result.html";
}

displayQuiz();
submitButton.addEventListener("click", calculateResult);
