const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllVehicles() {
    const data = await fetchAPI(`
    query NewQuery {
        vehicles {
          edges {
            node {
              title
              slug
              featuredImage {
                node {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `);
    return data?.vehicles.edges;
}
export async function getAllVehicleSlugs() {
     const data = await fetchAPI(`
     query NewQuery {
         vehicles {
           edges {
             node {
               slug
             }
           }
         }
       }
     `);
     return data?.vehicles.edges;
}
export async function getVehicleDataBySlug(slug) {
    const data = await fetchAPI(`
    query NewQuery($id: ID!) {
      vehicle(idType: SLUG, id: $id) {
        title
        slug
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sourceUrl(size: LARGE)
          }
        }
        vehicleInformation {
          trimLevels {
            name
            images {
              large {
                altText
                mediaDetails {
                  height
                  width
                }
                sourceUrl
              }
              thumbnail {
                altText
                mediaDetails {
                  height
                  width
                }
                sourceUrl
              }
            }
            mpg {
              hwy
              city
            }
            msrp
          }
        }
      }
    }
    `, {
		variables: {
			"id": slug
		}
})
	return data?.vehicle
}






/*
const vehicles = [
    {
        model: "Crosstrek",
        slug: "crosstrek" 
    },
    {
        model: "Forester",
        slug: "forester"
    },
    {
        model: "Impreza",
        slug: "impreza"
    }
];
*/

const colors = [
    {
        name: "Crystal Black Silica",
        slug: "crystal-black-silica",
        hex: "#000000"
    },
    {
        name: "Cool-Gray Khaki",
        slug: "cool-gray-khaki",
        hex: "#6e7f86"
    },
    {
        name: "Horizon Blue Pearl",
        slug: "horizon-blue-pearl",
        hex: "#557fa9"
    },
    {
        name: "Crystal White Pearl",
        slug: "crystal-white-pearl",
        hex: "#eeeeee"
    },
    {
        name: "Ice Silver Metallic",
        slug: "ice-silver-metallic",
        hex: "#dfdfdf"
    },
    {
        name: "Magnetite Gray Metallic",
        slug: "magnetite-gray-metallic",
        hex: "#5b5e64"
    },
    {
        name: "Pure Red",
        slug: "pure-red",
        hex: "#a51528"
    },
    {
        name: "Plasma Yellow Pearl",
        slug: "plasma-yellow-pearl",
        hex: "#d6c750"
    },
    {
        name: "Desert Khaki",
        slug: "desert-khaki",
        hex: "#cfc8b5"
    },
    {
        name: "Lagoon Blue Pearl",
        slug: "lagoon-blue-pearl",
        hex: "#5293b4"
    }
];

export function getAllColors() {
    return colors;
}

/*
export function getAllVehicles() {
    return vehicles;
}
*/

/*
export function getAllCarSlugs() {
    return vehicles.map((vehicle) => {
        return vehicle.slug;
    });
}
*/
/*
export function getSingleVehicleBySlug(slug) {
    return vehicles.find((vehicle) => {
        return vehicle.slug === slug;
    });
}
*/