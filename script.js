
document.getElementById('evaluationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const questions = Array.from({ length: 11 }, (_, i) => document.querySelector(`[name=q${i + 1}]`).value);
  const scores = questions.map(q => parseInt(q)).filter(n => !isNaN(n));
  const avg = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : '--';
  document.getElementById('averageScore').textContent = `Average Score: ${avg}`;

  const comments = document.querySelector('[name=comments]').value;
  const subject = encodeURIComponent('Course and Instructor Evaluation Submission');
  const body = encodeURIComponent(
    questions.map((v, i) => `Q${i + 1}: ${v || 'N/A'}`).join('\n') +
    `\n\nAverage Score: ${avg}\n\nComments:\n${comments}`
  );

  window.location.href = `mailto:stooley@ccf-r.com?subject=${subject}&body=${body}`;
});
