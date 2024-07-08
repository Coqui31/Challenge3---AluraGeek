async function getAPI() {
    try {
        const response = await axios.get('http://localhost:5052/productos');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default getAPI;