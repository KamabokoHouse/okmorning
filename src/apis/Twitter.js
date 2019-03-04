import Axios from "axios";

const postTweet = () => {
  Axios.get("https://twitter.com/share")
    .then(res => {})
    .catch(err => {});
};

export { postTweet };
