
new Vue({
    el: 'main',
    data:{
        selectPadre: '1',
        selectHijo: '101',
        listaTotal: [
            {
                titulo: 'Animales',
                index: 1,
                child: [
                    {
                        titulo: 'Gato',
                        index: 101
                    },
                    {
                        titulo: 'Perro',
                        index: 102
                    },
                    {
                        titulo: 'Murciélago',
                        index: 103
                    }
                ]
            },{
                titulo: 'Frutas',
                index: 2,
                child: [
                    {
                        titulo: 'Albaricoque',
                        index: 201
                    },
                    {
                        titulo: 'Cereza',
                        index: 202
                    },
                    {
                        titulo: 'Fresa',
                        index: 203
                    },
                    {
                        titulo: 'Mandarina',
                        index: 204
                    },
                    {
                        titulo: 'Manzana',
                        index: 205
                    },
                    {
                        titulo: 'Melocotón',
                        index: 206
                    },
                    {
                        titulo: 'Melón',
                        index: 207
                    },
                    {
                        titulo: 'Naranja',
                        index: 208
                    },
                    {
                        titulo: 'Níspero',
                        index: 209
                    },
                    {
                        titulo: 'Pera',
                        index: 210
                    },
                    {
                        titulo: 'Piña',
                        index: 211
                    },
                    {
                        titulo: 'Plátano',
                        index: 212
                    },
                    {
                        titulo: 'Pomelo',
                        index: 213
                    },
                    {
                        titulo: 'Sandía',
                        index: 214
                    },
                    {
                        titulo: 'Uva',
                        index: 215
                    }
                ]
            },{
                titulo: 'Colores',
                index: 3,
                child: [
                    {
                        titulo: 'Rojo',
                        index: 301
                    },
                    {
                        titulo: 'Azul',
                        index: 302
                    },
                    {
                        titulo: 'Verde',
                        index: 303
                    },
                    {
                        titulo: 'Amarillo',
                        index: 304
                    },
                    {
                        titulo: 'Violeta',
                        index: 305
                    }
                ]
            }
        ]        
    },
    watch: {
        selectPadre:function () {
        this.selectHijo = this.elementosHijo[0].index
        }
    },
    computed: {
        elementosPadres(){
            return this.listaTotal
        },
        elementosHijo() {
            const list = this.listaTotal.find(item => item.index === parseInt(this.selectPadre) )
            return list ? list.child : []
        }
    }
});