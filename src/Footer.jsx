import React from "react";
function Footer(props) {
  return (
    <>
      <div>
        <footer>
          <p>Disciplina: {props.nomeDaDisciplina}</p>
          <p>Curso: {props.nomeDoCurso}</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
