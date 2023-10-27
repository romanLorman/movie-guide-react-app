import iconGooglePlay from "../img/footer/google-play.svg";
import iconAppleStore from "../img/footer/apple-store.svg";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__items">
                    <a href="#" className="footer__item">
                        <img src={iconGooglePlay} alt="google-play" />
                    </a>
                    <a href="#" className="footer__item">
                        <img src={iconAppleStore} alt="apple-store"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}