export const fetchDataArray = async (url) => {
    try {
        const response = await fetch (url);
        return await response.json();
    } catch (err) {
        console.error(`Error in fetchDataArray (${url}) :`, err);
    } 
}