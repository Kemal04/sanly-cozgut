import { NavLink } from "react-router-dom"
import img1 from '../../assets/cards/1.jpg'
import img2 from '../../assets/cards/2.png'

const Navbar = () => {
    return (
        <>
            <div className="bg-home">
                <nav className="navbar navbar-expand-lg bg-transparent navbar-dark mb-5">
                    <div className="container pt-4">
                        <NavLink to='/' className="navbar-brand">Logo</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link fw-semibold px-3" aria-current="page">Home</NavLink>
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
                                <NavLink to='/' className="btn btn-primary py-3 px-5 rounded-5 fs-18 fw-semibold ms-5" type="submit">Agza Bol</NavLink>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container mt-5 pt-5 text-white">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="display-2 mb-5">
                                Access cutting edge <b>analytics</b> right at your disposal!
                            </div>
                            <div className="h3 fw-normal" style={{ lineHeight: "45px" }}>
                                Power of advanced analytics at your fingertips for unparalleled insights. Experience a new era of data-driven decision-making.
                            </div>
                            <NavLink to="/" className="btn btn-primary py-3 px-5 mt-4 rounded-5 fs-18 fw-semibold">Agza Bol</NavLink>
                        </div>
                        <div className="col-xl-6">
                            <div className="position-relative">
                                <img src={img1} alt="" className="img-fluid rounded-5" style={{ minWidth: "900px" }} />
                                <img src={img2} alt="" className="img-fluid rounded-4 position-absolute" style={{ bottom: "-18%", left: "-20%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar