import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

//COMPONENTS
import { AdminNavbar, AdminSidebar, Footer, Navbar, ProfileNavbar, ProfileSidebar, ScrollToTop } from './components';
//PAGES
import { Home, Login, Profile, Register } from './pages/interface';
//ADMIN
import { Admin, AdminContact, AdminLogin, AdminRace, AdminUsers } from './pages/admin';

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

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="" element={<Admin />} />
                        <Route path="home" element={<Admin />} />

                        <Route path="users" element={<AdminUsers />} />

                        <Route path="race" element={<AdminRace />} />

                        <Route path="contact" element={<AdminContact />} />
                    </Route>

                    <Route path="/admin/login" element={<AdminLogin />} />

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


const AdminLayout = () => {
    return (
        <>
            <div className='position-fixed top-0 bottom-0 d-block'>
                <AdminSidebar />
            </div>

            <div style={{ marginLeft: "280px" }}>
                <AdminNavbar />

                <Outlet />
            </div>
        </>
    );
};


export default App
