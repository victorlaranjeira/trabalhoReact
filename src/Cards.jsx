function Cards(props) {
  return (
    <div className="cards">
      <h3>{props.nome}</h3>
      <p>Curso: {props.curso}</p>
      <p>Idade: {props.idade}</p>
    </div>
  );
}

export default Cards;
