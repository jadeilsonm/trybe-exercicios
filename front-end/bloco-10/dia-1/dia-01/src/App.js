// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './content';
import Footer from './Footer';

function App() {
  const Task = (value) => {
      return (
          <li>{value}</li>
      );
  }
  const tarefas = ['acordar','tomar cafe','trabalhar','estudar','fazer atividades'];
  return (
    <div>
      <div>
        < Header />
      </div>
      <ol> { tarefas.map((el) => Task(el)) }    </ol>
      < Content />
      <footer className='footer'>
      < Footer />
      </footer>
    </div>
  );
}

export default App;
