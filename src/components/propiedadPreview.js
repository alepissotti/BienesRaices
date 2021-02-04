import React from 'react';
import styled from '@emotion/styled';
import GatsbyImage from 'gatsby-image';
import {Link} from 'gatsby';
import convert from 'url-slug';

//Components
import Iconos from './iconos';

//Styles
const Card = styled.div`
    border: 1px solid #E1E1E1;

    img {
        max-width: 100%;
    }
`;

const Contenido = styled.div`
    padding: 2rem;

    h3 {
        font-family: 'Lato' sans-serif;
        font-size: 2.4rem;
        margin: 0 0 2rem 0;

    }

    p {
        font-size: 2rem;
        color: #75AB00;
    }
`;

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75AB00;
    width: 100%;
    color: #FFF;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    display: block;
`;

const PropiedadPreview = ({propiedad}) => {
    
    const {nombre, precio, habitaciones, banios, estacionamiento, imagen} = propiedad;
    
    return ( 
        <Card>
            <GatsbyImage
                fluid={imagen.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>
                <p>$ {precio}</p>
                <Iconos
                    habitaciones={habitaciones}
                    banios={banios}
                    estacionamiento={estacionamiento}
                />
            </Contenido>
            <Boton
                to={convert(nombre)}
            >
            Ver propiedad
            </Boton>
        </Card>
     );
}
 
export default PropiedadPreview;