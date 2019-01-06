new Vue({
    el: '#app',
    data: {
        title: 'Hello'
    },
    methods: {
        handleChange(event) {
            this.title = event.target.value
        }
    }
});