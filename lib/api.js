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

/*
const colors = [
    {
        name: "Red",
        slug: "red",
        hex: "#FF0000"
    },
    {
        name: "Orange",
        slug: "orange",
        hex: "#FFA500"
    },
    {
        name: "Yellow",
        slug: "yellow",
        hex: "#FFFF00"
    },
    {
        name: "Green",
        slug: "green",
        hex: "#008000"
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

export function getAllVehicles() {
    return vehicles;
}

export function getAllCarSlugs() {
    return vehicles.map((vehicle) => {
        return vehicle.slug;
    });
}
export function getSingleVehicleBySlug(slug) {
    return vehicles.find((vehicle) => {
        return vehicle.slug === slug;
    });
}