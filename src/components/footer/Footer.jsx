import React from 'react'
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            <div className="footer__newsletter">
                <div className="footer__newsletter-title">
                    <h1> !Suscríbete a nuestro newsletter</h1>
                    <div className="footer__newsletter-form">
                        <input type="text" placeholder="Siscríbete con tu email" />
                        <div className="footer__newsletter-form-checkbox">
                            <input type="checkbox" />
                            <label htmlFor="">Acepto <span>terminos y condiciones</span>y la <span> Política de Privacidad y Tratamiento de Datos Personales</span></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
