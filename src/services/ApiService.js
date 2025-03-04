import axios from 'axios';

const API_BASE_URL = 'https://api.mindgym.com';

const ApiService = {
  fetchUserData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/data`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },

  updateUserData: async (userData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/user/data`, userData);
      return response.data;
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error;
    }
  },
};

export default ApiService;
