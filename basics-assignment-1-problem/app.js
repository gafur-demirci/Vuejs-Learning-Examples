Vue.createApp({
    data() {
        return {
            name: "John Wick",
            age: 25,
            randomImg: "https://picsum.photos/200/300"
        }
    },
    methods: {
        favNum() {
            return Math.random();
        },
        getName() {
            return this.name;
        }
    }

}).mount('#assignment')