import React, { useEffect, useState } from 'react'

import "./Home.css"

const BestProdust = ({ img, title, no_price, price, discount }) => {
    return (
        <div className="bestProducts">
            <img className="bestProducts-img" src={img} alt="" />
            <div className="bestProducts-text px-1 mt-4">
                <h2 className="bestProducts-text-title">{title}</h2>
                {no_price && <p><span className="bestProducts-text-no_price"> {no_price}</span> <span>{discount} </span></p>}
                <p className="bestProducts-text-price">{price}</p>
            </div>
        </div>
    )
}
function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fechData() {
            const products = await fetch("https://fakestoreapi.com/products").then(data => data.json())
            setProducts(products)
            console.log(products)
            return products;
        }
        fechData();
    }, [])

    return (
        <div className="home">
            {
                products.map(product => (
                    <div>
                        <img style={{ maxWidth: "100%", height: "auto" }} src={product.image} alt="" />
                        <p>{product.id}</p>
                    </div>
                ))
            }
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
            <div className="home__collections">
                <h1>colecciones</h1>
                <div className="home__collections__banner_1"></div>
                <div className="home__colletions-categories_1">
                    <div className="home__colletions-category_1"></div>
                    <div className="home__colletions-category_2"></div>
                    <div className="home__colletions-category_3"></div>
                    <div className="home__colletions-category_4"></div>
                </div>
                <div className="home__collections__banner_2"></div>
                <div className="home__collections__banner_3"></div>
                <div className="home__colletions-categories_1">
                    <div className="home__colletions-category_1"></div>
                    <div className="home__colletions-category_2"></div>
                </div>
            </div>
            <div className="home__bestProducts">
                <div className="d-flex">
                    <BestProdust
                        img="https://i.linio.com/p/e24156183300f855c4fa37a0821f59e6-card.webp"
                        title="Cortina Roller Duo Día Noche - Blanco"
                        no_price="19.990"
                        price="14.990"
                        discount="25%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/1dadbc08433aaefa9f2c2481fa733fd6-card.webp"
                        title="Audifonos inalámbricos Xiaomi"
                        no_price="29.990"
                        price="17.990"
                        discount="-40%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/c4ef9a4c4ccf0e739efab63965baf680-card.webp"
                        title="Toma Presion digital Brazo con"
                        no_price="29.990"
                        price="11.990"
                        discount="-60%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/4a9501a1f0889eae3d20a0945248bbf4-card.webp"
                        title="Notebook 14-Cf2051La Intel Core i3-10110U"
                        no_price="459.990"
                        price="439.990"
                        discount="-4%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/30810ba526a60cd3f75d12c068c29f37-card.webp"
                        title="Tommy Girl Tommy Hilfiger Eau de Toilette"
                        no_price="56.998"
                        price="23.990"
                        discount="-57%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/192de0f177dd81f5a89da28fd0f9639c-card.webp"
                        title="Smartphone Galaxy A51 128GB-Púrpura"
                        no_price="329.990"
                        price="209.990"
                        discount="-36%"
                    />
                    <BestProdust
                        img="https://i.linio.com/p/dd3d4704c07fce387f7cc6cd8d9c7534-card.webp"
                        title="Cortina Roller Duo Día Noche - Blanco"
                        no_price="19.990"
                        price="14.990"
                        discount="25%"
                    />
                </div>
            </div>
            <div className="home__banners">
                <div className="home__banner_1"></div>
                <div className="home__banner_2"></div>
                <div className="home__banner_3"></div>
            </div>
        </div>
    )
}

export default Home
