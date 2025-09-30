import React from "react";
function ListaAlunos(){
    const alunos = ["Victor", "Matheus", "Joana", "Carlos"];
    return (
        <div>
            <h2>Lista Alunos</h2>
            <ul>
                {alunos.map((alunos,index) => (
                    <li key={index}>{alunos}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaAlunos;