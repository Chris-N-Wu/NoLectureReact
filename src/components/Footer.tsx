import {Container} from "react-bootstrap";

/**
 * Simple footer. Contains GitHub attribution.
 */
export default function Footer() {
    return (
        <Container className={"mt-5 mb-3 text-center"}>
            <hr/>
            <a href={"https://github.com/Chris-N-Wu/NoLectureReact"} target={"_blank"} rel={"noreferrer noopener"}>
                GitHub
            </a>
        </Container>
    )
}