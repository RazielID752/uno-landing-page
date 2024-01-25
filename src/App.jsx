import './App.css'
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Button from './components/button-1/button';
import ButtonBorder from './components/buttonBorder/buttonBorder';
import NewModels from './components/newModels/newModels';
import Benefit from './components/benefit/benefit';
import Discover from './components/discover/discover';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
    <Header/>
    <Hero>
      <Button></Button>
      <ButtonBorder></ButtonBorder>
    </Hero>
    <NewModels></NewModels>
    <Benefit></Benefit>
    <Discover></Discover>
    <Footer></Footer>
    </>
  )
}

export default App;
