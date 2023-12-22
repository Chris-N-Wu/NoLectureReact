import {Container, Navbar} from "react-bootstrap";
import React, {useState} from "react";
import "../styles/HeaderBar.css"

const HeaderBar = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <Navbar className={"navbar"}>
            <Container>
                <Navbar.Brand className={"navbar-text"} href="/"> <strong>Campus Spot</strong> - Northeastern</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default HeaderBar