/*
  GarrettPrep 22-Question SAT Math Practice Test

  Non-coder editing guide:
  - Update image paths in the `image` field.
  - Update answer keys in `correctAnswer`.
  - Add equivalent free-response answers in `acceptedAnswers`.
  - Update topics in `topic`.
  - Update review text in `explanation`.
  - Add optional walkthrough links in `videoUrl`.

  Expected image uploads:
  assets/practice/q1.png through assets/practice/q22.png
  All 22 expected files were added with this update.
*/

const questions = [
  {
    number: 1,
    image: "assets/practice/q1.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Percent / survey estimate",
    explanation: "The survey says 25% of the drama club plans to attend. Since the club has 48 students, find 25% of 48: 0.25 * 48 = 12. The best estimate is 12 students.",
    videoUrl: ""
  },
  {
    number: 2,
    image: "assets/practice/q2.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Linear equations / constraints",
    explanation: "Each large jar takes 12 minutes, so x large jars take 12x minutes. Each small jar takes 4 minutes, so y small jars take 4y minutes. The total time is 480 minutes, so the equation is 12x + 4y = 480.",
    videoUrl: ""
  },
  {
    number: 3,
    image: "assets/practice/q3.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Scatterplots / line of best fit",
    explanation: "The line of best fit decreases from left to right, so the slope must be negative. It crosses the y-axis a little above 12, about 12.5. The equation that matches a y-intercept of 12.5 and a negative slope near -0.7 is y = 12.5 - 0.7x.",
    videoUrl: ""
  },
  {
    number: 4,
    image: "assets/practice/q4.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Coordinate geometry / slope",
    explanation: "The line goes through (0, 6) and (9, 0), so its slope is (0 - 6) / (9 - 0) = -2/3. Starting at y = 6, dropping to y = 4 is a change of -2. With slope -2/3, that happens after moving 3 units right, so p = 3.",
    videoUrl: ""
  },
  {
    number: 5,
    image: "assets/practice/q5.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "A",
    acceptedAnswers: [],
    topic: "Quadratic functions / tables",
    explanation: "Test the values in the table. For f(x) = 2x^2 + 4x + 9, f(-1) = 2 - 4 + 9 = 7, f(0) = 9, and f(1) = 2 + 4 + 9 = 15. These match all three table values.",
    videoUrl: ""
  },
  {
    number: 6,
    image: "assets/practice/q6.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Function notation / solving equations",
    explanation: "Substitute b into the function and set it equal to 9: (b + 18) / 6 = 9. Multiply by 6 to get b + 18 = 54, so b = 36.",
    videoUrl: ""
  },
  {
    number: 7,
    image: "assets/practice/q7.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Parallel lines / angle relationships",
    explanation: "Angles x and y are vertical angles, so x = y. That gives 6k = 8k - 40, so k = 20. Then x = 120 degrees. Angle z corresponds to the angle above line m and left of the transversal, which is supplementary to x. Therefore z = 180 - 120 = 60.",
    videoUrl: ""
  },
  {
    number: 8,
    image: "assets/practice/q8.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Slopes / perpendicular lines",
    explanation: "Rewrite 3y + 12x = 18 as 3y = -12x + 18, then y = -4x + 6. Line p has slope -4. A perpendicular line has the negative reciprocal slope, so the slope of line r is 1/4.",
    videoUrl: ""
  },
  {
    number: 9,
    image: "assets/practice/q9.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "B",
    acceptedAnswers: [],
    topic: "Volume / density",
    explanation: "The cube has side length 0.80 meter, so its volume is 0.80^3 = 0.512 cubic meters. Mass equals density times volume: 650 * 0.512 = 332.8 kilograms. Rounded to the nearest whole number, the mass is 333 kilograms.",
    videoUrl: ""
  },
  {
    number: 10,
    image: "assets/practice/q10.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Exponential growth",
    explanation: "The exponent is (1/2)t, so the growth factor 1.06 applies every 2 years, or every 24 months. A factor of 1.06 means the population increases by 6%. Therefore n = 6.",
    videoUrl: ""
  },
  {
    number: 11,
    image: "assets/practice/q11.png",
    type: "free-response",
    choices: [],
    correctAnswer: "-14/15",
    acceptedAnswers: ["-14/15", "-0.9333333333", "-0.933333"],
    topic: "Linear equations / no solution",
    explanation: "Expand the left side: 2(kx - n) = 2kx - 2n. For a linear equation to have no solution, the x-coefficients must be equal while the constants are different. Set 2k = -28/15, which gives k = -14/15. The condition n > 1 keeps the constants from being equal.",
    videoUrl: ""
  },
  {
    number: 12,
    image: "assets/practice/q12.png",
    type: "free-response",
    choices: [],
    correctAnswer: "4.06",
    acceptedAnswers: ["4.06", "4.060", "$4.06"],
    topic: "Percents / markup and discount",
    explanation: "The retail price is 290% of $7.00, so it is 2.9 * 7 = $20.30. An 80% discount means the customer pays 20% of the retail price. So the discounted price is 0.20 * 20.30 = $4.06.",
    videoUrl: ""
  },
  {
    number: 13,
    image: "assets/practice/q13.png",
    type: "free-response",
    choices: [],
    correctAnswer: "289",
    acceptedAnswers: ["289"],
    topic: "Quadratics / discriminant",
    explanation: "For x^2 - 34x + c = 0 to have no real solutions, the discriminant must be less than 0. The discriminant is (-34)^2 - 4(1)(c) = 1156 - 4c. This is less than 0 when c > 289, so the least possible value of n is 289.",
    videoUrl: ""
  },
  {
    number: 14,
    image: "assets/practice/q14.png",
    type: "free-response",
    choices: [],
    correctAnswer: "44",
    acceptedAnswers: ["44", "44.0"],
    topic: "Statistics / weighted mean",
    explanation: "Data set A has total height 75 * 32 = 2400. Data set B has total height 50 * 62 = 3100. Together, the total is 5500 across 125 buildings. The combined mean is 5500 / 125 = 44 meters.",
    videoUrl: ""
  },
  {
    number: 15,
    image: "assets/practice/q15.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "D",
    acceptedAnswers: [],
    topic: "Polynomial factors / integer constants",
    explanation: "Expanding (hx + k)(x + j) gives hx^2 + (hj + k)x + kj. Since the original expression has constant term -45, kj = -45. Because k and j are integers, k must be an integer factor of 45, so 45/k must be an integer.",
    videoUrl: ""
  },
  {
    number: 16,
    image: "assets/practice/q16.png",
    type: "free-response",
    choices: [],
    correctAnswer: "14.5",
    acceptedAnswers: ["14.5", "29/2", "14.50"],
    topic: "Quadratics / one real solution",
    explanation: "For the system to have exactly one real solution, the line y = -1.5 must be tangent to the parabola. The vertex of y = x^2 + 8x + a is at x = -4, with y-value a - 16. Set a - 16 = -1.5, which gives a = 14.5.",
    videoUrl: ""
  },
  {
    number: 17,
    image: "assets/practice/q17.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Statistics / data transformations",
    explanation: "Adding 56 to every value increases measures of center, including the median, by 56. It does not change the spread between the largest and smallest values, so the range stays the same. Therefore the median of B is greater than the median of A, and the ranges are equal.",
    videoUrl: ""
  },
  {
    number: 18,
    image: "assets/practice/q18.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Rational functions / transformations",
    explanation: "The graph matches f(x) = 6 / (x + 4), with vertical asymptote x = -4. Since g(x) = f(x + 4), replace x with x + 4: g(x) = 6 / ((x + 4) + 4) = 6 / (x + 8).",
    videoUrl: ""
  },
  {
    number: 19,
    image: "assets/practice/q19.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "A",
    acceptedAnswers: [],
    topic: "Quadratics / product of solutions",
    explanation: "For ax^2 + bx + c = 0, the product of the solutions is c/a. Here a = 43 and c = mn, so the product is mn/43. Since the product is kmn, k = 1/43.",
    videoUrl: ""
  },
  {
    number: 20,
    image: "assets/practice/q20.png",
    type: "free-response",
    choices: [],
    correctAnswer: "10",
    acceptedAnswers: ["10", "10.0", "10.00"],
    topic: "Circle equations / completing the square",
    explanation: "Complete the square: x^2 + 6x = (x + 3)^2 - 9 and y^2 - 8y = (y - 4)^2 - 16. The equation becomes (x + 3)^2 + (y - 4)^2 - 25 = 75, so (x + 3)^2 + (y - 4)^2 = 100. The radius is sqrt(100) = 10.",
    videoUrl: ""
  },
  {
    number: 21,
    image: "assets/practice/q21.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "C",
    acceptedAnswers: [],
    topic: "Geometry / surface area",
    explanation: "Let the square base side length be s. One prism has surface area K = 2s^2 + 4(80s) = 2s^2 + 320s. Gluing two prisms along one square base creates a prism with height 160, so its surface area is 2s^2 + 4(160s) = 2s^2 + 640s. Set 2s^2 + 640s = (33/17)(2s^2 + 320s), which simplifies to s = 10.",
    videoUrl: ""
  },
  {
    number: 22,
    image: "assets/practice/q22.png",
    type: "multiple-choice",
    choices: ["A", "B", "C", "D"],
    correctAnswer: "D",
    acceptedAnswers: [],
    topic: "Quadratics / vertex form",
    explanation: "A parabola with vertex (7, -18) can be written as y = a(x - 7)^2 - 18. Since it intersects the x-axis at two points and the vertex is below the x-axis, it must open upward, so a > 0. The value a + b + c is y(1). In vertex form, y(1) = a(1 - 7)^2 - 18 = 36a - 18, which must be greater than -18. Of the choices, only -15 is greater than -18.",
    videoUrl: ""
  }
];

const totalQuestions = questions.length;
const userAnswers = Array(totalQuestions).fill("");
let currentQuestionIndex = 0;

const startScreen = document.querySelector("#start-screen");
const testScreen = document.querySelector("#test-screen");
const resultsScreen = document.querySelector("#results-screen");
const startButton = document.querySelector("#start-test");
const questionNav = document.querySelector("#question-nav");
const answeredCount = document.querySelector("#answered-count");
const questionTitle = document.querySelector("#question-title");
const questionTopic = document.querySelector("#question-topic");
const questionImage = document.querySelector("#question-image");
const imageWarning = document.querySelector("#image-warning");
const answerArea = document.querySelector("#answer-area");
const prevButton = document.querySelector("#prev-question");
const nextButton = document.querySelector("#next-question");
const submitButton = document.querySelector("#submit-test");
const scoreHeading = document.querySelector("#score-heading");
const scorePercent = document.querySelector("#score-percent");
const scoreMessage = document.querySelector("#score-message");
const topicBreakdown = document.querySelector("#topic-breakdown");
const reviewList = document.querySelector("#review-list");

startButton.addEventListener("click", startTest);
prevButton.addEventListener("click", goToPreviousQuestion);
nextButton.addEventListener("click", goToNextQuestion);
submitButton.addEventListener("click", submitTest);

function startTest() {
  startScreen.hidden = true;
  resultsScreen.hidden = true;
  testScreen.hidden = false;
  currentQuestionIndex = 0;
  renderQuestionNavigator();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestionNavigator() {
  questionNav.innerHTML = "";

  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "question-nav-button";
    button.textContent = question.number;
    button.setAttribute("aria-label", `Go to question ${question.number}`);
    button.addEventListener("click", () => {
      currentQuestionIndex = index;
      renderQuestion();
    });
    questionNav.appendChild(button);
  });

  updateNavigatorState();
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  questionTitle.textContent = `Question ${question.number}`;
  questionTopic.textContent = question.topic;
  questionImage.alt = `SAT Math practice question ${question.number}`;
  imageWarning.hidden = true;

  questionImage.onerror = () => {
    imageWarning.hidden = false;
  };
  questionImage.onload = () => {
    imageWarning.hidden = true;
  };
  questionImage.src = question.image;

  if (question.type === "free-response") {
    renderFreeResponse();
  } else {
    renderMultipleChoice(question);
  }

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = currentQuestionIndex === totalQuestions - 1;
  updateNavigatorState();
}

function renderMultipleChoice(question) {
  answerArea.innerHTML = "";

  question.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.dataset.answer = choice;
    button.innerHTML = `<span class="choice-letter">${escapeHtml(choice)}</span><span>Choice ${escapeHtml(choice)}</span>`;

    if (userAnswers[currentQuestionIndex] === choice) {
      button.classList.add("is-selected");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      userAnswers[currentQuestionIndex] = choice;
      renderQuestion();
    });

    answerArea.appendChild(button);
  });
}

function renderFreeResponse() {
  answerArea.innerHTML = "";

  const label = document.createElement("label");
  label.className = "free-response-label";
  label.textContent = "Type your answer";

  const input = document.createElement("input");
  input.className = "free-response-input";
  input.type = "text";
  input.inputMode = "decimal";
  input.autocomplete = "off";
  input.value = userAnswers[currentQuestionIndex];
  input.placeholder = "Enter answer";
  input.addEventListener("input", () => {
    userAnswers[currentQuestionIndex] = input.value;
    updateNavigatorState();
  });

  label.appendChild(input);
  answerArea.appendChild(label);
  input.focus();
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

function goToNextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  }
}

function updateNavigatorState() {
  const navButtons = questionNav.querySelectorAll(".question-nav-button");
  const answeredTotal = userAnswers.filter((answer) => normalizeAnswer(answer) !== "").length;
  answeredCount.textContent = `${answeredTotal} of ${totalQuestions} answered`;

  navButtons.forEach((button, index) => {
    button.classList.toggle("is-current", index === currentQuestionIndex);
    button.classList.toggle("is-answered", normalizeAnswer(userAnswers[index]) !== "");
  });
}

function submitTest() {
  const unanswered = userAnswers.filter((answer) => normalizeAnswer(answer) === "").length;

  if (unanswered > 0) {
    const shouldSubmit = window.confirm(`You still have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`);
    if (!shouldSubmit) return;
  }

  const results = questions.map((question, index) => ({
    question,
    userAnswer: userAnswers[index],
    isCorrect: isAnswerCorrect(question, userAnswers[index])
  }));

  renderResults(results);
}

function renderResults(results) {
  const correctTotal = results.filter((result) => result.isCorrect).length;
  const percent = Math.round((correctTotal / totalQuestions) * 100);

  testScreen.hidden = true;
  resultsScreen.hidden = false;
  scoreHeading.textContent = `Score: ${correctTotal} / ${totalQuestions}`;
  scorePercent.textContent = `${percent}%`;
  scoreMessage.textContent = getScoreMessage(correctTotal);

  renderTopicBreakdown(results);
  renderReview(results);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTopicBreakdown(results) {
  const topics = {};

  results.forEach((result) => {
    const topic = result.question.topic || "Uncategorized";
    if (!topics[topic]) {
      topics[topic] = { correct: 0, total: 0 };
    }
    topics[topic].total += 1;
    if (result.isCorrect) {
      topics[topic].correct += 1;
    }
  });

  topicBreakdown.innerHTML = Object.entries(topics).map(([topic, counts]) => `
    <article class="topic-card">
      <h3>${escapeHtml(topic)}</h3>
      <p>${counts.correct} of ${counts.total} correct</p>
    </article>
  `).join("");
}

function renderReview(results) {
  reviewList.innerHTML = results.map((result) => {
    const { question, userAnswer, isCorrect } = result;
    const answerText = normalizeAnswer(userAnswer) === "" ? "Unanswered" : userAnswer;
    const videoLink = question.videoUrl
      ? `<p class="video-link"><a href="${escapeAttribute(question.videoUrl)}" target="_blank" rel="noopener">Watch video explanation</a></p>`
      : "";

    return `
      <article class="review-card ${isCorrect ? "is-correct" : "is-incorrect"}">
        <div class="review-header">
          <div>
            <span class="eyebrow">${escapeHtml(question.topic)}</span>
            <h3>Question ${question.number}</h3>
          </div>
          <span class="status-pill">${isCorrect ? "Correct" : "Incorrect"}</span>
        </div>
        <img class="review-image" src="${escapeAttribute(question.image)}" alt="SAT Math practice question ${question.number}">
        <div class="answer-summary">
          <div class="answer-box">
            <p class="answer-label">Your Answer</p>
            <p>${escapeHtml(answerText)}</p>
          </div>
          <div class="answer-box">
            <p class="answer-label">Correct Answer</p>
            <p>${escapeHtml(question.correctAnswer)}</p>
          </div>
        </div>
        <p>${escapeHtml(question.explanation)}</p>
        ${videoLink}
      </article>
    `;
  }).join("");
}

function isAnswerCorrect(question, userAnswer) {
  const submitted = normalizeAnswer(userAnswer);
  const acceptedAnswers = [question.correctAnswer, ...question.acceptedAnswers]
    .map(normalizeAnswer)
    .filter(Boolean);

  if (!submitted || acceptedAnswers.length === 0) return false;
  if (acceptedAnswers.includes(submitted)) return true;

  const submittedNumber = parseNumericAnswer(submitted);
  return acceptedAnswers.some((answer) => {
    const acceptedNumber = parseNumericAnswer(answer);
    return submittedNumber !== null && acceptedNumber !== null && Math.abs(submittedNumber - acceptedNumber) < 0.000001;
  });
}

function normalizeAnswer(answer) {
  return String(answer || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/^\$/, "");
}

function parseNumericAnswer(answer) {
  const compact = answer.replace(/,/g, "");

  if (/^-?\d+(\.\d+)?$/.test(compact)) {
    return Number(compact);
  }

  if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(compact)) {
    const [numerator, denominator] = compact.split("/").map(Number);
    if (denominator !== 0) {
      return numerator / denominator;
    }
  }

  return null;
}

function getScoreMessage(score) {
  if (score >= 19) {
    return "Excellent work. Review the misses and protect those points next time.";
  }
  if (score >= 15) {
    return "Strong start. A few targeted fixes could move this score quickly.";
  }
  if (score >= 11) {
    return "Solid diagnostic. The review below shows exactly where to focus.";
  }
  return "Good starting point. Use the misses as a map for your next practice plan.";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
