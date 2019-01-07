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
        handleKey(event) {
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
        setupTitle() {
            // this.title = this.newTitle;
            this.title = 'vaaaaaaa';
            this.title = this.newTitle;
        }
    },
    computed: {
        reversedTitle() {
            return this.title.split('').reverse().join('');
        },
        newTitle() {
            return 'new Title';
        },
        newTitleGetSet: {
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



new Vue({
    el: '#app11',
    data: {
        title: 'Hello 11',
        status: ''

    },
    methods: {
        setupTitle() {
            this.title = 'this.newTitle';
        }
    },
    watch: {
        title(value) {
            this.status = 'changed';
        }
    }


});


new Vue({
    el: '#app12',
    data: {
        title: 'Hello 12',
        activeClass: 'active',
        errorClass: 'error',
        changed: false

    },
    methods: {
        setupTitle() {
            this.changed = !this.changed;
        }
    }


});


new Vue({
    el: '#app13',
    data: {
        title: 'Hello 13',
        stylessss: {
            color: 'white',
            backgroundColor: 'red',
            fontSize: '20px'
        },
        fontNewColor: 'blue',
        fontNewSize: '25px'

    }

});


new Vue({
    el: '#app14',
    data: {

        show: true,

    },
    methods: {

        change() {
            this.show = !this.show;
        }

    }



});


new Vue({
    el: '#app15',
    data: {

        arr: ['one', 'two', 'three'],

        obj: {
            prop1: 'val1',
            prop2: 'val2'
        },

        arrObj: [
            { name: 'aa', sal: 100 },
            { name: 'bb', sal: 200 },
            { name: 'cc', sal: 300 }
        ]

    },

});


const vueModel = new Vue({
    data: {

        title: 'ddddddddddd'

    }

});

vueModel.$mount('#app16');

setTimeout(() => {

    vueModel.$data.title = 'ssssssssss';

}, 2000);



// 17

Vue.component('hello', {

    template: '<h3 @click="handle">{{title}}</h3>',

    data() {
        return {
            title: 'title 17'
        }
    },
    methods: {

        handle() {
            this.title = 'new tit 17'
        }


    }

});

const vueModel2 = new Vue();

vueModel2.$mount('#app17');





// 18

Vue.component('test', {

    template: '<span>inner component</span>'

});



Vue.component('hello18', {

    template: '#hello18',

    data() {
        return {
            title: 'title 18'
        }
    },
    methods: {

        handle() {
            this.title = 'new tit 18'
        }


    }

});

const vueModel3 = new Vue();

vueModel3.$mount('#app18');



// 19

Vue.component('hello19', {

    template: '#hello19',

    data() {
        return {
            title: 'title 19'
        }
    },
    methods: {

        handle() {
            this.title = 'new tit 19'
        }
    },
    components: {
        test:{
            template: '<span>inner component 19</span>'
        }
    },
    mounted(){
        console.log('компонент примонтрован');
        
    }


});

const vueModel4 = new Vue();

vueModel4.$mount('#app19');