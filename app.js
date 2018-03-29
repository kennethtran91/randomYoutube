const url = "https://randomyoutube.net/api/getvid?api_token=wb8RC5sDl1rV2PagQI34pkhK6gGpYIn1xwI6WPbgFDJeJFLbvFPRBsJukX2S";

const vm = new Vue({
        el: '#app',
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        },
        data: {
          results: [],
        }


      });