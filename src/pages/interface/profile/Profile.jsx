import { Link } from "react-router-dom";
import userImg from "../../../assets/icons/user.jpg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const Profile = () => {

    // const { authState } = useContext(AuthContext);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get(`${import.meta.env.VITE_API_FETCH}/user`, {
    //             headers: {
    //                 accessToken: localStorage.getItem("accessToken"),
    //             },
    //         }).then((res) => {
    //             console.log(res);
    //         })
    //     }
    //     fetchData()
    // }, [])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="container">
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-4">
                            <img src={userImg} alt="" className="img-fluid rounded-5" />
                        </div>
                        <div className="col-xl-8">
                            <div className="ms-5">
                                <div className="bg-dark rounded-5 d-inline py-1 px-3 text-white">Designer</div>
                                <div className="display-5 mt-4">Men, <span className="fw-semibold fst-italic">Kemal</span></div>
                                <table className="w-100 mt-4 fs-18" style={{ lineHeight: "50px" }}>
                                    <tbody>
                                        <tr>
                                            <th>Ady</th>
                                            <td>Kemal</td>
                                        </tr>
                                        <tr>
                                            <th>Familýasy</th>
                                            <td>Hojaýew</td>
                                        </tr>
                                        <tr>
                                            <th>Telefon belgisi</th>
                                            <td>+993 63 29-78-77</td>
                                        </tr>
                                        <tr>
                                            <th>E-mail adresi</th>
                                            <td>kemalhojayew04@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link to='' className="btn btn-primary py-2 px-5 rounded-5 mt-5">Üýtget</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile