import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
  state: () => ({
    flashMessage: ""
  }),

  actions: {
    setFlashMessage(message: string) {
      this.flashMessage = message;

      setTimeout(() => {
        this.flashMessage = "";
      }, 3000);
    }
  }
});
