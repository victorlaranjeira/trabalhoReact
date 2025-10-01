import Header from "./Header";
import Footer from "./Footer";
import ListaAlunos from "./ListaAlunos";
import "./App.css";
import Botao from "./Botao";
import Alerta from "./Alerta";
import Acoes from "./Acoes";
import Cards from "./Cards";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="content">
          <h2>
            Olá, seja bem vindo, meu nome é victor e este é o meu primeiro
            trabalho em React
          </h2>
          <ListaAlunos />
          <Botao />
          <Alerta tipo="sucesso" />
          <Alerta tipo="erro" />
          <Alerta tipo="aviso" />
          <Acoes texto="Salvar" />
          <Acoes texto="Cancelar" />
          <Acoes texto="Enviar" />
          <div className="cards-container">
            <Cards nome="Victor" curso="React" idade={26} />
            <Cards nome="José" curso="Front-End" idade={25} />
            <Cards nome="Ana" curso="Back-End" idade={22} />
          </div>
        </main>
        <Footer
          nomeDaDisciplina="Front-end Frameworks"
          nomeDoCurso="Análise e Desenvolvimento de Sistemas"
        />
      </div>
    </>
  );
}

export default App;
