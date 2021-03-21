import AnimalCard from "../components/AnimalCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


function Save () {
  const [animals, setAnimals] = useState([]);
  const { user } = useAuth0();

  async function petPopulation() {
    
    const usersPets = [];
    const findUser = await axios.put('api/users/findOne', {
      email: user.email
    })
    for (let i = 0; i < findUser.data.savedPets.length; i++) {
     const pets = await axios.put('api/pets/findOne', {
        findUser: findUser.data.savedPets[i]
      })
    usersPets.push(pets.data)
    }
    console.log(usersPets);
    setAnimals(usersPets);
  }
  useEffect(() => {
    petPopulation()
  }, [])
  useEffect(() => {
    console.log(animals)
  }, [animals])
  return (
    <div className="row" style={{ width: '100%' }}>
      {animals.map(pets  => (
        <AnimalCard key={pets._id} name={pets.name} photos={pets.photo} description={pets.description} />
      ))}
    </div>
  );
};

export default Save;
