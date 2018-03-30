const url = 'https://randomyoutube.net/api/getvid?api_token=wb8RC5sDl1rV2PagQI34pkhK6gGpYIn1xwI6WPbgFDJeJFLbvFPRBsJukX2S'

const vm = new Vue({
        el: '#app',
        mounted() {
          axios.get(url,{ crossdomain: true })
          .then(response => {
            this.results = response.data
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })
        },
        data: {
          results: [],

        }


      });