// console.log("hello, vue")

// const app = Vue.createApp()

const app = Vue.createApp({
    // data , functions
    // template: '<h2>I am here</h2>'
    data() {
        return {
            message: 'I am here'
        };
    }
});

app.mount('#app');
