import React from "react";

const Content = () => {
  return (
    <div className="about">
      <img
        className="image-profile"
        src="./img/fotoperfil.jpg"
        alt="foto_perfil"
      />
      <div className="about-info">
        <h2 className="about-me">About me</h2>
        <div className="divider"></div>
        <p className="p1">
          I'm Guido Juliano i have 28 years old, I'm living in Resistencia,
          Chaco. I'm studing engineering of systems in UTN and at this moment
          working in the Ministry of Education like full stack developer.
        </p>
        <p className="p2">
          Now we are working with Python, HTML, CSS, JavaScript, Django,
          Postgres, containers of Docker and repositories and versioned whit
          Github. I consider myself a person who adapts very quickly in the
          workplace, I am quite self-taught and I like to work in a team.
        </p>
      </div>
    </div>
  );
};

export default Content;
