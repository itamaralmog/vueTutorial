// console.log("hello, vue")

// const app = Vue.createApp()

const app = Vue.createApp({
    // data , functions
    // template: '<h2>I am here</h2>'
    data() {
        return {
            title: 'The final epire',
            author:'Brandon snderson',
            age: 45
        };
    },
    methods: {
        changeTitle(){
            console.log("you clikced me")
            this.title = 'Words or Radiance'
        }
    }
});

app.mount('#app');
