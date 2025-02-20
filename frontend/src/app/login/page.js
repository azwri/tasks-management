import Signup from "../components/Signup";

export default function Login() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Login</h3>
                        <form>
                            <div style={{ minHeight: '50px' }}>
                                
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email2" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email2" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password2" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password2" />
                            </div>
                            <button type="submit" className="btn btn-dark">Login</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <Signup />
                    </div>
                </div>
            </div>
        </main>
    );
}