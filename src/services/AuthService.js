import axios from 'axios';

const API_BASE_URL = 'https://api.mindgym.com';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  register: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, { email, password });
      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/profile`);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/auth/profile`, profileData);
      return response.data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },
};

export default AuthService;
