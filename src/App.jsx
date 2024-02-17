import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

//COMPONENTS
import { Footer, Navbar, ProfileNavbar, ProfileSidebar, ScrollToTop } from './components';
//PAGES
import { Home, Login, Profile, Register } from './pages/interface';

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

                    <Route path="/profile" element={<ProfileLayout />}>
                        <Route path="" element={<Profile />} />
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

const ProfileLayout = () => {
    return (
        <>
            <ProfileNavbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 p-0">
                        <ProfileSidebar />
                    </div>
                    <div className="col-xl-10 p-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};


export default App
