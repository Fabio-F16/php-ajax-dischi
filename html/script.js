console.log('js ok');


const app = new Vue({
    el: '#app',
    data() {
        return {
            discs: [],
            test: 'ciao'
        }

    },
    //('"http://localhost/php-ajax-dischi/php/data.php"')
    mounted() {
        axios.get("./discs.php").then((response) => {

            console.log(response);
            this.discs = response.data;
            console.log(this.discs);

        }).catch(error => console.log(error));
    }

})