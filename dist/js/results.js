"use strict"

const params = new URLSearchParams(window.location.search);
const duditScore = params.get("duditScore")
const auditScore = params.get("auditScore")

function getAuditScore() {
  const textResultAudit = document.getElementById('textResultAudit');
  const nextActionAudit = document.getElementById('nextActionAudit');

  if (auditScore <= 7 ) {
    textResultAudit.textContent = 'Congratulations! Your AUDIT score suggests a low risk of alcohol dependence';
    nextActionAudit.textContent = `Keep up the good work! If you have any concerns or questions about alcohol use, feel free to give us a call on +27 82 692 3999`;
    textResultAudit.style.color = 'green';
  } else if (auditScore >= 8 && auditScore <= 15) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to a moderate risk of alcohol dependence.';
    nextActionAudit.innerHTML = `It's important to be mindful of your alcohol consumption. Consider seeking professional advice or support if you're concerned about your drinking habits. <br> Give us a call on +27 82 692 3999 or visit our <a href="https://www.projectexodus.net/contact" class="link" target="_blank">contact page</a> for more information`;
    textResultAudit.style.color = '#FFCC00';
  } else if (auditScore >= 16 && auditScore <= 19) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to be a high risk of alcohol dependence.';
    nextActionAudit.innerHTML = `It's crucial to address your alcohol use. We recommend seeking visiting our groups for support. <br> Find out about what groups are closest to you on our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a>. <br> You can also give us a call on +27 82 692 3999`;
    textResultAudit.style.color = 'orange';
  } else if (auditScore >= 20 && auditScore <= 40) {
    textResultAudit.textContent = 'Based on this AUDIT score, there seems to be a highrisk of alcohol dependence.';
    nextActionAudit.textContent = `Immediate action is needed. We reccomend filling out the form below to book a comprehsnive screening assessment with one our coaches. <br> You can also call us on +27 82 692 3999. We also suggest visiting our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a> to attend a recovery group as soon as possible`;
    textResultAudit.style.color = 'red';
  }


  document.getElementById('auditScoreDOM').textContent = auditScore;
  document.getElementById('hiddenAuditScore').value = auditScore;
  };

function getDuditScore() {
  
  const textResultDudit = document.getElementById('textResultDudit');
  const nextActionDudit = document.getElementById('nextActionDudit');

  if (duditScore === 0) {
    textResultDudit.textContent = 'Great news! Your DUDIT score suggests no substance dependence.';
    nextActionDudit.innerHTML = `If you or someone you know needs help or information related to substance use, please don't hesitate to get in touch on our <a href='https://www.projectexodus.net/contact' target="_blank" class="link">contact page</a>`;
    textResultDudit.style.color = 'green';
  } else if (duditScore > 0 && duditScore <= 6) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a low risk of substance dependence.';
    nextActionDudit.innerHTML = `Stay aware of your substance use patterns and remember that support is available if you ever need it. Get in contact with us on our <a href='https://www.projectexodus.net/contact' target="_blank" class="link">contact page</a>. <br> You can also call us +27 82 692 3999`;
    textResultDudit.style.color = 'blue';
  } else if (duditScore >= 7 && duditScore <= 12) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a moderate risk of substance dependence.';
    nextActionDudit.innerHTML = `It's important to monitor your substance use and seek assistance if you feel your habits are becoming problematic. Consider attending our <a href='https://www.projectexodus.net/groups' target="_blank" class="link">recovery groups</a> to learn more. <br> You can also call us +27 82 692 3999`;
    textResultDudit.style.color = '#FFCC00';
  } else if (duditScore >= 13 && duditScore <= 20) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a high risk of substance dependence.';
    nextActionDudit.innerHTML = `Please give us a call on +27 82 692 3999 so that we may offer assistance and support. Visit our <a href='https://www.projectexodus.net/groups' target="_blank" class="link">groups page</a> to find a recovery group near you.`;
    textResultDudit.style.color = 'orange';
  } else if (duditScore > 20) {
    textResultDudit.textContent = 'Based on this DUDIT score, there seems to be a severe risk of substance dependence.';
    nextActionDudit.innerHTML = `Immediate action is necessary. We reccomend filling out the form below to book a comprehensive screening assessment with one our coaches. <br> You can also call us on +27 82 692 3999. We also suggest visiting our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a> to attend a recovery group as soon as possible`;
    textResultDudit.style.color = 'red';
  }


  document.getElementById('duditScoreDOM').textContent = duditScore;
  document.getElementById('hiddenDuditScore').value = duditScore;
};

window.onload = () => {
  getDuditScore();
  getAuditScore();
}