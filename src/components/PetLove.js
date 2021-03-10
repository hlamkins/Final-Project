import React from "react";

const PetCard = (props) => {
  const { name, img, age, breed, location } = props.pet;

  return (
    <div className="dog-card-container">
      <div className="dog-card" onClick={() => props.handlePetGoBack(props.pet)}>
        <img className="dog-card-img" src={img} alt={name} title={name} />{" "}
        
        <p>
          {" "}
          <b> Age: </b>
          {age}{" "}
        </p>
        <p>
          {" "}
          <b> Breed: </b> {breed}
        </p>
        <p>
          {" "}
          <b> Location: </b> {location}
        </p>
        <div className="clear"> </div>{" "}
      </div>{" "}
      <div>
        {" "}
        {props.pet.adoption ? (
          ` I am Rescued '  by ${props.pet.adoption.user.name}`
        ) : (
          <button onClick={() => props.rescueMe(props.pet)}>Rescue Me∞!!!</button>
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default PetCard;
