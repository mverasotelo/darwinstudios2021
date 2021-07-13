//cargar pagina
window.onload= function(){
    new Vue({
        el:"#loader",
        data:{
            show:""
        }
    });
}

new Vue({
    el:"#menuDesp",
    data:{
        iconoMenu:"icon fas fa-bars",
        menuClass:"cerrarMenu",
    },
    methods:{
        desplegarMenu: function(){
            if(this.iconoMenu=="icon fas fa-bars"){
                this.iconoMenu="icon fas fa-times";
                this.menuClass="abrirMenu";
                document.body.style.overflow='hidden';
            }else{
                this.cerrarMenu();
            }
        },
        cerrarMenu: function(){
            this.iconoMenu="icon fas fa-bars";
            this.menuClass="cerrarMenu";
            document.body.style.overflow ='auto';
        },
    },
});


Vue.component('venue-card',{
    props: ['image','title','index'],
    template:`<div @click=this.explora.infoEspacio(index) class="grid-elem" v-bind:style="image">
        <div class="filter"></div>
        <div>{{ title }}</div>
        </div>`
})

var explora = new Vue({
    el:"#explora",
    data:{
        venues:[
            {title:"NAVE NICETO", image:"background-image:url(img/Niceto1.jpg)", plano:"img/DarwinStudios_Plano.pdf"},
            {title:"NAVE DARWIN", image:"background-image:url(img/Darwin.jpg)", plano:"img/DarwinStudios_Plano.pdf"},
            {title:"HALL", image:"background-image:url(img/Hall.jpg)", plano:"img/DarwinStudios_Plano.pdf"},
            {title:"NAVE D", image:"background-image:url(img/Fabrica.png)", plano:"img/DarwinStudios_NaveD_Plano.pdf"},
            {title:"STREAMING STUDIO", image:"background-image:url(img/Streaming2.jpeg)"},
            {title:"EXTERIORES", image:"background-image:url(img/Exteriores.jpg)"},
            {title:"ESPACIO 1+1", image:"background-image:url(img/Studio1+1.png)"},
            {title:"LADO B", image:"background-image:url(img/Converse1.jpg)", plano:"img/DarwinStudios_Propuesta_Streaming.pdf"}
        ],
        caracteristicas:[["Dimensiones: 28,65 m x 16,9 m","Superficie: 484 m²","Altura: 9 m, hasta la pasarela técnica","Entrada de vehiculo: 4,68 m x 4,2 m","Espacio sin columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127. Consultar por más capacidad","2 camarines privados","1 sala de vestuario, maquillaje y pelo","Baños","Zona comedor y descanso, con living y mesas","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 41 m x 13 m","Superficie: 533 m²","Altura: 4,2 m","Entrada de vehículo: 4 m x 3,7 m","Espacio con columnas","Tablero Trifásico con 1 toma A63 y 2 tomas A32, con disyuntores independientes","Potencia total: A127. Consultar por más capacidad","2 camarines privados","1 sala de vestuario, maquillaje y pelo","Zona comedor y descanso, con livings y mesas","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 15,61 m x 14,09 m","Superficie: 220 m²","Altura: 4,2 m","Espacio con columnas","Zona comedor y descanso, con livings y mesas","1 camarín privado","1 Sala de vestuario, maquillaje y pelo","Espacio para catering","Baños","Estacionamiento"],
        ["Dimensiones: 33.42 m x 13,79 m","Superficie: 460 m²","Altura: 4,2 m","Planta libre (mesas movibles): 234 m² (24 m x 9,75 m)","Camarines compartidos y privados","Baños","Sala de vestuario, maquillaje y pelo","Zona comedor y descanso, con mesas y livings","Espacio para catering","Estacionamiento"],
        ["Propuesta integral de estudio y técnica, a cargo de Darwin Studios, Repila Corporate y Streamcenter BA","Venue: Nave Niceto","Incluye estacionamiento, exteriores y Hall","Iluminación","Sonido","Video y pantalla LED","Streaming"],
        ["Dimensiones: 43m x 25 m","Superficie: 1075 m²"],
        ["Un espacio único y en continua transformación, compartido por creadores y artistas","Ideal para acciones con formato Tiny Desk"],
        ["Mucho de la arquitectura de la vieja fábrica de muebles Nordiska Companiet aún se conserva en Darwin Studios.","Entre los estudios y las naves, hay escaleras antiguas, pasillos anchos y largos, terrazas, depósitos, salas de máquinas y estructuras de hierro para dejarse sorprender y aprovechar."],
        ],
        caracteristica:"",
        titulo:"",
        popUp:"",
        imagenes:[["img/Niceto1.jpg","img/Niceto2.jpg"],["img/Darwin.jpg"],["img/Hall1.jpg","img/Hall2.jpg"],["img/DStudio1.jpg","img/DStudio2.jpg"],["img/Streaming2.jpeg","img/Streaming3.jpeg","img/Streaming.jpg"],["img/darwin_studios_nosotros.jpg"],["img/Espacio1+1.jpg","img/Espacio1+1.2.jpg"],["img/LadoB1.jpg","img/Converse1.jpg","img/Converse2.jpg","img/Converse3.jpg","img/Converse4.jpg"]],
        tempFoto:0,
        tempEspacio:"",
        imagenEspacio:"",
        plano:"",
        planoHref:"",
        texto:"",
        next:"next icon fas fa-angle-right",
        back:"back icon fas fa-angle-left",
        },
    methods:{
        infoEspacio: function(n){
            this.popUp="popUp";
            this.tempEspacio=n;
            this.titulo=this.venues[n].title;
            this.caracteristica=this.caracteristicas[n];  
            this.imagenEspacio=this.imagenes[n][0];
            document.body.style.overflow='hidden';
            this.agregarPlano(n);
            if(this.imagenes[n].length<2){
                this.next="disabled-icon";
                this.back="disabled-icon";
            }else{
                this.next="next icon fas fa-angle-right";
                this.back="back icon fas fa-angle-left";
            }
        },
        cerrarCuadro: function(){
            this.popUp="";
            document.body.style.overflow ='auto';
            this.plano="";
        },
        pasarFoto: function(){
            if(this.tempFoto<(this.imagenes[n].length)-1){
                this.tempFoto=this.tempFoto+1;
            }
            else{
                this.tempFoto=0;
            }
            this.imagenEspacio=this.imagenes[n][this.tempFoto];
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto=this.tempFoto-1;
            }
            else{
                this.tempFoto=(this.imagenes[this.tempEspacio].length)-1;
            }
            this.imagenEspacio=this.imagenes[this.tempEspacio][this.tempFoto];
        },
        agregarPlano: function(n){
            if(this.venues[n].plano){
                this.plano="plano";
                this.planoHref=this.venues[n].plano;
                if(n==7){
                    this.texto="Ver Propuesta";
                }else{
                    this.texto="Ver Plano";
                }
            }
        },
    },
});

Vue.component('service-card',{
    props: ['title','content'],
    template:`<article class="grid-elem">
    <h4>{{ title }}</h4>
    <h5>{{ content }}</h5>
    </article>`
})

new Vue({
    el:"#services",
    data: {
        services: [
            { title: "Locaciones", content: 'Alquiler por jornada para filmaciones, videoclips, publicidades y producciones de fotografía.' },
            { title: 'Venue', content:'Multiespacio versátil, adaptable  a cualquier tipo de evento y formato: presencial, híbrido o virtual.' },
            { title: 'Streaming', content: 'Estudio equipado con cámaras, luces, música y pantalla LED, para eventos virtuales.'},
            { title: 'In-house  ', content: 'Alquiler de oficinas y estudios privados, mesas compartidas, salas de reunión y depósitos.'}
        ]
    }
})

Vue.component('prod-card',{
    props: ['image','title','artist','index'],
    template:`<div @click="this.producciones.infoTrabajo(index)" class="grid-elem" v-bind:style="image">
        <div class="filter"></div>
        <div>{{ title }}<br>{{ artist }}</div>
        </div>`
})

var producciones = new Vue({
    el:"#producciones",
    data:{
        producciones:[
            {title:"Tupperware", artist:"Stream", image:"background-image:url(img/Tupperware.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Keloke, Mamacita, tu msj (Live Session)", artist:"Khea", image:"background-image:url(img/Keloke.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Danone", artist:"Stream", image:"background-image:url(img/Danone.png)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"OPA", artist:"Dillom", image:"background-image:url(img/Opa.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Nutrition Live - Mars", artist:"Stream", image:"background-image:url(img/Mars.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Te necesito (Live Acoustic)", artist:"Khea, María Becerra", image:"background-image:url(img/Becerra.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Conciencia Connect 3.0 - Merck", artist:"Stream", image:"background-image:url(img/Conciencia.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Perreito Salvaje", artist:"Emilia Mernes", image:"background-image:url(img/Perreito.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Banco Patagonia Singular", artist:"Stream", image:"background-image:url(img/Patagonia.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Lo que hace conmigo", artist:"Chita", image:"background-image:url(img/Chita.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Libre", artist:"Yves Saint Laurent", image:"background-image:url(img/Libre.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Producción fotográfica", artist:"Trueno", image:"background-image:url(img/Trueno.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"UCR", artist:"Stream", image:"background-image:url(img/UCR.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Luz de Mar", artist:"Desfile Verano 2022", image:"background-image:url(img/LuzdeMar.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Química Eventos", artist:"FMK, Emilia Mernes y Estani", image:"background-image:url(img/Quimica.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Buenos Aires BZ", image:"background-image:url(img/BZ.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Sonic GM", artist:"Press day", image:"background-image:url(img/Sonic.jpeg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Esta noche🌙", artist:"FMK, Emilia Mernes y Estani", image:"background-image:url(img/EstaNoche1.jpg)", video:"https://www.youtube.com/embed/8GdGsceR2ps"},
            {title:"Solita RMX", artist:"Mechi Pieretti, Cazzu, La Joaqui", image:"background-image:url(img/SolitaRMX.jpg)", video:"https://www.youtube.com/embed/W2prMZ4Hkwg"},
            {title:"JAE 2020", artist:"BBVA y Mutis Agencia", image:"background-image:url(img/JAEMutis1.png)", video:"https://www.youtube.com/embed/ONabCeBoMFQ"},
            {title:"Perdiste por gil", artist:"Agapornis", image:"background-image:url(img/Agapornis.jpg)", video: "https://www.youtube.com/embed/PU3_T0SA6-o"},
            {title:"You Tube", image:"background-image:url(img/Youtube2.jpg)", video:""},
            {title:"Converse", image:"background-image:url(img/Converse3.jpg)", video:"https://www.youtube.com/embed/0AchE2sciN4"},
            {title:"Comicon", image:"background-image:url(img/Comicon.jpg)", video:"https://www.youtube.com/embed/sscv70vJAkc"},
            {title:"Cyberpunk2077", image:"background-image:url(img/Cyberpunk.jpg)", video:""},
            {title:"Buena Vibra y 1+1", image:"background-image:url(img/BuenaVibra.png)", video: "https://www.youtube.com/embed/1t7J90rAr3I"},
            {title:"Plata Quemada", image:"background-image:url(img/PlataQuemada.jpg)", video: "https://www.youtube.com/embed/SUschdjn0mc"},],
        popUp:"",
        videoUrl:"",
        imagenes:[["img/EstaNoche2.jpg","img/EstaNoche3.jpg"],
        ["img/SolitaRMX1.jpg","img/SolitaRMX2.jpg"],
        ["img/JAE2020-1.jpg","img/JAE2020-2.jpg"],
        ["img/Agapornis1.jpg","img/Agapornis2.jpg"],
        ["img/Youtube1.jpg","img/Youtube3.jpg"],
        [],
        [],
        ["img/Cyberpunk1.jpg","img/Cyberpunk2.jpg"],
        [],
        []],
        imagenTrabajo:"",
        tempFoto:0,
        tempTrabajo:0,
        contenidoTrabajo:"",
        next:"next icon fas fa-angle-right",
        back:"disabled-icon",
    },
    methods:{
        infoTrabajo: function(n){
            //abrir cuadro de la producción
            this.tempTrabajo=n;
            this.popUp="popUp";
            document.body.style.overflow='hidden';
            //manejo de controles
            this.back="disabled-icon";
            //establecer imagen o video inicial
            this.videoUrl=this.producciones[n].video;                
            this.imagenTrabajo=this.imagenes[n][0];
            if(this.imagenes[n].length>0){
                this.cargarFoto();
            }
            else{
                this.cargarVideo();
            }
            //manejo de controles
            if(this.imagenes[this.tempTrabajo].length!=0){
                this.next="next icon fas fa-angle-right";
            }
            else{
                this.next="disabled-icon";
            }
        },
        cerrarCuadro: function(){
            this.popUp="";
            this.contenidoTrabajo="";
            this.tempFoto=0;
            document.body.style.overflow='auto';
            },
        pasarFoto: function(){
            //pasar foto a otra foto
            if(this.tempFoto<(this.imagenes[this.tempTrabajo].length)-1){
                this.tempFoto++;
                this.cargarFoto();
                this.back="back icon fas fa-angle-left";
            }
            else{
                this.next="disabled-icon";
                this.back="back icon fas fa-angle-left";
                if(this.producciones[this.tempTrabajo].video!=""){
                    this.tempFoto++;
                    this.cargarVideo();
                }
            }
        },
        retrocederFoto: function(){
            if(this.tempFoto>0){
                this.tempFoto--;
                if(this.tempFoto==0){
                    this.back="disabled-icon";
                }
            }
            this.next="next icon fas fa-angle-right";
            this.cargarFoto();
        },
        cargarVideo: function(n){
            this.contenidoTrabajo="<iframe src='"+this.producciones[n].video+"' frameborder='0' allow='accelerometer' controls='0'; autoplay allowfullscreen></iframe>";
        },
        cargarFoto: function(){
            this.imagenTrabajo=this.imagenes[this.tempTrabajo][this.tempFoto];
            this.contenidoTrabajo="<img src='"+this.imagenTrabajo+"' alt ='"+this.producciones[this.tempTrabajo].title+"' title='"+this.producciones[this.tempTrabajo]+"'>";
        }
    }
});