// fetch all cars from rapid api
export async function  fetchAllCars() {
    const headers = {
        'X-RapidAPI-Key': 'a5f37a32aemsh8e29c0757128c37p116d2ajsn94fe6f31a139',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {headers})

    const results = await response.json();
    return results;
}