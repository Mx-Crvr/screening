"use strict"

const params = new URLSearchParams(window.location.search);
const duditScore = params.get("duditScore")
const textResult = document.getElementById('textResult');
const nextAction = document.getElementById('nextAction');

if (duditScore === 0) {
  textResult.textContent = 'Based on this DUDIT score, there does not seem to be any substance dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'green';
} else if (duditScore > 0 && duditScore <= 6) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a low risk of substance dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'blue';
} else if (duditScore >= 7 && duditScore <= 12) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a moderate risk of substance dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'yellow';
} else if (duditScore >= 13 && duditScore <= 20) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a high risk of substance dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'orange';
} else if (duditScore > 20) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a severe risk of substance dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'red';
}


document.getElementById('duditScoreDOM').textContent = duditScore;
document.getElementById('hiddenDuditScore').value = duditScore;

