async function postAPI(producto) {
    try {
        const response = await axios.post(`http://localhost:5052/productos/`, producto);
        location.reload();
        return response.data;
    } catch (error) {
        console.error('Error occurred while posting data:', error);
        throw error;
    }
}

export default postAPI;