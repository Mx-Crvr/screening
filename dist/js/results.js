"use strict"

const params = new URLSearchParams(window.location.search);
const duditScore = params.get("duditScore")
const auditScore = params.get("auditScore")

function getAuditScore() {
  const textResultAudit = document.getElementById('textResultAudit');
  const nextActionAudit = document.getElementById('nextActionAudit');

  if (auditScore <= 7 ) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to be a low risk of alcohol dependence.';
    nextActionAudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultAudit.style.color = 'green';
  } else if (auditScore >= 8 && auditScore <= 15) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to a risk of alcohol dependence.';
    nextActionAudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultAudit.style.color = 'yellow';
  } else if (auditScore >= 16 && auditScore <= 19) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to be a high risk of alcohol dependence.';
    nextActionAudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultAudit.style.color = 'orange';
  } else if (auditScore >= 20 && auditScore <= 40) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to be a highrisk of alcohol dependence.';
    nextActionAudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultAudit.style.color = 'red';
  }


  document.getElementById('auditScoreDOM').textContent = auditScore;
  document.getElementById('hiddenAuditScore').value = auditScore;
  };

function getDuditScore() {
  
  const textResultDudit = document.getElementById('textResultDudit');
  const nextActionDudit = document.getElementById('nextActionDudit');

  if (duditScore === 0) {
    textResultDudit.textContent = 'Based on this DUDIT score, there does not seem to be any substance dependence.';
    nextActionDudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultDudit.style.color = 'green';
  } else if (duditScore > 0 && duditScore <= 6) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a low risk of substance dependence.';
    nextActionDudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultDudit.style.color = 'blue';
  } else if (duditScore >= 7 && duditScore <= 12) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a moderate risk of substance dependence.';
    nextActionDudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultDudit.style.color = 'yellow';
  } else if (duditScore >= 13 && duditScore <= 20) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a high risk of substance dependence.';
    nextActionDudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultDudit.style.color = 'orange';
  } else if (duditScore > 20) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a severe risk of substance dependence.';
    nextActionDudit.textContent = `Well done! If you know anyone that is struggling with a substance dependence, send them our way! Fill out the form below and we'll get in touch.`;
    textResultDudit.style.color = 'red';
  }


  document.getElementById('duditScoreDOM').textContent = duditScore;
  document.getElementById('hiddenDuditScore').value = duditScore;
};

window.onload = () => {
  getDuditScore();
  getAuditScore();
}