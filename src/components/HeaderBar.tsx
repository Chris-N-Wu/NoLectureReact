import {Container, Navbar} from "react-bootstrap";
import React from "react";

const HeaderBar = () => {
    return (
        <Navbar bg={"danger"} variant={"dark"}>
            <Container>
                <Navbar.Brand href="/"> <strong>Campus Spot</strong> - Northeastern</Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default HeaderBar