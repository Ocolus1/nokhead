import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <h3>Quick Links</h3>
                        <p>Home</p>
                        <p>Products</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col>
                        <h4>Others</h4>
                        <p>Documentation</p>
                        <p>Medium</p>
                    </Col>
                    <Col>
                        <h3>Email Address</h3>
                        <p>nok@nokarts.com</p>
                    </Col>
                    <Col>
                        <h3>Social Media</h3>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <i className="fa fa-envelope-o"></i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="fa fa-telegram"></i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="fa fa-twitter"></i>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <i className="fa fa-medium"></i>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
