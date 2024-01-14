<template>
  <!-- <ul v-for="resource in storedResources" :key="resource.id">
    <h1>{{ resource.title }}</h1>
    <h3>{{ resource.description }}</h3>
    <a :href="resource.link" target="_blank">Open {{ resource.title }}</a>
  </ul> -->
  <resource-item
    v-for="resource in storedResources"
    :key="resource.id"
    :title="resource.title"
    :description="resource.description"
    :link="resource.link"
  ></resource-item>
</template>

<script>
import ResourceItem from './components/resources/ResourceItem.vue';

export default {
  components: {
    ResourceItem,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google',
          link: 'https://www.google.com',
        },
      ],
    };
  },
};
</script>
