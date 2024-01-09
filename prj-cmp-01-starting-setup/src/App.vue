<template>
  <ul v-for="resource in storedResources" :key="resource.id">
    <h1>{{ resource.title }}</h1>
    <h3>{{ resource.description }}</h3>
    <a :href="resource.link" target="_blank">Open {{ resource.title }}</a>
  </ul>
</template>

<script>
export default {
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
