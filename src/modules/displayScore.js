const scoreList = document.getElementById('scoreList');

const displayScores = (scores) => {
  scoreList.innerHTML = ''; // Clear the previous scores
  scores.forEach((score, index) => {
    const row = document.createElement('tr');
    const nameCol = document.createElement('td');
    nameCol.textContent = score.user;
    const scoreCol = document.createElement('td');
    scoreCol.textContent = score.score;
    row.appendChild(nameCol);
    row.appendChild(scoreCol);
    scoreList.appendChild(row);

    // Change the background color of the row using inline CSS
    row.style.backgroundColor = index % 2 === 0 ? '#e6e6e6' : '#f2f2f2';
  });
};

export default displayScores;
