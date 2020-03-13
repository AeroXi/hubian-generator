var app = new Vue({
    el: '#app',
    data: {
      length: 10
    },
    methods: {
        sentence() {
            text = hu.text
            return text[Math.floor(Math.random() * text.length)]
        },
    },
    computed: {
    
        paragraph() {
            var array = []
            for (i=0;i<this.length;i++){
                array.push(this.sentence())
            }
            return array.join("")
        }
    }
  })