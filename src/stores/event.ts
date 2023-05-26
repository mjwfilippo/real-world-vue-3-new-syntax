import { defineStore } from "pinia";
import { EventItem } from "@/types"
import { PropType } from "vue";

export const useEventStore = defineStore("event", {
  state: () => ({
    event: Object as PropType<EventItem>
  })
});
