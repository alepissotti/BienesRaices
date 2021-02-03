import React from 'react';
import styled from '@emotion/styled';
import GatsbyImage from 'gatsby-image';

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
        </Card>
     );
}
 
export default PropiedadPreview;