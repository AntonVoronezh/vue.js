new Vue({
    el: '#app',
    data: {
        title: 'Hello',
        href: 'google.com'
    },
    methods: {
        handleChange(event) {
            this.title = event.target.value
        }
    }
});