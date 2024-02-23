export default function Contact() {

    return (
        <section className="contact" id="contact">
            <h2 className="heading"><span>联系我</span></h2>

            <div className="social-media">
                <div>
                    <a href="#">
                        <i>
                            <svg className="icon" style={{ fill: '#000' }} aria-hidden="true">
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
        </section>
    )
}