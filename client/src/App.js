import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

import DataTable from './Components/DataTable';


function App() {


  return (
    <div className="App">
    <Header/>
    <Nav/>
    <Main/>
    <DataTable/>  
   

    <Footer/>

  
    </div>
  );
}

export default App;
