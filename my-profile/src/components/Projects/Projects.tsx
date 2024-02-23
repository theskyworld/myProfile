import "//at.alicdn.com/t/c/font_4282296_wnjdqgjjox.js";
import abcdMovie from "@/assets/imgs/abcd-movie.png";
import chatTsw from "@/assets/imgs/chat-tsw.png";
import unitUi from "@/assets/imgs/unit-ui.png";
import portfolio1Jpg from "@/assets/imgs/portfolio1.jpg";
import sojump from "@/assets/imgs/sojump.png";
import { useEffect } from "react";


export default function Projects() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            document.onscroll = () => {
                if (entries[0].intersectionRatio > 0) {
                    document.querySelector(".portfolio-container")?.classList.add("project-show")
                }
            }
        })
        const targetElem = document.querySelector(".portfolio-container")
        if (targetElem) observer.observe(targetElem)
    }, [])
    return (
        <section className="portfolio" id="portfolio">
            <h2 className="heading"><span>我的作品</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box">
                    <img src={abcdMovie} alt="" />
                    <div className="portfolio-layer">
                        <h4>ABCD影视</h4>
                        <p>ABCD影视网站,自己独立完成,UI灵感来源于优酷</p>
                        <a href="http://120.46.94.83/">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={sojump} alt="" />

                    <div className="portfolio-layer">
                        <h4>V问卷</h4>
                        <p>一套实现了问卷编辑、发布,答卷填写、提交,答卷收集、查看的问卷系统</p>
                        <a href="http://120.46.94.83:9001/">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={chatTsw} alt="" />

                    <div className="portfolio-layer">
                        <h4>AI Chat</h4>
                        <p>基于AI的聊天机器人</p>
                        <a href="https://www.chattsw.site/">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={unitUi} alt="" />

                    <div className="portfolio-layer">
                        <h4>Unit UI</h4>
                        <p>使用Vue3编写的UI组件库</p>
                        <a href="https://unituitsw.site/">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={portfolio1Jpg} alt="" />

                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                        <a href="#">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={portfolio1Jpg} alt="" />

                    <div className="portfolio-layer">
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                        <a href="#">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}