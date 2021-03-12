import axios from "axios";
// install Axios npm install axios
const apiKey = "iWiR26fTbFnkimqLTUV5OyyM59awpYU1LZHKmmYFizsA6zjrvR";

// export default {
// // put URL here ..

//   getUsers: function () {
//     return axios.get("");
//   },
// };
export const getAnimals = () => {
  axios
    .get("https://api.petfinder.com/v2/animals", {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      Authorization: apiKey,
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
