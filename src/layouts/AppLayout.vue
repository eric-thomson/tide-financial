<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
        <v-list>
            <v-list-item
                v-for="item in navItems"
                :key="item.title"
                :to="item.route"
                link
            >
                <v-list-item-title>
                    {{ item.title }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
        <v-app-bar-nav-icon 
            icon="mdi-menu"
            @click="drawer = !drawer" 
        />
        <v-toolbar-title>Tide Financial</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const drawer = ref(true)

    const navItems = [
        { title: 'Dashboard', route: '/'},
        { title: 'Accounts', route: '/accounts'},
        { title: 'Budgets', route: '/budgets'},
        { title: 'Transactions', route: '/transactions'},
        { title: 'Goals', route: '/goals'},
        { title: 'Insights', route: '/insights'},
        { title: 'Settings', route: '/settings'},
        { title: 'Profile', route: '/profile'},
    ]
</script>