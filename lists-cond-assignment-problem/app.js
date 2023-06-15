const app = Vue.createApp({
    data() {
        return {
            assignmentList: [],
            task: '',
            isVisible: true
        }
    },
    methods: {
        addTask() {
            this.assignmentList.push(this.task)
            this.task = ''
        },
        listVisibilityChange() {
            this.isVisible = !this.isVisible
        }
    },
    computed: {

    },
    watch: {

    }
});

app.mount('#assignment');