<template>
    <div class="slide-fifa-conatiner">


        <!-- IMPORTANTE -->
        <!--ESTO PERTENECE AL VUE section_Fifa_InsideFifa  -->
    <div class="sections">
        <div class="section-Fifa">
            <div class="section-img-container">
                <div class="section-img" style="background-image: url('/public/img/section_FIFA+.webp');"></div>

                <div class="texto-fifa">
                    <div class="titulo">
                        <h2>FIFA +</h2>
                    </div>
                    <div class="contenido">
                        <p>Explora la plataforma oficial de streaming de FIFA</p>
                    </div>
                    <div class="boton-fifa">
                        <a class="btn" :href="bannerLink">VER EN FIFA +</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- IMPORTANTE -->
        <!--ESTO PERTENECE AL VUE section_Fifa_InsideFifa  -->



        <div class="slide-conatiner-title">
            <h1>{{ title }}</h1>
        </div>
        <Splide :options="{gap:20, perPage:4, padding:{left:80, right:80}}" class="home-slide">
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/15d92392-4032-41eb-9d5a-9bae788c3f20/479872416?&io=transform:fill,aspectratio:9x16,height:304&quality=75');">
                        <div class="slide-item-text">
                        <h4>Un triplete para los libros</h4>
                        <h5>Revive Estados Unidos v Japón | Canadá 2015</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/3668ae80-6099-4b99-af8d-acfad8961ac5/78982640?&io=transform:fill,aspectratio:9x16,height:304&quality=75');">
                        <div class="slide-item-text">
                        <h4>El inolvidable Neeskens</h4>
                        <h5>Recordando a la leyenda</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/c9d332a0-ac1a-41ab-b2b8-fabfd3e05661/1161470003?&io=transform:fill,aspectratio:9x16,height:320&quality=75');">
                        <div class="slide-item-text">
                        <h4>Segundo título de Alemania en China</h4>
                        <h5>En este día: Alemania v Brasil | China 2007</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/11c12bd1-b6d0-432a-bb11-a5acdfe9755f/1844531726?&io=transform:fill,aspectratio:9x16,height:320&quality=75');">
                        <div class="slide-item-text">
                        <h4>Imparable</h4>
                        <h5>Revive la Copa Confederaciones de la FIFA™</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/67f18e54-ba21-4cad-9cca-92ae7373a86c/Alessandro-Del-Piero-celebrates-scoring-for-Italy-against-Germany-in-the-2006-FIFA-World-Cup-semi-finals?&io=transform:fill,aspectratio:9x16,height:320&quality=75');">
                        <div class="slide-item-text">
                        <h4>Italia en camino</h4>
                        <h5>Revive Alemania vs Italia | Alemania 2006</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/2fc8bda7-9dec-45d8-b7c2-0b02ac1a6730/1994_C_Klinsmann_1-0_GER_BOL?&io=transform:fill,aspectratio:9x16,height:320&quality=75');">
                        <div class="slide-item-text">
                        <h4>Copa del Mundo Jürgen</h4>
                        <h5>Celebrando a Jürgen Klinsmann | 30 de julio</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="slide-item-img-conatiner">
                    <div class="slide-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/fdcfd682-c34d-4dae-922f-91d90ffc0334/Homara-Sawa-Japan-2011-World-Cup-Win-Getty?&io=transform:fill,aspectratio:9x16,height:320&quality=75');">
                        <div class="slide-item-text">
                        <h4>El primer de Japón</h4>
                        <h5>En este día: Japón vs EE. UU. | Alemania 2011</h5>
                        </div>
                    </div>
                </div>
            </SplideSlide>


        </Splide>

        <!-- IMPORTANTE -->
        <!--ESTO PERTENECE AL VUE section_Fifa_InsideFifa  -->
        <div class="sections">
            <div class="section-InsideFifa">
                    <div class="section-img-container">
                        <div class="section-img" style="background-image: url('/public/img/section_InsideFifa.webp');"></div>

                        <div class="texto-fifa">
                            <div class="titulo">
                                <h2>INSIDE FIFA</h2>
                            </div>
                            <div class="contenido">
                                <p>Las últimas noticias de la FIFA y sus 211 federaciones miembro, celebrando el poder del fútbol para unir al mundo.</p>
                            </div>
                            <div class="boton-fifa">
                                <a class="btn" :href="bannerLink">LEER MÁS</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <!-- IMPORTANTE -->
        <!--ESTO PERTENECE AL VUE section_Fifa_InsideFifa  -->


        

        <!-- SEGUNDO CARROUSEL -->
        <div class="home-carrousel-title-container">
            <h2>{{ title }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:6, padding:{left:80, right:80}}" class="home-carrousel">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/e4cb6c7b-1ab9-4f04-8efc-6108472544cc/FIFA-sign-at-the-Home-of-FIFA?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Legal
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/8ae5da14-83b8-48ec-aa11-b4e8c800101c/FIFA-Women-s-Football-Development-Workshop-South-Sudan?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Fútbol Femenino
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/4e9b6d61-afcb-43ca-8495-5023abd2d5ba/Lao-Women-s-league-2023?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Desarrollo del fútbol
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/5e1a76fe-99d0-40a1-922e-4533e4ac9c1a/Switzerland-v-Spain-Round-of-16-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Arbitraje
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/afe8dd23-afe0-4e1f-b9e7-5315226a4865/NEW-ZEALAND-Knowledge-Capture-Brief-FIFA-Women-s-World-Cup-Australia-New-Zealand-2023?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Análisis técnico
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/5ee7f8e3-ad14-4f92-b3d7-8736d48b4c47/FIFA-High-Performance-Football-Performance-Analysis-Insights?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Analyse technique
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/431228a8-af72-4044-bbf6-04715b0fc07c/Manchester-City-v-Fluminense-Final-FIFA-Club-World-Cup-Saudi-Arabia-2023?&io=transform:fill,aspectratio:10x16,height:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Fútbol profesional
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>

    </div>

</template>

<script setup>
    defineProps({
        title:String
    });
</script>