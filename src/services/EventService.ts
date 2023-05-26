import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/mjwfilippo/real-world-vue-3-new-syntax",
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application.json"
  }
});

export default {
  getEvents(perPage: string | number, page: string | number) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  },
  getEvent(id: string) {
    return apiClient.get("/events/" + id);
  }
};
