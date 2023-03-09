import React from 'react'
import HeroSlider from '../components/User/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import FindCar from '../components/User/FindCar'


const Home = () => {
  return (
    <Helmet title='Home'>
      <section className="p-0 hero__slider-section">
        <HeroSlider/>

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCar />
              </Col>
            </Row>

          </Container>
        </div>
      </section>


      
    </Helmet>
  )
}

export default Home