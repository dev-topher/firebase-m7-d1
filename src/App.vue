<!-- src/App.vue -->
<template>
  <b-container class="mt-5">
    <h1 class="mb-4">Gestión de Usuarios</h1>
    <AddUser />
    <UserList />
  </b-container>
</template>

<script>
import AddUser from './components/AddUser.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    AddUser,
    UserList
  }
};
</script>
