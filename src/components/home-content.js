import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Form, Card, CardGroup, Button } from "react-bootstrap";

const HomeContent = (props) => {
  const [searchVal, setSearchVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.findAnimal("https://api.petfinder.com/v2/animals", searchVal, "1");
    console.log(searchVal);
  };

  return (
    <div className="next-steps">
      <h2 className="text-center">Welcome to Re∞ue Me</h2>

      <div className="row">
        <div className="col-md-3 mb-4">
          Search Pet
          <div className="col">
            <form>
          <div class="form-group">
            <label for="pet-search">Search</label>

            <input
              onChange={(e) => setSearchVal(e.target.value)}
              type="search"
              class="form-control"
              placeholder="Search Pet"
            />
            
          </div>
        </form> 
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Color</Form.Label>
              <Form.Control as="select">
                <option>Black</option>
                <option>Brown</option>
                <option>White</option>
                <option>Red</option>
                <option>Gray</option>
              </Form.Control>
            </Form.Group>
            <Form.Check id="female" inline label="Female" type="radio" aria-label="radio 1" />
            <Form.Check id="male" inline label="Male" type="radio" aria-label="radio 1" />
            <br />
            <br />
            <Button onClick={handleSubmit}>Search</Button>
          </div>
        
          <div className="col">
            <br />
            History? listed of pet saved?
          </div>
        </div>

        
      {/* </div>
      <div className="row"> */}
        <div className="col-9">
          <h6>Adopt pet</h6>
          {/* Move this to a separate component When an animal is favorited, then add to an array on the user collection.  For the favorites page we pass an array of the users favorited animals*/}
          <div className="row" style={{ width: "100%" }}>
            {props.renderAnimals
              .filter((animal) => animal.photos[0] && animal.photos[0].large)
              .map((animal) => (
                <Card className="col-4">
                  {console.log(animal)}
                  <Card.Img variant="top" src={animal.photos.length >= 1 ? animal.photos[0].large : ""} />
                  <Card.Body>
                    <Card.Title>{animal.name}</Card.Title>
                    <Card.Text> {animal.description != null ? animal.description : "No description"} </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Adopt</Button>
                  </Card.Footer>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
