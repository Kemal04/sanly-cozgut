import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
        <>
            <div className="bg-primary pb-5" style={{ marginBottom: "-50px", zIndex: "-10" }}>
                <div className="container-fluid px-5">
                    <nav className="navbar navbar-expand-lg pt-4">
                        <div className="collapse navbar-collapse">
                            <form className="d-flex" role="search">
                                <input className="form-control rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <hr className="border-white" />
                <div className="container-fluid px-5">
                    <div className="d-flex justify-content-between py-3 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="text-white me-4 fw-semibold">Baş Sahypa</div>
                            <div className="bg-white rounded-2 py-2 px-4 text-primary small">
                                <FontAwesomeIcon icon={faHome} /> /
                                <span> Baş Sahypa </span> /
                                <span className="text-secondary"> Baş Sahypa</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-sm btn-outline-light me-2">New</button>
                            <button className="btn btn-sm btn-outline-light">Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar