var app = new Vue(
    {
        el: '#root',
        data: {
            img: ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'],
            indice: 0,
        },
        methods: {
            slidesx: function() {
                this.indice --
                if (this.indice < 0) {
                    this.indice = 3
                }
            },
            slidedx: function() {
                this.indice ++
                if (this.indice > 3) {
                    this.indice = 0
                }
            },
            dot0 : function() {
                this.indice = 0
            },
            dot1 : function() {
                this.indice = 1
            },
            dot2 : function() {
                this.indice = 2
            },
            dot3 : function() {
                this.indice = 3
            }
        },
        mounted() {
            document.querySelector('.row').focus()
        }
    }
)