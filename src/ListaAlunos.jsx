import React from "react";
function ListaAlunos() {
  const alunos = ["Victor", "Matheus", "Joana", "Carlos"];
  const alunos02 = ["Jorge", "Willian", "Beatriz", "Cibele"];
  const alunos03 = ["Renato", "Marcos", "Julia", "Alessandra"];
  const alunos04 = ["Fernanda", "Tiago", "Francisco", "Túlio"];
  const alunos05 = ["Sabrina", "João", "Paula", "Mariana"];
  const alunos06 = ["Gabriel", "Leandro", "Pedro", "Alessandra"];
  const alunos07 = ["Naldo", "Mario", "Neide", "Marcio"];
  const alunos08 = ["Claudio", "Tamizia", "Leonardo", "Kleber"];
  return (
    <div>
      <h3>Lista Alunos:</h3>
      <div className="lista-container">
        <ul>
          {alunos.map((alunos, index) => (
            <li key={index} className="lista-alunos">
              {alunos}
            </li>
          ))}
        </ul>
        <ul>
          {alunos02.map((alunos02, index) => (
            <li key={index} className="lista-alunos">
              {alunos02}
            </li>
          ))}
        </ul>
        <ul>
          {alunos03.map((alunos03, index) => (
            <li key={index} className="lista-alunos">
              {alunos03}
            </li>
          ))}
        </ul>
        <ul>
          {alunos04.map((alunos04, index) => (
            <li key={index} className="lista-alunos">
              {alunos04}
            </li>
          ))}
        </ul>
        <ul>
          {alunos05.map((alunos05, index) => (
            <li key={index} className="lista-alunos">
              {alunos05}
            </li>
          ))}
        </ul>
        <ul>
          {alunos06.map((alunos06, index) => (
            <li key={index} className="lista-alunos">
              {alunos06}
            </li>
          ))}
        </ul>
        <ul>
          {alunos07.map((alunos07, index) => (
            <li key={index} className="lista-alunos">
              {alunos07}
            </li>
          ))}
        </ul>
        <ul>
          {alunos08.map((alunos08, index) => (
            <li key={index} className="lista-alunos">
              {alunos08}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListaAlunos;
