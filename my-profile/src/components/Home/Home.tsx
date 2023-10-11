import react from "react";
import homePng from "@/assets/imgs/home.png";
import "//at.alicdn.com/t/c/font_4282296_iuszkxec5df.js"

export default function Home() {

    return (
        <section className="home" id="home">
            <div className="home-content">
                {/* 个人简介 */}
                <h3>Hello, I am</h3>
                <h1>Lucas Franklin</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat similique modi facilis, commodi dolore
                    sed. Laudantium, vitae iure.</p>
                {/* 社交联系方式 */}
                <div className="social-media">
                    <a href="#">
                        <i>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-shoujihao"></use>
                            </svg>
                        </i>
                    </a>
                    <a href="#">
                        <i>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-weixin"></use>
                            </svg>
                        </i>
                    </a>
                    <a href="#">
                        <i>
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-youxiang"></use>
                            </svg>
                        </i>
                    </a>
                </div>
                <a href="#" className="btn">Download CV</a>
            </div>

            {/* 个人专业技能展示动画 */}
            <div className="profession-container">
                <div className="profession-box">
                    {/* profession */}
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 0)" }}>
                        <i className='bx bx-code-alt'></i>
                        <h3>Web Developer</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 1)" }}>
                        <i className='bx bx-camera'></i>
                        <h3>Photographer</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 2)" }}>
                        <i className='bx bx-palette'></i>
                        <h3>Web Designer</h3>
                    </div>
                    <div className="profession" style={{ transform: "rotate(calc(360deg / 4 * 3)" }}>
                        <i className='bx bx-video-recording'></i>
                        <h3>Videographer</h3>
                    </div>

                    <div className="circle"></div>
                </div>

                <div className="overlay"></div>
            </div>

            {/* 个人图像展示 */}
            <div className="home-img">
                <img src={homePng} alt="" />
            </div>
        </section>
    )
}