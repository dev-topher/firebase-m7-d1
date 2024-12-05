// src/store/index.js
import { createStore } from 'vuex';
import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default createStore({
  state: {
    users: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const snapshot = await getDocs(collection(db, 'users'));
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      commit('setUsers', users);
    },
    async addUser({ commit }, user) {
      const docRef = await addDoc(collection(db, 'users'), user);
      commit('addUser', { id: docRef.id, ...user });
    },
    async deleteUser({ commit }, userId) {
      await deleteDoc(doc(db, 'users', userId));
      commit('deleteUser', userId);
    }
  }
});
