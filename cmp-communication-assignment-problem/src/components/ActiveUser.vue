<template>
    <section>
        <!-- <h2>User Name</h2>
        <h3>User Age</h3> -->
        <h2>{{ userName }}</h2>
        <h3>{{ userAge }} Years</h3>
    </section>
</template>

<script>

// burada ki props'lar main App.vue da ve burada ilgili
// component üzerinde belirtilen isimde kullanılacaktır.
// Dikkat!!!
export default {
    props: {
        userName: {
            type: String,
            required: true
        },
        userAge: {
            type: Number,
            required: true
        },
    }
};

</script>

<style>
html {
    font-family: sans-serif;
}

section {
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
}
</style>