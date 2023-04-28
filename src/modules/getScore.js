import requestAPI from './post.js';
import displayScores from './displayScore.js';

const sortScores = (scores) => scores.sort((a, b) => b.score - a.score);

async function getScores() {
  const data = await requestAPI('GET');
  const scores = data.result.map(({ user, score }) => ({ user, score: parseInt(score, 10) }));
  displayScores(sortScores(scores));
  return sortScores(scores);
}

async function postScore(user, score) {
  await requestAPI('POST', { user, score });
}
export { getScores, postScore };