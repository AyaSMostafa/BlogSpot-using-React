import './App.css';
import MyFooter from './Components/MyFooter';
import MyCard from './Components/MyCard';
import { MyNavv } from './Components/MyNavv';
import Slider from './Components/Slider';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { NewForm } from './Components/NewForm';
import { TypesForms } from './Components/TypesForms';
import { ContentDetails } from './Components/ContentDetails';
import Home from './Components/Home';
// import { MyForm } from './Components/MyForm';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavv />
        <Routes>
          <Route exact path='/Blogs' element={< MyCard />}></Route>
          <Route exact path='/Form' element={< TypesForms />}></Route>
          <Route exact path='/details' element={< ContentDetails />}></Route>
        </Routes>
      </Router>

      <Slider />
      <MyCard />
      <MyFooter />
    </div>
  );
}

export default App;
