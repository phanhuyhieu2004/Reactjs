const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Hieu hi</h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{color: "white", background: "deeppink", borderRadius: "8px"}}>New Blog</a>
            </div>
        </nav>
    )

}
export default Navbar;