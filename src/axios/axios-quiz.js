import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-react2.firebaseio.com/'
})