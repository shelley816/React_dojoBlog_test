const Navbar = () => {
    return (
        <div className="navbar">
            <h1>The Shelley Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>About</a>
            </div>
        </div>
    );
}
 
export default Navbar;