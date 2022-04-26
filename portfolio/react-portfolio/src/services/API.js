import axios from 'axios';

const DATABASE_URL =
  process.env.NODE_ENV === 
  'Production'
  ? 'http://localhost:3000'
  : 'https://fatnando-portfoli-backend.herokuapp.com';

    const API = axios.create({ baseURL : DATABASE_URL });

export default API;
