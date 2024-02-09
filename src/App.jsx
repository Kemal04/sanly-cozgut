import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

import { Footer, Navbar, ScrollToTop } from './components';
import { Home } from './pages/interface';

function App() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <Toaster />
                <Routes>
                    <Route path="/" element={<HomeLayout />}>

                        <Route path="/" element={<Home />} />

                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
        
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};


export default App
