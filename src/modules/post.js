import APIurl from './url.js';

const requestAPI = async (method, data) => {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  const response = await fetch(APIurl, options);
  return response.json();
};

export default requestAPI;