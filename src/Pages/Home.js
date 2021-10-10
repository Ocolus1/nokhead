import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import one from "../media/top_img_one.png"
import two from "../media/top_img_two.png"
import three from "../media/top_img_three.png"
import four from "../media/top_img_four.png"
import five from "../media/top_img_five.png"
import art from "../media/art_work.png"
import Nutility from '../components/Nutility'
import Rarity from '../components/Rarity'
import Perks from '../components/Perks'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <div className="navigation">
                <Navbar />
            </div>
            <div className="top-img">
                <Container>
                    <Row>
                        <Col>
                            <Image src={one} rounded />
                        </Col>
                        <Col>
                            <Image src={two} rounded />
                        </Col>
                        <Col>
                            <Image src={three} rounded />
                        </Col>
                        <Col>
                            <Image src={four} rounded />
                        </Col>
                        <Col>
                            <Image src={five} rounded />
                        </Col>
                    </Row>
                    <h3>NOKHEADS</h3>
                </Container>
            </div>
            <div className="art_work">
                <Image src={art} rounded fluid />
            </div>
            <div className="pad-section">
                <div className="nok_some_art">
                    <h2>NOK SOME ART</h2>
                    <Container>
                        <Row>
                            <Col><p>COMMING SOON</p></Col>
                            <Col>
                                <h4>NOK MINTING</h4>
                                <div>
                                    Only 10,000 NOK is available for minting on the TRON blockcain.
                                    The NOK collection is a unique limited edition NFT.
                                    This means that each NFT was individually designed!
                                    Holding NOK NFT will grant you access to NOK games,
                                    NOK markets and NOK finance platforms.
                                </div>
                                <Button className="first_btn">LEARN MORE</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Nutility />
                <Rarity />
                <Perks />
                <FAQ />
                <Footer />
            </div>
        </div>
    )
}
