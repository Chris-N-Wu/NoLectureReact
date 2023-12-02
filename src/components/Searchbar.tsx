import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React from "react";

const Searchbar = () => {
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