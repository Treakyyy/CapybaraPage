import './App.css';
import Header from './components/header/Header';
import Laboratory from './components/labaratory/Laboratory';
import Gallery from './components/gallery/Gallery'
import Application from './components/application/Application';

function App() {
  return (
    <div className="App">
      <Header/>
      <Laboratory/>
      <Gallery/>
      <Application/>
    </div>
  );
}

export default App;
