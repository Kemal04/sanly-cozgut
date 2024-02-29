
const Login = () => {
    return (
        <>
            <div style={{ height: "100vh" }} className='bg-white d-flex justify-content-center align-items-center'>
                <form className='card border-0 shadow p-5 rounded-5' style={{ backgroundColor: "#323c48" }}>
                    <div className='h2 text-center text-white mx-5 mb-3'>Admin Panel</div>
                    <div className='h5 text-center text-secondary mx-5 mb-5'>Giriş etmek</div>
                    <div className="mb-4">
                        <input name='email' type="email" className="form-control rounded-5 border-0 text-white px-3 py-2" style={{ backgroundColor: "#3b4654" }} placeholder='Email address' />
                    </div>
                    <div className="mb-5">
                        <input name='password' type="password" className="form-control rounded-5 border-0 text-white px-3 py-2" style={{ backgroundColor: "#3b4654" }} placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-5">Giriş</button>
                </form>
            </div>
        </>
    )
}

export default Login