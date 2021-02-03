import {graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () => {
    
    const {PROPIEDADES} = useStaticQuery(graphql`
        {
            PROPIEDADES: allStrapiPropiedades {
              nodes {
                id
                Nombre
                Habitaciones
                Estacionamiento
                Banios
                Precio
                Descripcion
                Imagen {
                    sharp: childImageSharp {
                        fluid(maxWidth: 600, maxHeight: 400) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                categoria {
                  Nombre
                }
                agentes {
                  Nombre
                  Telefono
                  Email
                }

              }
            }

        }
    `);

    return PROPIEDADES.nodes.map(propiedad => ({
        id : propiedad.id,
        nombre: propiedad.Nombre,
        descripcion: propiedad.Descripcion,
        precio: propiedad.Precio,
        habitaciones: propiedad.Habitaciones,
        banios: propiedad.Banios,
        estacionamiento: propiedad.Estacionamiento,
        imagen: propiedad.Imagen.sharp,
        categoria: propiedad.categoria,
        agentes: propiedad.agentes
    }));
}
 
export default usePropiedades;