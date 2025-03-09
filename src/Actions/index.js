import * as api from "../API/index.js";

export const Send_Message = (formData) => async () => {
    try {
      console.log(formData);
      const response = await api.SEND_MESSAGE(formData);
      console.log("API Response:", response);
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  };