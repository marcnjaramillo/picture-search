import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ea65a9997be2cf2963e75ba6ae279f5692f2800e63ba820e9110eb9eff41d5b9'
  }
});