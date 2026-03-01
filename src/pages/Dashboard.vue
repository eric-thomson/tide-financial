<template>
  <v-container fluid>
    <h1>Dashboard</h1>
    <div id="dash-summary-cards">
      <v-row class="mb-4">
        <v-col cols="12" lg="3" sm="6">
          <v-card
            class="mx-2"
            outlined>
            <v-card-title>Total Balance</v-card-title>
            <v-card-text>$1239.43</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-card
            class="mx-2"
            outlined>
            <v-card-title>Monthly Spending</v-card-title>
            <v-card-text>$1239.43</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-card
            class="mx-2"
            outlined>
            <v-card-title>Budget Remaining</v-card-title>
            <v-card-text>$5,432.10</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="3" sm="6">
          <v-card
            class="mx-2"
            outlined>
            <v-card-title>Savings Progress</v-card-title>
            <v-card-text>$4,192.67</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>