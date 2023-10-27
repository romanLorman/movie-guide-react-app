import { Outlet } from "react-router-dom";
import imgPhone from "../img/stay-in-touch/phone.png";

export default function Main() {
    return(
        <main className="main"> 

            <section className="get-started">
                <div className="get-started__container">
                    
                    <div className="get-started__decor get-started__decor_1 decor"></div>
                    <div className="get-started__decor get-started__decor_2 decor"></div>
                    <div className="get-started__decor get-started__decor_3 decor"></div>
        
                    <Outlet/>
                   
                </div>
            </section>

            <section className="stay-in-touch">
                <div className="stay-in-touch__container">
                    
                    <div className="stay-in-touch__media">
                        <div className="media">
                            <div className="media__image">
                                <img src={imgPhone} alt="phone"/>
                            </div>
                            <div className="media__decor media__decor_1 decor"></div>
                            <div className="media__decor media__decor_2 decor"></div>
                            <div className="media__decor media__decor_3 decor"></div>
                        </div>
                    </div>
                    
                    <div className="stay-in-touch__content">
                        <div className="stay-in-touch__block-text block-text">
                            <h2 className="block-text__title">
                                Stay in touch  with Movie<span>Guide</span>
                            </h2>
                            <div className="block-text__text">
                                24x7 Support and user friendly mobile platform. 
                                Signup and be a part of the new movie culture.
                                Build your collection of your favorite movies and series!
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="exclusive-interviews">
                <div className="exclusive-interviews__container">
                    <div className="exclusive-interviews__statistics statistics-exclusive-interviews">
                        <div className="statistics-exclusive-interviews__body body-statistics-exclusive-interviews"> 
                            <div className="body-statistics-exclusive-interviews__item">
                                <div className="body-statistics-exclusive-interviews__value">21,5K+</div>
                                <div className="body-statistics-exclusive-interviews__text">subscribers</div>
                            </div>
                            <div className="body-statistics-exclusive-interviews__item">
                                <div className="body-statistics-exclusive-interviews__value"> 1,8K</div>
                                <div className="body-statistics-exclusive-interviews__text">videos</div>
                            </div>
                            <div className="body-statistics-exclusive-interviews__item">
                                <div className="body-statistics-exclusive-interviews__value">~25m</div>
                                <div className="body-statistics-exclusive-interviews__text">views</div>
                            </div>
                        </div>
                        <div className="statistics-exclusive-interviews__decor_1 decor"></div>
                        <div className="statistics-exclusive-interviews__decor_2 decor"></div>
                        <div className="statistics-exclusive-interviews__decor_3 decor"></div>
                    </div>

                    <div className="exclusive-interviews__body">
                        <div className="exclusive-interviews__content">
                            <div className="exclusive-interviews__block-text block-text">
                                <h2 className="block-text__title">
                                    Watch with us exclusive <span>INTERVIEWS</span>
                                </h2>
                                <div className="block-text__text">
                                    Here are collected those movie stars, 
                                    which acquired the greatest popularity 
                                    and popularity with our viewers.
                                </div>
                        
                            </div>
                        </div>
                        <div className="exclusive-interviews__video">
                            <iframe src="https://www.youtube.com/embed/D4XIsdp_30U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div> 
                    </div>

                </div>
            </section>

        </main>
    )
}