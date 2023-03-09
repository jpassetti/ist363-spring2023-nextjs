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