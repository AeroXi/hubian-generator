var app = new Vue({
    el: '#app',
    data: {
      length: 10,
      event: "",
      author: "老李",
      paragraph: "",
    },
    methods: {
        sentence() {
            text = hu.text
            sentence = text[Math.floor(Math.random() * text.length)]
            sentence = sentence.split("$author$").join(this.author)
            sentence = sentence.split("$event$").join(this.event)
            return sentence
        },
        generate(){
            var array = []
            for (i=0;i<this.length;i++){
                var sentence = this.sentence()
                array.push(sentence)
            }
            this.paragraph = array.join("")
            return 
            
        }
    },
    computed: {
    
        
    }
  })
