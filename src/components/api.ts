import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com'; 

export const gatosAleatoriosAPI = async () => {
  try {
    const response = await axios.get(`${apiUrl}/v1/images/search?limit=10`);
    return response.data;
  } catch (error) {
    throw error;
  }
};