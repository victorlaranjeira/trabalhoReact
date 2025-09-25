import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

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
