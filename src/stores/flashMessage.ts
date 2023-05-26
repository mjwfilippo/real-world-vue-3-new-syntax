import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
  state: () => ({
    flashMessage: null
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
