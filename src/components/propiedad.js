import React from 'react';
import styled from '@emotion/styled';
import {graphql} from 'gatsby';
import GatsbyImage from 'gatsby-image';


//Components
import Iconos from './iconos';
import Layout from './layout';

//Styles
const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media(min-width: 768px) {
        display: flex;
        grid-template-columns: 2fr 1fr;
        column-gap: 3rem;
    }
`;

const SideBar = styled.aside`
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
    .agente {
        margin-top: 4rem;
        padding: 3rem;
        border-radius: 2rem;
        background-color: #75AB00;
        color: #FFF;

        p {
            margin: 0;
        }
    }
`;

export const propiedad = graphql`
    query($id: String!) {
        PROPIEDAD : allStrapiPropiedades(filter: {id: {eq : $id}}){
          nodes{
            Nombre
            Habitaciones
            Estacionamiento
            Banios
            Precio
            Descripcion
            categoria {
              Nombre
            }
            agentes {
              Nombre
              Telefono
              Email
            }
            Imagen {
              sharp: childImageSharp {
                fluid(maxWidth: 1200){
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
`;

const Propiedad = ({ data } ) => {
    
    const propiedad = data.PROPIEDAD.nodes[0];
    const {Nombre, Habitaciones, Estacionamiento, Banios, Precio, 
          Descripcion, agentes, Imagen} = propiedad;

    return ( 
        <Layout>
            <h1>{Nombre}</h1>
            <Contenido>
                <main>
                    <GatsbyImage
                        fluid={Imagen.sharp.fluid}
                    />
                    <p>{Descripcion}</p>
                </main>
                <SideBar>
                    <p className="precio">${Precio}</p>
                    <Iconos
                        habitaciones={Habitaciones}
                        banios={Banios}
                        estacionamiento={Estacionamiento}
                    />
                    <div className="agente">
                        <h2>Vendedor</h2>
                        <p>{agentes.Nombre}</p>
                        <p>Teléfono: {agentes.Telefono}</p>
                        <p>Email: {agentes.Email}</p>
                    </div>
                </SideBar>
            </Contenido>
        </Layout>
     );
}
 
export default Propiedad;