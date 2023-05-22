import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
  state: () => ({
    flashMessage: ""
  }),
  actions: {
    setFlashMessage(message) {
      this.flashMessage = message;
    }
  }
});
