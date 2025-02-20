export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark text-light text-center p-3">
            <div className="row">
                <div className="col-6">
                    <p>
                        &copy; {currentYear} Task Management Application | Developed by <a href="https://github.com/azwri">Azwri</a>
                    </p>
                </div>

                <div className="col-6">
                    <p className="">Total Views=<code>123</code></p>
                    </div>
            </div>
        </footer>
    );
}