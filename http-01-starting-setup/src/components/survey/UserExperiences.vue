<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading && !errorMsg">Loading...</p>
      <p v-else-if="!isLoading && errorMsg">{{ errorMsg }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiences found. Start adding some
        survey results first.</p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name"
          :rating="result.rating"></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMsg: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch('https://vue-http-demo-e9573-default-rtdb.firebaseio.com/surveys.json').
        then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).
        then((data) => {
          this.isLoading = false;
          console.log(data);
          const results = [];
          for (let id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            })
          }
          this.results = results;
        });
      //return this.results;
    }
  },
  mounted() {
    // component mount olduğunda yani visible olabilir duruma geldiğinde burada ki kod ile sayfada ki butona basmadan da dataları ekrana getirmesini sağlayabiliriz.
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>