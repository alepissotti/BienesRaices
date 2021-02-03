import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';
import inicioCSS from '../css/inicio.module.css';

//Components
import Layout from '../components/layout';
import Encuentra from '../components/encuentra';

//Hooks
import useInicio from '../hooks/useInicio';

//Styles
const ImageBackGround = styled(BackgroundImage)`
    height: 200px;

    @media (min-width: 768px) {
        height: 600px;
    }
`;

const Index = () => {
    
    const {nombre, contenido, imagen} = useInicio();

    
    return ( 
        <Layout>
            <ImageBackGround
                fluid={imagen.fluid}
                tag='section'
                fadeIn='soft'
            >
                <div className={inicioCSS.imagenbg}>
                    <h2
                        className={inicioCSS.titulo}
                    >Venta de casas y departamentos exclusivos</h2>
                </div>
            </ImageBackGround>
            
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 0 auto;
                    `}
                >
                    <h1>{nombre}</h1>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >{contenido}</p>
                </div>
            </main>

            <Encuentra/>
        </Layout>
    );
}
 
export default Index;