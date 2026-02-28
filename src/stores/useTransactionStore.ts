import { defineStore } from "pinia";

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: []
  })
})