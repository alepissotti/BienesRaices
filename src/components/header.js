import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/react';

//Components
import Navegacion from './navegacion';

const Header = () => {
    
    //Obtengo el logo del header
    const {logo} = useStaticQuery(graphql`
        query {
            logo : file(relativePath: {eq : "logo.svg"}){
              id
              publicURL
            }
        }
    `);

    
    return ( 
        <header
            css={css`
                background-color: #0D283B;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to={'/'}>
                    <img src={logo.publicURL} alt="Bienes Raices"/>
                </Link>
                <Navegacion/>
            </div>
        </header>
     );
}
 
export default Header;