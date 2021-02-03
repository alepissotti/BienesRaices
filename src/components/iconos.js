import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';

//Styles
const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;

        img {
            margin-right: 1rem;
        }
    }
`;

const Iconos = ({habitaciones, banios, estacionamiento}) => {
    
    //Consulta para obtener los íconos desde fileSystem
    const {ICONOS} = useStaticQuery(graphql`
        query {
            ICONOS : allFile(filter : {relativeDirectory : {eq : "iconos"}}){
              edges {
                node {
                  id
                  publicURL
                }
              }
            }
        }
    `);

    const iconos = ICONOS.edges;
    
    return ( 
        <ListadoIconos>
            <li>
                <img src={iconos[2].node.publicURL} alt='Icono baño'/>
                <p>{banios}</p>
            </li>
            <li>
                <img src={iconos[1].node.publicURL} alt='Icono estacionamiento'/>
                <p>{estacionamiento}</p>
            </li>
            <li>
                <img src={iconos[0].node.publicURL} alt='Icono dormitorios'/>
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;