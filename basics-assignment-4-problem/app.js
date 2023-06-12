const app = Vue.createApp({
    data() {
        return {
            inputClass:'',
            paragrafIsVisible: true,
            inputBgColor: ''
            // isUser1: false,
            // isUser2: false,
            // visiblity: true,
            // bgColor:'',
            // isVisib:''
        }
    },
    computed: {
        paragClasses() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === "user2",
                visible: this.paragrafIsVisible,
                hidden: !this.paragrafIsVisible
            }
        }
    },
    watch: {

    },
    methods: {
        // userInput(text) {
        //     console.log(text)
        //     if(text.target.value === 'user1'){
        //         this.isUser1 = true;
        //         this.isUser2 = false;

        //     }else if(text.target.value === 'user2'){
        //         this.isUser2 = true;
        //         this.isUser1 = false;
        //     }else{
        //         this.isUser1 = false;
        //         this.isUser2 = false;
        //     }
        // },
        // changeVisiblity(event) {
        //     console.log(event);
        //     console.log(this.visiblity);
        //     this.visiblity = !this.visiblity;
        //     console.log(this.visiblity);
        //     if(this.visiblity){
        //         this.isVisib = 'visible'
        //     }else{
        //         this.isVisib = 'hidden'
        //     }

        // },
        changeBgcolor(event){
            console.log(event.target.value);
            this.bgColor = event.target.value;
        },
        toggleParagraphVisibility(){
            this.paragrafIsVisible = !this.paragrafIsVisible;
        }

    }
});

app.mount('#assignment');