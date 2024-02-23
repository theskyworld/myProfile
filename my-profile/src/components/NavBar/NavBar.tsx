import react, { useEffect } from "react";


export default function NavBar() {

    useEffect(() => {
        const headerElem = document.querySelector("header");
        document.onscroll = () => {
            headerElem?.classList.add("sticky");
        }
    }, [])

    return (
        <header className={"header"}>
            {/* logo */}
            <a href="#" className="logo">我的简历</a>

            {/* 导航按钮 */}
            <nav className="navbar">
                <a href="#home" className="active">首页</a>
                <a href="#services">技能</a>
                <a href="#portfolio">作品</a>
                <a href="#contact">联系</a>
            </nav>
            {/* 亮黑主题切换按钮 */}
            <div className="bx bx-moon" id="darkMode-icon"></div>
            <div className="bx bx-menu" id="menu-icon"></div>
        </header>
    )
}