import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import three from "../media/top_img_three.png"

export default function Rarity() {
    return (
        <div className="nft_rarity">
            <h4>NOK TYPES (RARITY)</h4>
            <Container>
                <Row>
                    <Col>
                        <div className="king">
                            <Image src={three} rounded />
                        </div>
                        <h4>KING (X5)</h4>
                    </Col>
                    <Col>
                        <div className="gen_z">
                            <Image src={three} rounded />
                        </div>
                        <h4>GEN-Z (X4070)</h4>
                    </Col>
                    <Col>
                        <div className="punk">
                            <Image src={three} rounded />
                        </div>
                        <h4>PUNK (X2500)</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="baldies">
                            <Image src={three} rounded />
                        </div>
                        <h4>BALDIES (X1175)</h4>
                    </Col>
                    <Col>
                        <div className="boomer">
                            <Image src={three} rounded />
                        </div>
                        <h4>BOOMER (X1800)</h4>
                    </Col>
                    <Col>
                        <div className="orisa">
                            <Image src={three} rounded />
                        </div>
                        <h4>ORISA (X450)</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
