import react from "react";


export default function NavBar() {
    return (
        <header className="header">
            {/* logo */}
            <a href="#" className="logo">Profile</a>

            {/* 导航按钮 */}
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
            {/* 亮黑主题切换按钮 */}
            <div className="bx bx-moon" id="darkMode-icon"></div>
            <div className="bx bx-menu" id="menu-icon"></div>
        </header>
    )
}