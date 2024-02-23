import react, { useEffect, useState } from "react";


export default function NavBar() {
    const [curActive, setCurActive] = useState("首页")

    return (
        <header className={"header sticky"}>
            {/* logo */}
            <a href="#" className="logo">我的简历</a>

            {/* 导航按钮 */}
            <nav className="navbar">
                <a href="#home" className={curActive === "首页" ? "active" : ""} onClick={() => setCurActive("首页")}>首页</a>
                <a href="#services" className={curActive === "技能" ? "active" : ""} onClick={() => setCurActive("技能")}>技能</a>
                <a href="#portfolio" className={curActive === "作品" ? "active" : ""} onClick={() => setCurActive("作品")}>作品</a>
                <a href="#contact" className={curActive === "联系" ? "active" : ""} onClick={() => setCurActive("联系")}>联系</a>
            </nav>
            {/* 亮黑主题切换按钮 */}
            <div className="bx bx-moon" id="darkMode-icon"></div>
            <div className="bx bx-menu" id="menu-icon"></div>
        </header>
    )
}