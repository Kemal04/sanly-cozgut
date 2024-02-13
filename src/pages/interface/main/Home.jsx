import { Link } from "react-router-dom"

import img3 from "../../../assets/cards/3.png";
import img4 from "../../../assets/cards/4.png";
import img5 from "../../../assets/cards/5.png";
import img6 from "../../../assets/cards/6.png";
import img7 from "../../../assets/cards/7.png";
import img8 from "../../../assets/cards/8.png";
import img9 from "../../../assets/cards/9.jpg";
import img10 from "../../../assets/cards/10.jpg";
import img11 from "../../../assets/cards/11.jpg";
import img12 from "../../../assets/cards/12.jpg";
import img13 from "../../../assets/cards/13.jpg";
import img14 from "../../../assets/cards/14.jpg";
import img15 from "../../../assets/cards/15.jpg";
import img16 from "../../../assets/cards/16.jpg";
import img17 from "../../../assets/cards/17.jpg";

import svg1 from "../../../assets/icons/mac.svg";
import svg2 from "../../../assets/icons/statiks.svg";
import checkIcon from "../../../assets/icons/check.svg";

const Home = () => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="position-relative mb-5">
                            <img src={img3} alt="" className="img-fluid position-absolute" style={{ left: "5%" }} />
                            <img src={img4} alt="" className="img-fluid position-absolute" style={{ left: "100px", top: "265px" }} />
                            <img src={img5} alt="" className="img-fluid position-absolute" style={{ top: "41px", right: "110px" }} />
                            <img src={img6} alt="" className="img-fluid position-absolute" style={{ top: "-30px", right: "12%", zIndex: "-1" }} />
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="display-4">The diverse tools <br /> <b className="text-primary fw-bold">available</b> in our suite.</div>
                        <p className="fs-18 my-4 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            A world where versatility meets innovation, offering you the means to craft, create, and shape your projects with unparalleled precision.
                        </p>
                        <div className="d-flex mt-5 align-items-center">
                            <img src={svg1} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Strength Beneath</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>What's visible, but the hidden strength that propels you forward.</p>
                            </div>
                        </div>
                        <div className="d-flex mt-5 align-items-center">
                            <img src={svg2} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Strength Beneath</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>What's visible, but the hidden strength that propels you forward.</p>
                            </div>
                        </div>
                        <Link to='/' className="btn btn-primary btn-lg mt-5 rounded-5 py-3 px-5">Get Start</Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="display-4 mb-4">Metrics for <b className="text-primary fw-bold">Project</b> Engagement</div>
                        <p className="fs-18 my-4 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            Tool goes beyond traditional metrics, offering a comprehensive analysis of how each project member engages with tasks and the overall workflow.
                        </p>
                        <div className="d-flex align-items-center mb-3 mt-5">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Data-driven Insights and Efficiency Analysis</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Data-driven Insights and Efficiency Analysis</div>
                        </div>
                        <div className="mt-5 h4">Details</div>
                        <img src={img7} alt="" className="img-fluid w-75" />
                    </div>
                    <div className="col-xl-6">
                        <div className="bg-light rounded-5" style={{ padding: "50px 70px" }}>
                            <div className="display-4">The Significance of Project <b className="text-primary fw-bold">Reports</b>: A Closer Look</div>
                            <img src={img8} alt="" className="img-fluid mt-5" />
                            <p className="fs-18 text-secondary w-75">
                                Project reports, and discover why they stand as indispensable tools for effective project oversight and strategic planning.
                            </p>
                            <Link to='/' className="btn btn-primary btn-lg mt-3 rounded-5 py-3 px-5">Get Start</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 py-5 d-flex justify-content-center flex-column align-items-center">
                <div className="display-4"><b className="text-primary fw-bold">Features</b> That Set Us Apart</div>
                <p className="mt-4 fs-18 text-secondary" style={{ width: "34%" }}>
                    In this space, we don't just offer features; we present a signature blend of tools that elevate your interaction, providing a standout experience that goes beyond the ordinary.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img9} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Live Data Insights</div>
                            <p className="text-secondary fs-18 mt-5 pb-5" style={{ lineHeight: "27px" }}>
                                Dynamic insights into your data with Live Data Insights, offering immediate, up-to-the-moment analytics to drive agile decision-making & swift actions.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img10} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Auto-Generated Reports</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Auto-generated reports, ensuring instant access to regularly updated summaries and analyses for swift decision-making.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img11} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Integrations</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Journey, envision a landscape where each component converges to create a unified and efficient whole.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img12} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Split Testing</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                The audience, providing insights into which design, content, or layout drives better engagement or conversions.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img13} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Funnel optimization</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Analysis of each stage of the customer or user funnel, identifying bottlenecks, drop-offs, and areas for improvement.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-12 d-flex justify-content-center">
                        <Link to='/' className="btn btn-primary btn-lg mt-3 rounded-5 py-3 px-5">Get Start</Link>
                    </div>
                </div>
            </div>

            <div className="bg-about">
                <div className="container">
                    <div className="d-flex justify-content-center">

                        <div className="w-75">
                            <div className="row align-items-center">
                                <div className="col-xl-8 mb-5">
                                    <div className="display-5">
                                        Explore Our Newest <b>Articles</b> & <b>Resources</b>
                                    </div>
                                </div>
                                <div className="col-xl-4 mb-5 text-end">
                                    <Link to="" className="btn btn-dark px-5 py-3 rounded-5">Browse Articles</Link>
                                </div>
                                <div className="col-xl-5">
                                    <div className="bg-white rounded-5 p-4">
                                        <img src={img14} alt="" className="img-fluid rounded-5" />
                                        <div className="ms-3">
                                            <div className="my-3">
                                                <span className="btn btn-outline-primary btn-sm rounded-5">Design</span>
                                                <span className="btn btn-outline-primary btn-sm rounded-5 mx-3">Nov 18, 2024</span>
                                            </div>
                                            <div className="h4 mb-3">Demystified: Streamlining Insights for Success</div>
                                            <p>Analytical processes, empowering readers to harness insights effortlessly.</p>
                                            <Link to='' className="text-decoration-none">View more</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img15} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span>Design</span>
                                            <span>Nov 18, 2024</span>
                                            <div className="h4 mt-4">Demystified: Streamlining Insights for Success</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img16} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span>Design</span>
                                            <span>Nov 18, 2024</span>
                                            <div className="h4 mt-4">Demystified: Streamlining Insights for Success</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img17} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span>Design</span>
                                            <span>Nov 18, 2024</span>
                                            <div className="h4 mt-4">Demystified: Streamlining Insights for Success</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="d-flex justify-content-center">
                    <div className="text-center display-5 w-50">Get Insight into <b>Frequently Asked Questions</b></div>
                </div>
                <div className="bg-light rounded-5 p-5">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <form className="row justify-content-center">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input name="name" type="text" className="form-control rounded-0" placeholder="Adynyz" autoComplete="off" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input name="email" type="email" className="form-control rounded-0" placeholder="E-mail adresiniz" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <input name="subject" type="text" className="form-control rounded-0" placeholder="Temasy" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <textarea name="comment" className="form-control rounded-0" rows="6" placeholder="Mazmuny"></textarea>
                                </div>
                                <div className="col-xl-5 mb-4 text-center">
                                    <button className="btn btn-primary px-5 rounded-5">Ugrat</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-6">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home