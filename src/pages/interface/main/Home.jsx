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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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
                        <div className="display-4">Bäsleşigiň <br /> <b className="text-primary fw-bold">esasy</b> maksatlary</div>
                        <p className="fs-18 my-3 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            Berkarar döwletimiziň bagtyýarlyk döwründe, Hormatly Prezidentimiziň parasatly başlangyçlary bilen ýurdumyzyň ykdysadyýetine sanly ulgamy ornaşdyrmak boýunça maksatnamalaýyn işler durmuşa geçirilýär.
                        </p>
                        <div className="d-flex mt-3 align-items-center">
                            <img src={svg1} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Kanunyň kabul edilmegi</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>Türkmenistanyň Prezidentiniň 2018-nji ýylyň 30-njy noýabryndaky...</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3 align-items-center">
                            <img src={svg2} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Gazanylan üstünlikler</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>Kabul edilen konsepsiýa laýyklykda, dünýä ylmynyň täze gazananlary esasynda taýýarlanan...</p>
                            </div>
                        </div>
                        <Link to='/' className="btn btn-primary btn-lg mt-3 rounded-5 py-3 px-5">Giňişleýin gör</Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="display-4 mb-4">Bäsleşik <b className="text-primary fw-bold">7 ugur</b> boýunça geçiriler</div>
                        <p className="fs-18 my-4 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            Bäsleşige hödürlenýän taslamalary (oýlap tapyşlary) seljermek üçin, eminlik etmek maksady bilen, wagtlaýyn ýörite seljeriş topary döredilýär.
                            <br />
                            Seljeriş toparynyň düzümine umumy ýolbaşçylygy «Türkmenaragatnaşyk» agentligi tarapyndan amala aşyrylýar we ylalaşylyp düzülýär.
                        </p>
                        <div className="d-flex align-items-center mb-3 mt-5">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Saglygy goraýyş</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Ylym-bilim</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Ulag-logistika</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Elektron senagat</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Oba-hojalyk</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Hyzmatlar ulgamy</div>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <img src={checkIcon} alt="" className="img-fluid me-2" />
                            <div className="h5">Robototehnika</div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="bg-light rounded-5 d-flex flex-column align-items-center" style={{ padding: "50px 70px" }}>
                            <div className="display-4">Bäsleşikde <b className="text-primary fw-bold">gadagan</b> edilýän hereketler</div>
                            <img src={img8} alt="" className="img-fluid mt-5" style={{ width: "400px" }} />
                            <p className="fs-18 text-secondary">
                                <ul>
                                    <li>Jemgyýetçilik çäklerini we özüňi alyp barmak tertiplerini bozmak;</li>
                                    <li> Wirusly ýa-da howply resminamalary ýüklemek we almak;</li>
                                    <li> Iş we onuň mazmuny bäsleşige gatnaşyjylaryň we ony gurnaýjylaryň göwnine degip biljek taslamanyň görnüşini hödürlemek.</li>
                                </ul>
                            </p>
                            <Link to='/' className="btn btn-primary btn-lg mt-3 rounded-5 py-3 px-5">Giňişleýin gör</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 py-5 d-flex justify-content-center flex-column align-items-center">
                <div className="display-4"><b className="text-primary fw-bold">Kriteriýalaryň</b> sanawy</div>
                <p className="mt-4 fs-18 text-secondary" style={{ width: "34%" }}>
                    Bäsleşige gatnaşyjylaryň buýurmalarynyň kriteriýa aňlatmalary we kriteriýalar boýunça aňladyş göterimleri ýa-da bahalary
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img9} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Kriteriýa 1 (30%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px", paddingBottom: "35px" }}>
                                Sanly ulgam bilen baglanyşykly modeli
                            </p>
                            <div className="h4 mb-3 mt-5">Kriteriýa 2 (20%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Kiberhowpsuzlyk talaplarynyň berjaý edilişi
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img10} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Kriteriýa 3 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Enjamlara we beýleki maddy çeşmelere eýeçilik hukugynda ýa-da beýleki kanuny esasda, maliýe çeşmeleriniň elýeterliligini, wakalaryň mowzugy bilen baglanyşykly iş tejribesini, belli bir hünär derejesindäki hünärmenleri
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img11} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Kriteriýa 4 (20%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Taslamanyň netijeliligi
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img12} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Kriteriýa 5 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Sanly özgertme maksatnamasynyň hili
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img13} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Kriteriýa 6 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Taslamalar (Oýlap-tapyşlar)
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-12 d-flex justify-content-center">
                        <Link to='/' className="btn btn-primary btn-lg mt-3 rounded-5 py-3 px-5">Giňişleýin gör</Link>
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
                                        Başlangyç wagty & umumy <b>düzgünleri</b>
                                    </div>
                                </div>
                                <div className="col-xl-4 mb-5 text-end">
                                    <Link to="" className="btn btn-dark px-5 py-3 rounded-5">Giňişleýin gör</Link>
                                </div>
                                <div className="col-xl-5">
                                    <div className="bg-white rounded-5 p-4">
                                        <img src={img14} alt="" className="img-fluid rounded-5" />
                                        <div className="ms-3">
                                            <div className="my-3">
                                                <span className="btn btn-outline-primary btn-sm rounded-5">Tehnologiýa</span>
                                                <span className="btn btn-outline-primary btn-sm rounded-5 mx-3">Sept 01, 2024</span>
                                            </div>
                                            <div className="h4 mb-3">«Sanly çözgüt – 2024» innowasion taslamalar bäsleşigi</div>
                                            <p>Bäsleşigiň umumy düzgünlerini görmek üçin Giňişleýin göre basyň</p>
                                            <Link to='' className="text-decoration-none">Giňişleýin gör</Link>
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
                <div className="bg-light rounded-5 p-5 mt-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6">
                            <form className="row justify-content-center">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input name="name" type="text" className="form-control rounded-4 border-0" placeholder="Adynyz" autoComplete="off" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input name="email" type="email" className="form-control rounded-4 border-0" placeholder="E-mail adresiniz" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <input name="subject" type="text" className="form-control rounded-4 border-0" placeholder="Temasy" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <textarea name="comment" className="form-control rounded-4 border-0" rows="6" placeholder="Mazmuny"></textarea>
                                </div>
                                <div className="col-xl-5 mb-4 text-center">
                                    <button className="btn btn-primary px-5 rounded-5" type="submit">Ugrat</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-5">
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-2 bg-primary text-white p-3 rounded-circle" />
                                <div className="fw-semibold">+993 65 12-34-56</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-2 bg-primary text-white p-3 rounded-circle" />
                                <div className="fw-semibold">+993 65 12-34-56</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2 bg-primary text-white p-3 rounded-circle" />
                                <div className="fw-semibold">Aşgabat ş., Oguzhan köç., 13 "A"</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faClock} className="me-2 bg-primary text-white p-3 rounded-circle" />
                                <div className="fw-semibold">09:00-dan, 22:00 çenli</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 bg-primary text-white p-3 rounded-circle" />
                                <div className="fw-semibold">it@sanly.tm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home