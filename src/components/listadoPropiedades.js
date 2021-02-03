import React, {useEffect,useState} from 'react';
import {css} from '@emotion/react';
import ListadoPropiedadesCSS from '../css/listadoPropiedades.module.css'

//Hooks
import usePropiedades from '../hooks/usePropiedades';

//Components
import PropiedadPreview from './propiedadPreview';

const ListadoPropiedades = () => {
    
    const propiedadesResponse = usePropiedades();
    
    //state de las propiedades
    const [propiedades, guardarPropiedades] = useState([]);

    //useEffect cuando inicia la aplicación
    useEffect(() => {
        guardarPropiedades(propiedadesResponse);
    },[])
    
    return ( 
        <>
            <h2
                css={css`
                margin-top: 5rem;
            `}
            >Nuestras Propiedades</h2>
            <ul
                className={ListadoPropiedadesCSS.propiedades}
            >
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    );
}
 
export default ListadoPropiedades;