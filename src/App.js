import './Styles/App/App.css';
import DanielContainer from "./components/DanielContainer"
import JeanetteContainer from './components/JeanetteContainer';
import JonathanContainer from './components/JonathanContainer';
import KiraContainer from './components/KiraContainer';
import PatrickContainer from "./components/PatrickContainer"

export default function App() {
  return (
    <div className="App">
      <main className='gridbox'>
        <DanielContainer />
        <JonathanContainer />
        <KiraContainer />
        <JeanetteContainer />
        <PatrickContainer />  
      </main>
    </div>
  );
}