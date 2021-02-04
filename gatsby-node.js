const urlSlug = require('url-slug');

exports.createPages = async({actions, graphql, reporter}) => {

    const resultado = await graphql(`

        query {
            PROPIEDADES : allStrapiPropiedades {
              nodes {
                id
                Nombre
              }
            }
        }
    `);

    //En caso de que no haya resultados informo error
    if (!resultado) {
        reporter.panic('Hubo un error al obtener las propiedades', reporter.errors);
    }

    //En caso de que haya obtenido las propiedades
    else {
        const propiedades = resultado.data.PROPIEDADES.nodes;
        
        propiedades.forEach(propiedad => {
           actions.createPage({
               path: urlSlug(propiedad.Nombre),
               component: require.resolve('./src/components/propiedad.js'),
               context: {
                   id: propiedad.id
               }
           }) 
        });
    }
}
