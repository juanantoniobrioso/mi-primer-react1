import { apiClient } from "../api/logs";

export const aboutService = {
  getAboutInfo: async () => {
    const response = await apiClient.get("/about");
    return response.data;
  },

  updateAboutInfo: async (data) => {
    const response = await apiClient.put("/about", data);
    return response.data;
  }
};