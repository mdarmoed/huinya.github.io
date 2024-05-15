import './App.css';
import Header from './Header';
import MainBlock from './MainBlock';
import Footer from './Footer';
import Team from './Team';
import Pravila from './Pravila';


//import Galeria from './Galeria';

function App() {
  return (
    <>
      <Header />
      <main>

        <MainBlock />
        {/* 
        
        Our Cats 
        

        */}
        <Pravila /> 
        {/* <Donat />*/}

        <Team /> 

      </main>
      <Footer /> 
    </>
  );
}


export default App;
