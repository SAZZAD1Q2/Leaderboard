import './style.css';

import displayScores from './modules/displayScore.js';
import { getScores } from './modules/getScore.js';
import submitForm from './modules/form.js';

submitForm();

document.querySelector('#refresh').addEventListener('click', async () => {
  const scores = await getScores();
  displayScores(scores);
  window.location.reload();
});

getScores();
