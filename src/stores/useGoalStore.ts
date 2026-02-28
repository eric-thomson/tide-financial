import { defineStore } from "pinia";

export const useGoalsStore = defineStore('goals', {
  state: () => ({
    goals: []
  })
})