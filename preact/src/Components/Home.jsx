import MyFooter from './MyFooter';
import MyCard from './MyCard';
import { MyNavv } from './MyNavv';
import Slider from './Slider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TypesForms } from './TypesForms';
import { ContentDetails } from './ContentDetails';

function Home() {
    return (
        <div>
            <Router>
                <MyNavv />
                <Routes>
                    <Route exact path='/Home' element={< Home />}></Route>
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

export default Home;
