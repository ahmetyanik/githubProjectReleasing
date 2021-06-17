import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./card.css";

function Card() {
  const [profil, setProfil] = useState([]);
  const [repo, setRepo] = useState([]);

  var query = new URLSearchParams(useLocation().search);
  const parametre = useParams();

  var searchingWord = query.get("userName");

  if (searchingWord === null) {
    searchingWord = "";
  }



  function getGithubDatas() {
    axios
      .get("https://api.github.com/users/" + searchingWord)
      .then(function (user) {
        setProfil(user.data);
      });
  }

  const event = new Date(profil.created_at);
  const date =
    event.getDate() + "/" + event.getMonth() + "/" + event.getFullYear();

  useEffect(getGithubDatas, []);

  function getRepos() {
    axios
      .get("https://api.github.com/users/" + searchingWord + "/repos")
      .then(function (veri) {
        setRepo(veri.data);
      });
  }

  console.log("searchingWord",searchingWord);

  function deleteIt() {
    var nullArray = [];
    setProfil(nullArray);
    setRepo(nullArray);
    document.getElementById("card").style.display="none";
  }

  useEffect(getRepos, []);

  return (
    <div>
    
      <div className="container-1 mb-5" id="card">
        <div className="card-container">
          <div
            className="card-img"
            style={{ background: "url(" + `${profil.avatar_url}` + ")" }}
          ></div>
          <div className="card1  user">
            <i className="fas fa-user-circle">
              {" "}
              {profil.name === null ? profil.login : " " + profil.name}
            </i>
          </div>

          <div className="card1 followers">
            <Link
              to={`/followers/${profil.login}`}
              style={{ textDecoration: "none" }}
            >
              <i
                style={{ color: "rgba(0, 0, 0, 0.486)" }}
                className="fas fa-user"
              >
                {" "}
                <span className="badge bg-secondary p-1 fs-6">
                  Followers: {profil.followers}
                </span>
              </i>
            </Link>
          </div>

          <div className="card1  following">
            <Link to={`/followings/${profil.login}`}>
              <i
                style={{ color: "rgba(0, 0, 0, 0.486)" }}
                className="fas fa-user-secret"
              >
                {" "}
                <span className="badge bg-secondary p-1 fs-6">
                  Followings: {profil.following}
                </span>
              </i>
            </Link>
          </div>

          <div className="card1  following">
            <i className="fas fa-laptop-medical">
              {" "}
              Repositories:{profil.public_repos}
            </i>
          </div>
          <div className="card1  member">
            <i className="fas fa-clock"> From: {date}</i>
          </div>
        </div>
        <button onClick={deleteIt} className="btn btn-light mb-2">
          Clear
        </button>
        <div className="grid-container">
          <div className="grid-item title">Repository Name</div>
          <div className="grid-item title"></div>
          <div className="grid-item title"></div>

          {repo.map(function (data, index) {
            return (
              <a href={data.html_url} target="blank">
                <div className="grid-item" style={{ fontSize: "0.9rem" }}>
                  {index + 1}.{data.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
