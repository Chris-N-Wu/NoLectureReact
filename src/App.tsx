import React from 'react';
import './App.css';

import data from "./data/data.json";
import {Col, Container, Navbar, Row} from "react-bootstrap";
import JsonList from "./components/JsonList";

console.log(data)


function App() {

    const items = data["items"];

    return (
        <>
            {/*<Navbar className={"bg-danger text-white"}>*/}
            <Navbar bg={"danger"} variant={"dark"}>
                <Container>
                    <Navbar.Brand href="#home">NoLecture Northeastern</Navbar.Brand>
                </Container>
            </Navbar>

            <Container className={"mt-5"}>  {/* Margin top*/}
                <Row>
                        {
                            items.map((item, i) => (
                                <JsonList type1={item.type1} type2={item.type2}></JsonList>
                            ))
                        }
                </Row>
            </Container>
        </>
    );
}

export default App;
