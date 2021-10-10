import React from 'react'
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap'
import four from "../media/top_img_four.png"

export default function FAQ() {
    return (
        <div className="faq">
            <h4>FAQ</h4>
            <Container>
                <Row>
                    <Col>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is NFT?</Accordion.Header>
                                <Accordion.Body>
                                    NFTs stand for Non-fungible tokens. An NFT is data that 
                                    is stored or accounted for on the blockchain that 
                                    represents something specific. The NFT can represent a 
                                    piece of artwork, a video clip, or any other type of digital file.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How much are NFTs worth?</Accordion.Header>
                                <Accordion.Body>
                                    As with any free market, the value of an NFT relies 
                                    on what people are willing to pay for it. In the case of 
                                    Beeple’s artwork, someone was willing to pay $69+ million 
                                    to own that specific NFT. Some NFTs take the form of artwork
                                    while others may have future benefits attached to them. 
                                    Example: Owners of a celebrity NFT may get special privileges with that celeb.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I mint a NOK Head?</Accordion.Header>
                                <Accordion.Body>
                                    You get your finger ready for the start of minting 
                                    that will be disclosed on the website and on Twitter. 
                                    Have your browser logged in to TronLink and make sure 
                                    you have the necessary funds. Note: Make sure you have enough to cover the energy fees. 
                                    Once minting commences, you’ll be able to buy from the nokheads.com homepage.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there a buying limit?</Accordion.Header>
                                <Accordion.Body>
                                    There is no buying limit.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Where do I store my NFT?</Accordion.Header>
                                <Accordion.Body>
                                    On any Tron compatible wallet. Ideally, it should support TRC-721.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>What are the NOK Categories?</Accordion.Header>
                                <Accordion.Body>
                                    Gen-Z
                                    Punk
                                    Baldies
                                    Orisa
                                    Boomer
                                    Rare
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col>
                        <Image src={four} rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
