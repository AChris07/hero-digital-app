import axios from 'axios';
import qs from 'qs';

export default function submit(data) {
  return axios.post('/api/submit', qs.stringify(data), {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  });
}
