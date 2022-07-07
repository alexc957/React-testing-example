export const getData = async (endpoint: string) => {
    return await fetch(endpoint).then(res=> res.json());
}


