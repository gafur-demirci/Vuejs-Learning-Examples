<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="Your Name" v-model="enteredName" />
            <input type="text" placeholder="Your Age" v-model="enteredAge" />
            <button>Set User Data</button>
        </form>

    </section>
</template>

<script>

export default {
    // bu sayfanın hangi eventleri emit edeceğini belirtiriz.
    emits: ['set-data'],
    data() {
        return {
            enteredName: '',
            enteredAge: '',
        };
    },
    methods: {
        submitData() {
            // set-data custom event'ini trigger edeceğini söyleriz.
            // ve buradaki data'dan attr olarak alır.
            this.$emit('set-data', this.enteredName, this.enteredAge);
        },
        clearInput() {
            this.enteredName = '';
            this.enteredAge = '';
        }
    }
};

</script>