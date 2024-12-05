<!-- src/components/UserList.vue -->
<template>
    <b-container>
      <b-list-group>
        <b-list-group-item
          v-for="user in users"
          :key="user.id"
          class="d-flex justify-content-between align-items-center"
        >
          {{ user.name }} - {{ user.email }}
          <b-button @click="deleteUser(user.id)" variant="danger">Eliminar</b-button>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';
  
  export default {
    setup() {
      const store = useStore();
      const users = computed(() => store.state.users);
  
      const deleteUser = (userId) => {
        store.dispatch('deleteUser', userId);
      };
  
      onMounted(() => {
        store.dispatch('fetchUsers');
      });
  
      return {
        users,
        deleteUser
      };
    }
  };
  </script>
  