import React, {useEffect,useState} from 'react';
import {css} from '@emotion/react';
import ListadoPropiedadesCSS from '../css/listadoPropiedades.module.css'

//Hooks
import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFiltro';

//Components
import PropiedadPreview from './propiedadPreview';

const ListadoPropiedades = () => {
    
    const propiedadesResponse = usePropiedades();
    
    //state de las propiedades
    const [propiedades] = useState(propiedadesResponse);

    //state del filtro
    const [filtradas, guardarFiltradas] = useState([]);

    //UI del filtro de búsqueda
    const {categoria, filtroUI } = useFiltro();

    //useEffect cuando inicia la aplicación
    useEffect(() => {
        if (categoria) {
            const propiedadesFiltradas = propiedades.filter(propiedad => propiedad.categoria.Nombre === categoria);
            guardarFiltradas(propiedadesFiltradas);
        } else {
            guardarFiltradas(propiedades);
        }
    },[categoria])
    
    return ( 
        <>
            <h2
                css={css`
                margin-top: 5rem;
            `}
            >Nuestras Propiedades</h2>

            {filtroUI()}

            <ul
                className={ListadoPropiedadesCSS.propiedades}
            >
                {filtradas.map(propiedad => (
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