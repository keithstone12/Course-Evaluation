function calculateScore() {
  const questions = document.querySelectorAll('.question');
  let total = 0;
  let count = 0;
  questions.forEach(q => {
    const selected = q.querySelector('input[type=radio]:checked');
    if (selected) {
      total += parseInt(selected.value);
      count++;
    }
  });
  const avg = count ? (total / count).toFixed(2) : '--';
  document.getElementById('totalScore').textContent = `Average Score: ${avg}`;
}
