import axios from "axios";

export default () => {
  const instance1 = axios.create({
    baseURL: "http://0.0.0.0:3000/v1",
  })
  const instance2 = axios.create({
    baseURL: "https://shogi-quiz.herokuapp.com/v1",
  })
  return [instance1,instance2];
};
