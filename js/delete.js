async function deleteAPI(id) {
    try {
        const response = await axios.delete(`http://localhost:5052/productos/${id}`);
        location.reload();
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default deleteAPI;
