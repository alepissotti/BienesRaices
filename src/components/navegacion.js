import React from 'react';
import {Link} from 'gatsby';
import styled from '@emotion/styled';

//Styles
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'Lato' sans-serif;
    padding: 0.5rem;
    text-decoration: none;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.link-activo {
        border-bottom: 2px solid #FFF;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName='link-activo'>Inicio</NavLink>
            <NavLink to={'/nosotros'} activeClassName='link-activo'>Nosotros</NavLink>
            <NavLink to={'/propiedades'} activeClassName='link-activo'>Propiedades</NavLink>
        </Nav>
     );
}
 
export default Navegacion;