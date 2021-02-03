import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import inicioCSS from '../css/inicio.module.css';

//Styles
const ImageBackGround = styled(BackgroundImage)`
    height : 80px;

    @media (min-width: 768px) {
        height : 200px;
    }
`;

const Encuentra = () => {
    
    const {BANNER} = useStaticQuery(graphql`
        query {
            BANNER : file(relativePath : {eq : "encuentra.jpg"}){
              sharp: childImageSharp {
                  fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
        }
    `);

    
    return ( 
        <ImageBackGround
            fluid={BANNER.sharp.fluid}
            tag='section'
            fadeIn='soft'
        >
            <div 
                className={inicioCSS.imagenbg}
            >
                <h2
                    className={inicioCSS.titulo}
                >Encuentra el hogar de tus sueños</h2>
                <p>15 años de experiencia</p>
            </div>
        </ImageBackGround>
    );
}
 
export default Encuentra;