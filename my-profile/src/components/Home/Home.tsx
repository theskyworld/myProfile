import react from "react";
import homePng from "@/assets/imgs/home.png";
import "//at.alicdn.com/t/c/font_4282296_iuszkxec5df.js"

export default function Home() {

    const skills = ["Vue", "TypeScript", "Vite", "Nuxt"]

    return (
        <section className="home" id="home">
            <div className="home-content">
                {/* 个人简介 */}
                <h3>Hello, I am</h3>
                <h1>Lucas Franklin</h1>
                {/* 社交联系方式 */}
                <div className="social-media">
                    <div>
                        <a href="#">
                            <i>
                                <svg className="icon" style={{fill:"#000"}}aria-hidden="true">
                                    <use xlinkHref="#icon-shoujihao"></use>
                                </svg>
                            </i>
                        </a>
                        <p>13697956249</p>
                    </div>
                    <div>
                        <a href="#">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-youxiang"></use>
                                </svg>
                            </i>
                        </a>
                        <p>2456450687@qq.com</p>
                    </div>
                </div>
            </div>

            {/* 个人专业技能展示动画 */}
            <div className="profession-container">
                <div className="profession-box">
                    {
                        skills.map((skill, index) => {
                            return (
                                <div key={index} className="profession" style={{ transform: `rotate(calc(360deg / ${skills.length} * ${index})` }}>
                                    <h3>{ skill }</h3>
                                </div>
                            )
                        })
                    }
                    {/* profession */}
                    {/* <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 0)" }}>
                        <h3>Vue</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 1)" }}>
                        <h3>Photographer</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 2)" }}>
                        <h3>Web Designer</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 3)" }}>
                        <h3>Videographer</h3>
                    </div> */}

                    <div className="circle"></div>
                </div>

                <div className="overlay"></div>
            </div>

            {/* 个人图像展示 */}
            <div className="home-img">
                {/* <img src={homePng} alt="" /> */}
            </div>
        </section>
    )
}