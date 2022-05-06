console.log('js ok');


const app = new Vue({
    el: '#app',
    data() {
        return {
            dischi: [],
            test: 'ciao'
        }

    },
    //('"http://localhost/php-ajax-dischi/html/discs.php"')
    // "./discs.php"
    mounted() {
        axios.get("http://localhost/php-ajax-dischi/html/discs.php").then((response) => {

            console.log(response);
            this.dischi = response.data;
            console.log(this.dischi);

        }).catch(error => console.log(error));
    }

})