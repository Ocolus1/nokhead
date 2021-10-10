import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import three from "../media/top_img_three.png"

export default function Nutility() {
    return (
        <div className="nft_utility">
            <h4>NFT WITH UTILITY</h4>
            <Container>
                <Row>
                    <Col>
                        <div>
                            Asides the obvious benefits to possessing an NFT
                            with historical allusion, the NOK HEADS are more
                            than they appear! Holding even one NOK HEAD grants
                            you direct access to compete for NOK rewards by battling.
                            Think of them like your pokemon. The more NOK you have,
                            the higher your chances of wining a skirmish and taking home GOLD! Who knows?
                            You could even get one of the 5 great NOK Kings!
                        </div>
                    </Col>
                    <Col>
                        <Image src={three} rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
