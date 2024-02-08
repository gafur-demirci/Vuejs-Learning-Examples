<template>
    <base-dialog v-if="editInput" title="Edit Resource">
        <template v-slot:default>
            <form @submit.prevent="editData">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" ref="titleInput">
                </div>
                <div class="form-control">
                    <label for="description">Description</label>
                    <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
                </div>
                <div class="form-control">
                    <label for="link">Link</label>
                    <input type="url" id="link" name="link" ref="linkInput">
                </div>
            </form>
        </template>
        <template #actions>
            <base-button mode="flat" @click="editResource(id)">Edit</base-button>
        </template>
    </base-dialog>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button mode="flat" @click="removeResource(id)">Delete</base-button>
            </header>
            <p>{{ description }}</p>
            <div id="info">
                <nav>
                    <a :href="link" target="_blank">View Resource</a>
                </nav>
                <base-button mode="flat" @click="openEdit()">Edit</base-button>
            </div>
        </base-card>
    </li>
</template>

<script>
export default {
    data() {
        return {
            editInput: false
        }
    },
    provide() {
        return {
            editInput: this.editInput
        }
    },
    props: ['id', 'title', 'description', 'link'],
    inject: ['removeResource', 'editResource'],
    methods: {
        openEdit() {
            this.editInput = true;
        },
        editInputRes() {
            console.log(this.editInput);
            return this.editInput;
        },
        editData() {
            // const title = this.$refs.titleInput.value;
            // const desc = this.$refs.descriptionInput.value;
            // const link = this.$refs.linkInput.value;
        }
    }
}
</script>

<style scoped>
#info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>