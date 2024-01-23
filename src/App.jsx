import './App.css'
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Button from './components/button-1/button';
import ButtonBorder from './components/buttonBorder/buttonBorder';
import NewModels from './components/newModels/newModels';
import Benefit from './components/benefit/benefit';
import Discover from './components/discover/discover';

function App() {

  return (
    <>
    <Header></Header>
    <Hero>
      <Button></Button>
      <ButtonBorder></ButtonBorder>
    </Hero>
    <NewModels></NewModels>
    <Benefit></Benefit>
    <Discover></Discover>
    </>
  )
}

export default App;
