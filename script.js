document.getElementById('evaluationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const values = ['q1', 'q2', 'q3', 'q4'].map(q => parseInt(document.querySelector(`[name="${q}"]`).value));
  const validValues = values.filter(v => !isNaN(v));
  const average = validValues.length ? (validValues.reduce((a, b) => a + b, 0) / validValues.length).toFixed(2) : '--';
  document.getElementById('averageScore').textContent = `Average Score: ${average}`;
});