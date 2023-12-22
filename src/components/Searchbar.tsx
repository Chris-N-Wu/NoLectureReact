import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

interface Props {
    onSearchbarChange?: (newType: string) => void;
}

/**
 * Allows users to filter out for specific buildings.
 *
 * @param onSearchbarChange A set useState (string) variable to pass
 *                          information from this component to the BuildingList
 *                          component.
 */
const Searchbar = ({onSearchbarChange}: Props) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2 rounded-pill"
                            aria-label="Search"
                            onChange={
                                // done in case onSearchbarChange is null
                                event => onSearchbarChange ? onSearchbarChange(event.target.value) : console.log("Error")
                            }
                        />
                        <Button className="rounded-pill" variant="outline-primary">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Searchbar