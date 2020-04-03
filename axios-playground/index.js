const axios = require('axios')

axios.get('https://swapi.co/api/people/1')
  .then(res => console.log(res))