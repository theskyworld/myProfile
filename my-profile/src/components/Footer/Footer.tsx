import "//at.alicdn.com/t/c/font_4282296_fv30vrnjk7d.js";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
            </div>

            <div className="footer-iconTop">
                <a href="home">
                    <i>
                        <svg style={{ backgroundColor: "red", width: "1rem", height : "1rem" }} className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-up"></use>
                        </svg>
                    </i>
                </a>
            </div>
        </footer>
    )
}