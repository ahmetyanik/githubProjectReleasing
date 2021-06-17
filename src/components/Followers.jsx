import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import HomePageButton from "./HomePageButton";
import Title from "./Title";

function Followers() {
  const parametre = useParams();

  const [follower, setFollower] = useState([]);

  function getFollowers() {
    axios
      .get("https://api.github.com/users/" + parametre.username + "/followers")
      .then(function (veri) {
        setFollower(veri.data);
      });
  }

  console.log(follower);

  useEffect(getFollowers, []);

  return (
    <Container>
      <Title />
      <HomePageButton/>
      <Row>
        <Col className="container mt-5 d-flex justify-content-center flex-wrap">
          {follower.map(function (veri, index) {
            return (
              <Card className="m-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={follower[index].avatar_url} />
                <Card.Body>
                  <Card.Title>{follower[index].login}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Followers;
