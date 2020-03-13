var app = new Vue({
    el: '#app',
    data: {
      length: 10,
      event: "",
      author: "老胡",
    },
    methods: {
        sentence() {
            text = hu.text
            return text[Math.floor(Math.random() * text.length)]
        },
        generate(){
            return
        }
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