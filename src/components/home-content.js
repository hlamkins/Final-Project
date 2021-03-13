import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl, Form, Card, CardGroup, Button } from "react-bootstrap";

const HomeContent = (props) => {
 const [searchVal, setSearchVal] = useState("")
 const handleSubmit = (e) => {
   e.preventDefault();
   props.findAnimal("https://api.petfinder.com/v2/animals", searchVal, "1");
   console.log(searchVal);
 }

  return(
  <div className="next-steps">
    <h2 className="text-center">Welcome to Re∞ue Me</h2>

    <div className="row">
      <div className="col-md-4 mb-4">
        Search Pet
        <div className="col">
          Search parameter goes here <br />
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

          <br /><br />
          <Button>Search</Button>
        </div>
        <div className="col"><br />History? listed of pet saved?</div>
      </div>
      
      <form>
      <div class="form-group">
    <label for="pet-search">Search</label>
    
    <input onChange={(e) => setSearchVal(e.target.value)} type="search" class="form-control" placeholder="Search Pet" />
    <button onClick={handleSubmit}> Search</button>
      </div>
      </form>


      <div className="col-md-8 mb-4">
        <h6>Adopt pet</h6>
        <CardGroup>
          {
            props.renderAnimals.map(animal => (
              <Card>
              <Card.Img variant="top" src={animal.photos.length >= 1? animal.photos[0].medium: ""} />
              <Card.Body>
                <Card.Title>Pet 1</Card.Title>
                <Card.Text>Pet Info</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button>Adopt</Button>
              </Card.Footer>
            </Card>
            ))
          }
        </CardGroup>
      </div>
    </div>
  </div>
)};

export default HomeContent;
