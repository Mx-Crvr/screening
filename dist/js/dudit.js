"use strict"

const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('auditScore')
 if (score) {
  document.getElementById('goToAudit').classList.add('hidden');
  document.getElementById('duditScoreBtnText').innerText = 'Get scores';
 }

document.getElementById('duditScoreBtn').addEventListener('click', () => {
  let duditScore = 0;
  let allQuestionsAnswered = true;

  for (let i = 1; i <= 11; i++) {
    const question = document.querySelector(`.q${i}`);
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);

    if (selectedAnswer) {
      question.classList.remove('unanswered')
      duditScore += parseInt(selectedAnswer.value);
    } else {
      allQuestionsAnswered = false;
      question.classList.add('unanswered');
    }
  }

  if (!allQuestionsAnswered) {
    document.getElementById('validationMessage').classList.remove('hidden');
  } else {
    document.getElementById('validationMessage').classList.add('hidden');
  } 

  if (allQuestionsAnswered) {
    localStorage.setItem('dudit_score', duditScore);
    console.log(duditScore);
    window.location.href = `./result_pages/dudit_results.html?duditScore=${duditScore}`;
    if (score) {
      window.location.href = `./result_pages/results.html?duditScore=${duditScore}&auditScore=${score}`;
    }
  }
});

document.getElementById('goToAudit').addEventListener('click', () => {
  let duditScore = 0;
  let allQuestionsAnswered = true;

  for (let i = 1; i <= 11; i++) {
    const question = document.querySelector(`.q${i}`);
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);

    if (selectedAnswer) {
      question.classList.remove('unanswered')
      duditScore += parseInt(selectedAnswer.value);
    } else {
      allQuestionsAnswered = false;
      question.classList.add('unanswered');
    }
  }

  if (!allQuestionsAnswered) {
    document.getElementById('validationMessage').classList.remove('hidden');
  } else {
    document.getElementById('validationMessage').classList.add('hidden');
  } 

  if (allQuestionsAnswered) {
    localStorage.setItem('dudit_score', duditScore);
    console.log(duditScore);
    window.location.href = `../audit.html?duditScore=${duditScore}`;
  }
});