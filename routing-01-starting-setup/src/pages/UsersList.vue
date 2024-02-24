<template>
  <button @click="goTeams">Go Teams</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isSaved: false
    }
  },
  methods: {
    goTeams() {
      // buton üzerinden programaticaly olarak sayfa yönlendirmeleri yapılmak istendiğinde $router ile çalışılmalı.
      this.$router.push('/teams');
    },
    saveChanges() {
      this.isSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('Users beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    if(this.isSaved){
      next();
    }else{
      const userResponse = confirm('Are you sure? You are unsaved changes!');
      next(userResponse);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>