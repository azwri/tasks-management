import Link from "next/link";

export default function Header() {
    const isActive = (pathname) => {
        if (typeof window !== 'undefined') {
            return window.location.pathname === pathname ? 'active' : '';
        }
        return '';
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border">
            <div className="container">
                <Link className="navbar-brand" href="/">Tasks</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className={`nav-item nav-link ${isActive('/login')}`} href="/login">Login</Link>
                        <Link className={`nav-item nav-link ${isActive('/task')}`} href="/task">Task</Link>
                        <Link className={`nav-item nav-link ${isActive('/about')}`} href="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}