import React, {useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';

//Styles
const Formulario = styled.form`
    display: flex;
    width: 100%;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border: none;
    font-family: 'Lato' sans-serif;
`;

const useFiltro = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            CATEGORIAS: allStrapiCategorias {
              nodes {
                id
                Nombre
              }
            }
        }
    `);

    const categorias = resultado.CATEGORIAS.nodes;

    //State de categoría
    const [categoria, guardarCategoria] = useState('');

    
    const filtroUI = () => (
        <Formulario>
            <Select
                onChange={e => guardarCategoria(e.target.value)}
                value={categoria}
            >
                <option key="" value="">-- Seleccione categoría --</option>
                {categorias.map(opcion => (
                    <option key={opcion.id} value={opcion.Nombre}>{opcion.Nombre}</option>
                ))}
            </Select>
        </Formulario>
    )

    return {
        categoria,
        filtroUI
    }
}
 
export default useFiltro;