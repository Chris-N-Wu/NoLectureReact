import React from 'react';
import Card from "react-bootstrap/Card";
import {Col} from "react-bootstrap";

interface IJsonListProps {
    type1: string,
    type2: string
}

const JsonList: React.FC<IJsonListProps> = (data) => {
    return (
        <Col>
            <div className={"mb-3"}>
                <Card style={{backgroundColor: "lightgray", width: '18rem'}}>
                    <Card.Body>
                        <Card.Title> {data.type1} </Card.Title>
                        <Card.Text> {data.type2} </Card.Text>
                        <Card.Subtitle className={"text-muted"}> Some extraneous text </Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default JsonList