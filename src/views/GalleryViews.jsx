import React from "react";
// import Container from "../components/container/Container";
import { Container, Col, Row } from "react-bootstrap";
import Section from "../components/section/Section";
import Searchbar from "../components/searchbar/Searchbar";
import Gallery from "../components/gallery/Gallery";
import SideBar from "../components/sideBar/SideBar";

const GalleryViews = function () {
  return (
    <>
      <Searchbar />
      <Container>
        <Row>
          <Col sm={9}>
            <Section title="Gallery">
              <Gallery />
            </Section>
          </Col>
          <Col sm={3}>
            <SideBar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryViews;
