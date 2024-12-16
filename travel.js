function findTravelRoute(tickets, initialCity) {
    const routes = new Map();

    for (const [source, destination] of tickets) {
        if (!routes.has(source)) {
            routes.set(source, []);
        }
        routes.get(source).push(destination);
    }

    for (const city of routes.keys()) {
        routes.set(city, routes.get(city).sort());
    }

    const route = [];
    let presentCity = initialCity;
    const visited = new Set();

    while (routes.has(presentCity)) {
        if (visited.has(presentCity)) {
            break;
        }
        visited.add(presentCity);
        route.push(presentCity);

        let nextCity = routes.get(presentCity).shift();
        while (nextCity && visited.has(nextCity)) {
            nextCity = routes.get(presentCity).shift();
        }

        if (!nextCity) {
            break;
        }

        presentCity = nextCity;
    }
    
    if (!visited.has(presentCity)) {
        route.push(presentCity);
    }

    return route;
}

const tickets = [
    ["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Amsterdam"],
    ["Berlin", "Kiev"]
];

const initialCity = "Kiev";
const travelRoute = findTravelRoute(tickets, initialCity);
console.log("TravelRoute:", travelRoute);