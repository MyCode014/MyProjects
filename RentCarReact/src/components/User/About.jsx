import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about.css";
import aboutImg from "../../assets/all-images/cars-img/car4.png";

const About = ({ aboutClass }) => {
  return (
    <section
      className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Make Europcar your only Selection! Rent a luxury Car</h2>
              <p className="section__description">
              Sometimes, the journey matters more than the destination. So, wherever you go, make your journey extraordinary, and treat yourself to an unforgettable ride! Picture yourself on the road driving a BMW SUV or enthralled by the elegance of a sporty convertible Mercedes, or maybe raptured in the sophistication of a Jaguar Coupe?With Europcar, you can select the luxury model of your dreams from amongst a wide range of high-end vehicles of the world’s most prestigious brands — made with the passion you deserve. What’s more with Selection you choose the model of vehicle you want to drive, not the category. So go ahead, make your Selection.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> When you choose Europcar’s Selection car hire, you get a luxury experience from beginning to end!
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> When you make your booking, be sure to request the specific vehicle you desire so your drive is exactly as you intended it to be!
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Anywhere in Europe, no matter where you need to go, Europcar will get you there in style!
                  amet.
                </p>
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> With Europcar, you benefit from 65 years of experience in high quality car rentals — a history of passion for unforgettable journeys!
                  amet.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;