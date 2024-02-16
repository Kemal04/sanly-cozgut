import { Link, NavLink } from "react-router-dom";
import footerImg from "../../../assets/bg/auth.jpg";

const Register = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent navbar-light">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">Sanly Çözgüt</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Baş sahypa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Täzelikler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Biz Barada</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Habarlaşmak</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <NavLink to='/agza-bolmak' className="btn btn-primary py-3 px-5 rounded-5 fs-18 fw-semibold ms-5" type="submit">Agza Bol</NavLink>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "70vh" }}>
                    <div className="col-xl-7">
                        <form className="row rounded-5 py-4 px-5 shadow-sm">
                            <div className="col-xl-12">
                                <div className="display-4 mb-5 text-center">Agza bolmak</div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="phone">Telefon belgisi *</label>
                                <input id="phone" name="phone" type="number" className="form-control rounded-4" placeholder="+993 65 12-34-56" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="password">Açar sözi *</label>
                                <input id="password" name="password" type="password" className="form-control rounded-4" placeholder="************" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="password1">Açar sözini gaýtala *</label>
                                <input id="password1" name="password1" type="password" className="form-control rounded-4" placeholder="************" autoComplete="off" />
                            </div>
                            <div className="col-xl-12 mb-4">
                                Meniň öň hem agza boldym! <Link to='/giris-etmek' className="text-decoration-none">Giriş et</Link>
                            </div>
                            <div className="col-xl-12 mb-4 text-center">
                                <button className="btn btn-primary px-5 rounded-5" type="submit">Ugrat</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-12 text-center position-absolute bottom-0">
                        <img src={footerImg} alt="" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register