"use strict"

const params = new URLSearchParams(window.location.search);
const auditScore = params.get("auditScore")
const textResult = document.getElementById('textResult');
const nextAction = document.getElementById('nextAction');

if (auditScore <= 7 ) {
  textResult.textContent = 'Congratulations! Your AUDIT score suggests a low risk of alcohol dependence';
  nextAction.textContent = `Keep up the good work! If you have any concerns or questions about alcohol use, feel free to give us a call on +27 82 692 3999`;
  textResult.style.color = 'green';
} else if (auditScore >= 8 && auditScore <= 15) {
  textResult.textContent = 'Based on this AUDIT score, there seems to a moderate risk of alcohol dependence.';
  nextAction.innerHTML = `It's important to be mindful of your alcohol consumption. Consider seeking professional advice or support if you're concerned about your drinking habits. <br> Give us a call on +27 82 692 3999 or visit our <a href="https://www.projectexodus.net/contact" class="link" target="_blank">contact page</a> for more information`;
  textResult.style.color = '#FFCC00';
} else if (auditScore >= 16 && auditScore <= 19) {
  textResult.textContent = 'Based on this AUDIT score, there seems to be a high risk of alcohol dependence.';
  nextAction.innerHTML = `It's crucial to address your alcohol use. We recommend seeking visiting our groups for support. <br> Find out about what groups are closest to you on our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a>. <br> You can also give us a call on +27 82 692 3999`;
  textResult.style.color = 'orange';
} else if (auditScore >= 20 && auditScore <= 40) {
  textResult.textContent = 'Based on this AUDIT score, there seems to be a highrisk of alcohol dependence.';
  nextAction.innerHTML = `Immediate action is needed. We reccomend filling out the form below to book a comprehensive screening assessment with one our coaches. <br> You can also call us on +27 82 692 3999. We also suggest visiting our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a> to attend a recovery group as soon as possible`;
  textResult.style.color = 'red';
}


document.getElementById('auditScoreDOM').textContent = auditScore;
document.getElementById('hiddenAuditScore').value = auditScore;
