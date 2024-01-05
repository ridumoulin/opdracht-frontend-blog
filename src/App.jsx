import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Overview from './pages/Overview/Overview.jsx';
import Newposts from './pages/NewPosts/NewPosts.jsx';
import Error from './pages/Error/Error.jsx';
import Navigation from "./constants/Navigation/Navigation.jsx";
import DetailPage from "./pages/Posts/DetailPage.jsx";


function App() {
    return (
        <>
            <div className="page-container">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Overview" element={<Overview />}/>
                    <Route path="/NewPosts" element={<Newposts />}/>
                    <Route path="/posts/:id" element={<DetailPage/>} />
                    <Route path="/Error" element={<Error />}/>
                </Routes>
            </div>
        </>
    )
}

export default App
