import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

// icons
import * as FiIcons from "react-icons/fi"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
import * as VscIcons from "react-icons/vsc"
import * as AiIcons from "react-icons/ai"




function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(true)
    }

    return (
        <div className="header ">
            <Link
                to="/"
                className="header__menu"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                <FiIcons.FiMenu onClick={handleMenu} />
            </Link>
            <Link to="/" className="header__logo">
                <img src="https://assets.linio.com/assets/images/logos/logo-linio-sm-59514e9d4b.svg" alt="" />
            </Link>
            <div className="header__search">
                <input type="text" placeholder="Buscar productos" />
                <BiIcons.BiSearch />
            </div>
            <Link to="/" className="header__cart">
                <GrIcons.GrCart />
            </Link>
            <div className="header__menu">
                <div
                    className="modal header__menu-content"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className={`modal-dialog ${showMenu && "showMenu"}`}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="btn btn-outline-danger btn-lg mx-3 w-100"> Iniciar Sesión</button>
                                <button className="btn btn-danger btn-lg mx-3 w-100"> Crear Cuenta</button>
                                <button
                                    onClick={() => setShowMenu(false)}
                                    type="button"
                                    className="close-icon  btn"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <div className="wrapper-close-icon">
                                        <GrIcons.GrClose />
                                    </div>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-body-section_1">
                                    <Link to="/">
                                        <VscIcons.VscAccount />
                                        <p> Mi cuenta</p>
                                    </Link>

                                </div>
                                <div className="modal-body-section_2">
                                    <Link to="/">
                                        <AiIcons.AiOutlineAppstore />
                                        <p> Categorías</p>
                                    </Link>
                                </div>
                                <div className="modal-body-section_3">
                                    <Link to="/"><p>Beneficios Linio</p></Link>
                                    <Link to="/"><p>Solo Hoy</p> </Link>
                                    <Link to="/"><p>Solo para Ti</p> </Link>
                                    <Link to="/"><p>App</p> </Link>
                                    <Link to="/"><p>Tiendas Oficiales</p> </Link>
                                    <Link to="/"><p>Vende en Linio</p> </Link>
                                    <Link to="/"><p>Ayuda</p> </Link>
                                    <Link to="/"><p>CMR</p> </Link>
                                    <Link to="/"> <p>CMR Puntos</p> </Link>
                                    <Link to="/"><p>Internacional</p> </Link>
                                </div>
                                <div className="modal-body-section_4">
                                    <Link to="/"><h2>compra desde nuestra app y recibe grandes beneficios</h2></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
