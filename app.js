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
            age: 45
        };
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e){
            console.log("event")
            console.log(e,e.type)
        }
    }
});

app.mount('#app');
