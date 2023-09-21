"use strict"

const params = new URLSearchParams(window.location.search);
const duditScore = params.get("duditScore")
const textResult = document.getElementById('textResult');
const nextAction = document.getElementById('nextAction');

if (duditScore == 0) {
  textResult.textContent = 'Great news! Your DUDIT score suggests no substance dependence.';
  nextAction.innerHTML = `If you or someone you know needs help or information related to substance use, please don't hesitate to get in touch on our <a href='https://www.projectexodus.net/contact' target="_blank" class="link">contact page</a>`;
  textResult.style.color = 'green';
} else if (duditScore > 0 && duditScore <= 6) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a low risk of substance dependence.';
  nextAction.innerHTML = `Stay aware of your substance use patterns and remember that support is available if you ever need it. Get in contact with us on our <a href='https://www.projectexodus.net/contact' target="_blank" class="link">contact page</a>. <br> You can also call us +27 82 692 3999`;
  textResult.style.color = 'blue';
} else if (duditScore >= 7 && duditScore <= 12) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a moderate risk of substance dependence.';
  nextAction.innerHTML = `It's important to monitor your substance use and seek assistance if you feel your habits are becoming problematic. Consider attending our <a href='https://www.projectexodus.net/groups' target="_blank" class="link">recovery groups</a> to learn more. <br> You can also call us +27 82 692 3999`;
  textResult.style.color = '#FFCC00';
} else if (duditScore >= 13 && duditScore <= 20) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a high risk of substance dependence.';
  nextAction.innerHTML = `Please give us a call on +27 82 692 3999 so that we may offer assistance and support. Visit our <a href='https://www.projectexodus.net/groups' target="_blank" class="link">groups page</a> to find a recovery group near you.`;
  textResult.style.color = 'orange';
} else if (duditScore > 20) {
  textResult.textContent = 'Based on this DUDIT score, there seems to be a severe risk of substance dependence.';
  nextAction.innerHTML = `Immediate action is necessary. We reccomend filling out the form below to book a comprehensive screening assessment with one our coaches. <br> You can also call us on +27 82 692 3999. We also suggest visiting our <a href="https://www.projectexodus.net/groups" target="_blank" class="link">groups page</a> to attend a recovery group as soon as possible`;
  textResult.style.color = 'red';
}


document.getElementById('duditScoreDOM').textContent = duditScore;
document.getElementById('hiddenDuditScore').value = duditScore;

