console.log('js ok');


const app = new Vue({
    el: '#app',
    data() {
        return {
            discs: [],
            test: 'ciao'
        }

    },
    // http://localhost/php-ajax-dischi/php/data.php
    mounted() {
        axios.get('http://localhost/php/data.php').then((response) => {

            console.log(response);
        }).catch(error => console.log(error));
    }

})