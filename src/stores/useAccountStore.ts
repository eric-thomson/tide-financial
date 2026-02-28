import { defineStore } from "pinia";

export const useAccounttore = defineStore('accounts', {
  state: () => ({
    accounts: []
  })
})