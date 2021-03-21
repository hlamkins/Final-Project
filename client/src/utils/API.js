import axios from "axios";
const apiKey = "iWiR26fTbFnkimqLTUV5OyyM59awpYU1LZHKmmYFizsA6zjrvR";


export const findAnimal = async (url, type, page, accessToken, addToast) => {
  try {
    const req = await axios
      .get(`${url}?breed=${type}&page=${page}`,{
        method: "GET",
        headers: {"Authorization" : "Bearer " + accessToken}
      });
      console.log(req)
      return req.data;
  } catch (ex) {
    addToast('Dog is not found', { appearance: 'error' });
  } 
};

// export const getAnimals = () => {
//   axios
//     .get("https://api.petfinder.com/v2/animals", {
//       mode: "no-cors",
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       Authorization: apiKey,
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
