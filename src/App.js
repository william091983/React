import Nome from './components/Nome';

function App() {
  return(
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Arthur Dias" idade={30}/>
      <br/>
      <Nome aluno="Jose Silva" idade={28}/>
    </div>
  );
}

export default App;