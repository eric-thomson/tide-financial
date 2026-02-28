import { defineStore } from "pinia";

export const useBudgetStore = defineStore('budgets', {
  state: () => ({
    budgets: []
  })
})