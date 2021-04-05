import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="app">
      <header className="app__header">
      </header>
      <body class="app__content">
        <Counter />
      </body>
      <footer class="app__footer"></footer>
    </div>
  );
}

export default App;
