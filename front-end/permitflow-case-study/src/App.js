import './App.css';
import Dropdown from './components/Dropdown';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <h2>What Residential Work Are You Doing?</h2>
      <Dropdown/>
     
    </div>
  );
}

export default App;
