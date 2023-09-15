"use strict"

const params = new URLSearchParams(window.location.search);
const auditScore = params.get("auditScore")
const textResult = document.getElementById('textResult');
const nextAction = document.getElementById('nextAction');

if (auditScore <= 7 ) {
  textResult.textContent = 'Based on this AUDIT score, there seems to be a low risk of alcohol dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'green';
} else if (auditScore >= 8 && auditScore <= 15) {
  textResult.textContent = 'Based on this AUDIT score, there seems to a risk of alcohol dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'yellow';
} else if (auditScore >= 16 && auditScore <= 19) {
  textResult.textContent = 'Based on this AUDIT score, there seems to be a high risk of alcohol dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'orange';
} else if (auditScore >= 20 && auditScore <= 40) {
  textResult.textContent = 'Based on this AUDIT score, there seems to be a highrisk of alcohol dependence.';
  nextAction.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
  textResult.style.color = 'red';
}


document.getElementById('auditScoreDOM').textContent = auditScore;
document.getElementById('hiddenAuditScore').value = auditScore;
