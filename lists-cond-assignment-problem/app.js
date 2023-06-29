const app = Vue.createApp({
    data() {
        return {
            assignmentList: [],
            task: '',
            isVisible: true,
            country: {
                "name": "Turkiye",
                "population": 85000000
            },
            date: new Date()
        }
    },
    methods: {
        addTask() {
            this.assignmentList.push(this.task)
            this.task = ''
        },
        listVisibilityChange() {
            this.isVisible = !this.isVisible
        },
        toTitleDate(date) {
            console.log(this.date);
        },
        formatDate(date){
            console.log(this.date); 
        }
    },
    computed: {

    },
    watch: {

    }
});

app.mount('#assignment');