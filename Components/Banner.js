import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../Assets/img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio </span>
                        <h1>{`Hi I'm Adam!`}<span className="wrap">Games Developer</span></h1>
                        <p> About Me goes here - Will fill it out later </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


//Page29 section 4 - 7 