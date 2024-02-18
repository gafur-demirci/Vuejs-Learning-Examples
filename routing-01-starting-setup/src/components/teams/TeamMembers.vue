<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link :to="'/teams/t2'">Go to</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem
  },
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(route) {
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];
      members.forEach(member => {
        this.users.forEach(user => {
          if (user.id === member) selectedMembers.push(user);
        });
      });

      this.teamName = selectedTeam.name;
      this.members = selectedMembers;
    }
  },
  created() {
    // created ise bu sayfa içerisinde ki componentler hazır olduğunda yapılması istenenleri yazmamız için kullanılmalı.
    // this.$route.path -> /teams/t1
    // router config'de verilen : sonraki key ile browser'dan girilen değere erişebiliriz.
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    // use for parameter page in reroute other parameterized page -> teams/t2 page then go inside the page router-link to route teams/t3
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>