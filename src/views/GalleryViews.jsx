import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import style from "./GalleryViews.module.scss";
import Section from "../components/section/Section";
import Searchbar from "../components/searchbar/Searchbar";
import Gallery from "../components/gallery/Gallery";
import SideBar from "../components/sideBar/SideBar";

const GalleryViews = function () {
  return (
    <>
      <Searchbar />
      <Container>
        <Row className={style.rowBox}>
          <Col sm={9}>
            <Section title="Gallery">
              <Gallery />
            </Section>
          </Col>
          <Col sm={3}>
            <Section title="">
              <SideBar />
            </Section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryViews;
