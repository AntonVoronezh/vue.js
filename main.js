new Vue({
    el: '#app',
    data: {
        title: 'Hello',
        href: 'google.com',
        link: '<a href="http://aaa.sss">link</a>',

        example8: {
            title: 'Hello 222',
            coordX: 0
        }
    },

    methods: {
        handleChange(event) {
            this.title = event.target.value;
        },
        titleChange(newTitle) {
            this.title = newTitle;
        },
        titleChange8(newTitle, event) {
            this.example8.title = newTitle;
            this.example8.coordX = event.clientX;
        }
    }
});