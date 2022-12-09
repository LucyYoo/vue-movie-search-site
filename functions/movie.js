require('dotenv').config();
const axios = require("axios");

const {API_KEY} = process.env;

exports.handler = async function (event) {
  const payload = event.body ? JSON.parse(event.body): '';
  const {url, method, body} =payload;
  const {data} = await axios({
    url: `https://www.omdbapi.com?apikey=${API_KEY}${url}`,
    method,
    data: body
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };

};

