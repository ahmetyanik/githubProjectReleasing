import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import HomePageButton from "./HomePageButton";
import Title from "./Title";

function Followings() {
  const parametre = useParams();

  const [following, setFollowing] = useState([]);

  function getFollowing() {
    axios
      .get("https://api.github.com/users/" + parametre.username + "/following")
      .then(function (veri) {
        setFollowing(veri.data);
      });
  }

  console.log(
    "https://api.github.com/users/" + parametre.username + "/followings"
  );
  console.log(following);

  useEffect(getFollowing, []);

  return (
    <Container>
      <Title />
      <HomePageButton />

      <Row>
        <Col className="container mt-5 d-flex justify-content-center flex-wrap">
          {following.map(function (veri, index) {
            return (
              <Card className="m-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={following[index].avatar_url} />
                <Card.Body>
                  <Card.Title>{following[index].login}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Followings;
