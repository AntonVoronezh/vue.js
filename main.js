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

new Vue({
    el: '#app9',
    
    methods: {
        handleOuter(event) {
            console.log('outer');
            
        },
        handleInner(event) {
            console.log('inner');
            
        },
        handleClick(event) {
            console.log('click');
            
        },
        handleKey(event){
            console.log(event.target.value);
            
        }
    }
});

new Vue({
    el: '#app10',
    data: {
        title: 'Hello 10',
       
    },
    methods: {
        reverseTitle(title) {
            return title.split('').reverse().join('');
            
        },
        setupTitle(){
            // this.title = this.newTitle;
            this.title = 'vaaaaaaa';
            this.title = this.newTitle;
        }
    },
    computed: {
        reversedTitle(){
            return this.title.split('').reverse().join('');
        },
        newTitle(){
            return 'new Title';
        },
        newTitleGetSet:{
            get() {
                return 'new Title Get & Set'
            },
            set(value) {
                console.log('computed ---> ', value);
                this.title = 'setted value'
            }
        }
    }

});