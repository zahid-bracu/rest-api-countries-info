import React from 'react'
import { Button, Card } from 'react-bootstrap';
export default function HomeCard(props) {
    const {key,name,capital,flag,description}=props.data;
    return (
        <Card style={{ width:"90%",maxWidth: '18rem', minHeight:"32rem", margin:".2rem .5rem" }}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Capital of <span className="text-success">{name}</span> is <span className="text-danger">{capital}</span>
            </Card.Text>
            <p className="text-justify">{description}</p>
        </Card.Body>
        </Card>
    )
}
