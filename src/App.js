import './App.css';
import Header from './components/Header'
import TodosContainer from './components/TodosContainer';
import Image from './mountains.jpg'

function App() {

  const styles = {
    root: {
        backgroundImage: `url(${Image})`,
        height: '100vh',
        overflow: 'auto',
    }
}

  return (
    <div className="App" style={styles.root}>
      <Header />
      <TodosContainer />
    </div>
  );
}

export default App;
