Vue.createApp({
    data() {
        return {
            userInput:'',
            userInputOnEnter:''
        }
    },
    methods: {
        userInputEvent(event) {
            this.userInput = event.target.value
        },
        userInputOnEnterEvent(event) {
            this.userInputOnEnter = event.target.value
        },
        showCustomAlert() { 
            alert('Dikkat Kamyon Çıkabilir.')
        }
    }

}).mount('#assignment')