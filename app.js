// console.log("hello, vue")

// const app = Vue.createApp()

const app = Vue.createApp({
    // data , functions
    // template: '<h2>I am here</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The final epire',
            author:'Brandon snderson',
            age: 45,
            x:0,
            y:0
        };
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            console.log("event")
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');
