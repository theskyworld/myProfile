import abcdMovie from "@/assets/imgs/abcd-movie.png";
import lightTime from "@/assets/imgs/lightTime.jpg";
import sojump from "@/assets/imgs/sojump.png";
import { useEffect } from "react";
import "//at.alicdn.com/t/c/font_4282296_wnjdqgjjox.js";


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
                        <h4>MovieBoy影视</h4>
                        <p>MovieBoy影视网站,自己独立完成,UI灵感来源于优酷</p>
                        <a href="https://abcdmovie.site">
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
                        <a href="https://vsojump.site">
                            <i>
                                <svg className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-fenxiang"></use>
                                </svg>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="portfolio-box">
                    <img src={lightTime} alt="" style={{width:'400px',height:'200px'}} />
                    <div className="portfolio-layer">
                        <h4>轻时光阅读小程序</h4>
                        <p>包含短文阅读、发表，点赞，微信登录等功能，手机扫描即可进行体验</p>
                    </div>
                </div>
            </div>
        </section>
    )
}