import React from 'react'

import "./Home.css"


function Home() {
    return (
        <div className="home">
            <div className="home__banner-top">
                <img src="https://i.linio.com/cms/269544f6-b1dd-11eb-a37a-ee2255d3cf9f.webp" alt="banner-top-img" />
            </div>
            <div className="home__carousel">
                <div className="carousel slide" id="homeCarousel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/12f7e1fd9b5e2__ONBBE_05_V02.jpg" alt="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/324a1d88c2e14__onBB_02.jpg" alt="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.linio.com/cms/43746e5e-b2cc-11eb-9d61-06372216eefd.webp" alt="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/27c142f786076__onBBE_04.jpg" alt="carousel-img" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/324a1d88c2e14__onBB_02.jpg" alt="carousel-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__categories">
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/2f8327abebeca__MT_Cl_03.jpg" alt="carousel-category-img" />
                            </div>
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/351ee8717d888__MT_Cl_04.jpg" alt="carousel-category-img" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/1c9fbe5b3f360__MiniTS_01.jpg" alt="carousel-category-img" />
                            </div>
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/2593c4dc959c4__MiniTS_02.jpg" alt="carousel-category-img" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/22414df57c8e2__MT_Cl_02.jpg" alt="carousel-category-img" />
                            </div>
                            <div>
                                <img src="https://dynamic-yield.linio.com//api/scripts/8767679/images/944284f7210a__MT_Cl_01.jpg" alt="carousel-category-img" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Link></Link>
                <Link></Link>
                <Link></Link> */}
            </div>
            <div className="home__limitedProducts">
                <h1>PRODUCTOS LINTERNACIONALES POR TIEMPO LIMITADO</h1>
                <div className="home__limitedProducts-background"></div>
            </div>
        </div>
    )
}

export default Home
