"use strict"


const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('duditScore')
 if (score) {
  document.getElementById('goToDudit').classList.add('hidden');
  document.getElementById('auditScoreBtnText').innerText = 'Get scores';
 }
 
 

console.log(score)
// If user wants audit score 
document.getElementById('auditScoreBtn').addEventListener('click', () => {
  let auditScore = 0;
  let allQuestionsAnswered = true;

  for (let i = 1; i <= 10; i++) {
    const question = document.querySelector(`.q${i}`);
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);

    if (selectedAnswer) {
      question.classList.remove('unanswered')
      auditScore += parseInt(selectedAnswer.value);
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
    localStorage.setItem('audit_score', auditScore);
    console.log(auditScore)
    window.location.href = `./result_pages/audit_results.html?auditScore=${auditScore}`;
    if (score) {
      window.location.href = `./result_pages/results.html?auditScore=${auditScore}&duditScore=${score}`;
    }
  }
});


// If user wants to proceed to dudit first
document.getElementById('goToDudit').addEventListener('click', () => {
  let auditScore = 0;
  let allQuestionsAnswered = true;

  for (let i = 1; i <= 10; i++) {
    const question = document.querySelector(`.q${i}`);
    const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);

    if (selectedAnswer) {
      question.classList.remove('unanswered')
      auditScore += parseInt(selectedAnswer.value);
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
    localStorage.setItem('audit_score', auditScore);
    console.log(auditScore);
    window.location.href = `../dudit.html?auditScore=${auditScore}`;
  }
});




