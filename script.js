const beforeUnitQuestions = [
  "Why do we think that the unit or the selection of topics will be interesting?",
  "What do students already know, and what can they do?",
  "What have students encountered in this discipline before?",
  "What does experience tell us about what to expect in this unit?",
  "What attributes of the learner profile does this unit offer students opportunities to develop?",
  "What potential interdisciplinary connections can we identify for this unit?",
  "What do we know about students’ preferences and patterns of interaction?",
  "Are there any possible opportunities for meaningful service learning?",
  "What in the unit might be inspiring for community or personal projects?",
  "Could we develop authentic opportunities for service learning?",
  "How can we use students’ multilingualism as a resource for learning?"
];

const duringUnitQuestions = [
  "What difficulties did we encounter while completing the unit or the summative assessment task(s)?",
  "What resources are proving useful, and what other resources do we need?",
  "What student inquiries are emerging?",
  "What can we adjust or change?",
  "What skills need more practice?",
  "What is the level of student engagement?",
  "How can we scaffold learning for students who need more guidance?",
  "What is happening in the world right now with which we could connect teaching and learning in this unit?",
  "How well are the learning experiences aligned with the unit’s objectives?",
  "What opportunities are we giving to help students explore the interpretative nature of knowledge, including personal biases that might be retained, revised or rejected? (Preparation for / Connection to DP theory of knowledge skills development)"
];

const afterUnitQuestions = [
  "What were the learning outcomes of this unit?",
  "How well did the summative assessment task serve to distinguish levels of achievement?",
  "Was the task sufficiently complex to allow students to reach the highest levels of achievement?",
  "What evidence of learning can we identify?",
  "What artifacts of learning should we document?",
  "Which teaching strategies were effective? Why?",
  "What was surprising about this unit?",
  "What student-initiated action did we notice?",
  "What will we do differently next time?",
  "How will we build on our experience to plan the next unit?",
  "How effectively did we differentiate learning in this unit?",
  "What can students carry forward from this unit to the next year/level of study?",
  "Which subject groups could we work with next time?",
  "What did we learn from standardizing the assessment?"
];

const questionElement = document.getElementById('question');
const beforeUnitBtn = document.getElementById('beforeUnitBtn');
const duringUnitBtn = document.getElementById('duringUnitBtn');
const afterUnitBtn = document.getElementById('afterUnitBtn');

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  questionElement.textContent = questions[randomIndex];
}

beforeUnitBtn.addEventListener('click', () => getRandomQuestion(beforeUnitQuestions));
duringUnitBtn.addEventListener('click', () => getRandomQuestion(duringUnitQuestions));
afterUnitBtn.addEventListener('click', () => getRandomQuestion(afterUnitQuestions));
