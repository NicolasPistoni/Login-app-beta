import React from 'react'
import styled from 'styled-components'


// con .+ algo mas creo los divs con clases
function Footer() {
    return (
        <FooterContainer className="main-footer">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-3col-sm-6">
                        <h4>Footer</h4>
                        <ul className='list-unstyled' >
                            <li><a href='/'>Informacion</a></li>
                            <li><a href='/'>Pagina de condiciones</a></li>
                            <li><a href='/'>Indice</a></li>
                        
                        </ul>
                        
                        <div className="footer-bottom">
                            <p className='text-xs-center'>
                                &copy;{new Date().getFullYear()} todos los derechos reservados
                            </p>
                        </div>
                        
                    </div>
                    <div className="col-md-3col-sm-6">
                        <ul className='list-unstyled' >
                            <li><a href='/'>Informacion</a></li>
                            <li><a href='/'>Pagina de condiciones</a></li>
                            <li><a href='/'>Indice</a></li>
                        
                        </ul>
                    </div>    
                </div>

               

            </div>
        </div>
        </FooterContainer>
    )
}
export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 0.5%;
    color: var(--mainWhite);
    padding-left: 2rem;
    
    
}

.footer-bottom {
    padding-top: 2rem;
    padding-bottom: 2rem;
    
}

ul li a{
    color:var(--mainGrey);
}



`;