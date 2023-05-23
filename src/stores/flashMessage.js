import { defineStore } from "pinia";

export const useFlashMessageStore = defineStore("flashMessage", {
  state: () => ({
    flashMessage: null
  }),

  actions: {
    setFlashMessage(message) {
      this.flashMessage = message;
      console.log(this.flashMessage);

      setTimeout(() => {
        this.flashMessage = "";
      }, 3000);
    }
  }
});
