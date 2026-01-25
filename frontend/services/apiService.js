// apiService.js A ALTERARRRRRRRRRRRRRRRRR
const API_URL = "https://api.minhaloja.com";

export const apiService = {
  create: async (item) => fetch("/api/items", { method: "POST", body: JSON.stringify(item) }),
  readAll: async () => fetch("/api/items").then(res => res.json()),
  update: async (id, item) => fetch(`/api/items/${id}`, { method: "PUT", body: JSON.stringify(item) }),
  delete: async (id) => fetch(`/api/items/${id}`, { method: "DELETE" })
};
