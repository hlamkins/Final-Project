import React from "react";
import { Card, Button } from 'react-bootstrap';

const AnimalCard = (props) => (
    <Card key={props.id} className="col-4">
    {/* {console.log(animal)} */}
    <Card.Img
        variant="top"
        src={props.photos}
        style={{ width: '90%', height: '50%', paddingTop: '10%' }}
    />
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {' '}
            {props.description != null ? props.description : 'No description'}{' '}
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <a
            className="btn btn-primary"
            style={{ color: 'white' }}
            href={props.url}
            target="_blank"
            rel="noreferrer"
        >
            Learn More!
        </a>{' '}
        {/* {user && <Button onClick={() => favs(animal)}>Save Me!</Button>} */}
    </Card.Footer>
</Card>
);

export default AnimalCard;