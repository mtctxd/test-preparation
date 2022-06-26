import './App.css';
import Bubles from './components/Bubbles/Bubbles';
import CanvasParticles from './components/CanvasParticles/CanvasParticles';
import StarWarp from './components/StarWarp/StartWarp';
import UserForm from './components/UserFrom/UserFrom';

function App() {
  return (
    <>
      <CanvasParticles />
      <Bubles />
      <StarWarp />
      <UserForm />
    </>
  );
}

export default App;
