export default function Login() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Login</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email</label>
                                <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <h3>Signup</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email</label>
                                <input type="text" className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}