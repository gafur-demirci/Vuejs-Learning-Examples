Vue.createApp({
    data() {
        return {
            counter: 0,
            addFive: 5,
            addOne: 1,
            resultText: '',
        }
    },
    watch: {
        counter(value) {
            if (value < 37) this.resultText = 'Not there yet';
            else if (value > 37) this.resultText = 'Too much!';
            else this.resultText = '37';
        }
    },
    methods: {
    updateCounter(value) {
        switch (value) {
            case 5:
                this.counter += 5
                break;
            case 1:
                this.counter += 1
                break;
        }

    }
}

}).mount('#assignment')