import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Perks() {
    return (
        <div className="nok_perks">
            <h4>PERKS OF NOKKERS</h4>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h4>NOK Swag Line</h4>
                            <div>
                                You can trade your NFT for NOK Swag and merchandise
                                on our marketplace which will be delivered at your doorstep.
                            </div>
                        </div>
                        <div>
                            <h4>NOK Giveaway</h4>
                            <div>
                                Be one of 10 people to win $1,000 each in
                                our NOK lottery for all NOK holders.
                            </div>
                        </div>
                        <div>
                            <h4>NOK Finance</h4>
                            <div>
                                YStake your NOK as collateral and
                                borrow USDT at low interest rates.
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>NOK Market</h4>
                            <div>
                                Sell your NOK NFT to other NOKKERS on the
                                marketplace and rack up reward points.
                            </div>
                        </div>
                        <div>
                            <h4>NOK Games</h4>
                            <div>
                                Battle other NOK NFT on our gaming
                                platform and win thousands in rewards.
                            </div>
                        </div>
                        <div>
                            <h4>NFT Integration</h4>
                            <div>
                                Integrate NOK NFT with other NFT
                                platforms so you can sell and trade your NOK on their marketplace.
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
