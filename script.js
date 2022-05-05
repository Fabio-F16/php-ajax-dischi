console.log('js ok');


const app = new Vue({
    el: '#app',
    data() {
        return {
            discs: [],
            test: 'ciao'
        }

    },

    mounted() {
        axios.get('./discs.php').then((response) => {
            if (response.status === 200) {
                // console.log(response.data);
                this.discs = response.data;
                console.log(this.discs);
            }
        }).catch(error => console.log(error));
    }

})