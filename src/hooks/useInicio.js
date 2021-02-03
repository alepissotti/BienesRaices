import {useStaticQuery, graphql} from 'gatsby';

const useInicio = () => {
    
    const { PAGINA_INICIO } = useStaticQuery(graphql`
        query {
            PAGINA_INICIO : allStrapiPaginas(filter: {Nombre : {eq : "Inicio"}}){
              nodes {
                id
                Nombre
                Contenido
                Imagen {
                  sharp: childImageSharp {
                    fluid(maxWidth: 1200 duotone: {
                        highlight: "#222222", shadow: "#192550", opacity: 30
                    }) {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
        }
    `);

    return PAGINA_INICIO.nodes.map(inicio => ({
        nombre : inicio.Nombre,
        contenido : inicio.Contenido,
        imagen: inicio.Imagen.sharp
    }))[0];
}
 
export default useInicio;