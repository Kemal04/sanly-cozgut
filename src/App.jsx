import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

//COMPONENTS
import { Footer, Navbar, ScrollToTop } from './components';
//PAGES
import { Home, Login, Register } from './pages/interface';

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

                    <Route path="/giris-etmek" element={<Login />} />
                    <Route path="/agza-bolmak" element={<Register />} />

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
