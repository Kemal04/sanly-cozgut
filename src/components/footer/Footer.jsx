import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-xl-3">
                        <div className="h4 mb-4">Sanly Çözgüt</div>
                        <p>ProcessDesk presents key info in an accessible format, giving users a quick overview of relevant data & insights.</p>
                    </div>
                    <div className="col-xl-2">
                        <div className="h5 mb-4">Pages</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Home</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">About</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Features</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Integrations</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Career</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Blog</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Contact</Link>
                    </div>
                    <div className="col-xl-2">
                        <div className="h5 mb-4">Utility Pages</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Style Guide</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Licenses</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Changelog</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Protected</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Not Found</Link>
                        <Link to='' className="text-decoration-none mb-3 d-block btn btn-primary rounded-5 px-4">Giris etmek</Link>
                    </div>
                    <div className="col-xl-2">
                        <div className="h5 mb-4">Contact</div>
                        <div className="fs-18 fw-semibold">Email</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">info@processdesk.com</Link>
                        <div className="fs-18 fw-semibold">Phone</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">111 2654 0001</Link>
                        <div className="fs-18 fw-semibold">Address</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">006 Main Street Cedar Rapids, USA ZIP Code: 782360</Link>
                    </div>
                </div>
                <div className="border-top py-3 mt-3">
                    <div className="text-center">
                        © {new Date().toLocaleDateString(undefined, { year: "numeric" })}
                        <Link to="https://it.net.tm/" target="_blank" className='text-decoration-none fw-semibold me-1'> Sanly Çözgüt IT meýdança</Link>
                        tarapyndan ähli hukuklar goragly.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer