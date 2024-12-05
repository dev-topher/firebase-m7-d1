<!-- src/components/AddUser.vue -->
<template>
    <b-container>
      <b-form @submit.prevent="addUser">
        <b-form-group label="Nombre" label-for="name">
          <b-form-input
            id="name"
            v-model="name"
            type="text"
            placeholder="Ingresa el nombre"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Correo Electrónico" label-for="email">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            placeholder="Ingresa el correo electrónico"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Agregar Usuario</b-button>
      </b-form>
    </b-container>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const store = useStore();
      const name = ref('');
      const email = ref('');
  
      const addUser = async () => {
        const user = { name: name.value, email: email.value };
        await store.dispatch('addUser', user);
        name.value = '';
        email.value = '';
      };
  
      return {
        name,
        email,
        addUser
      };
    }
  };
  </script>
  