<template>
    <div class="new-main-container">
        <div class="left-container":style="{ backgroundImage: 'url(' + bannerImg + ')'}">
            <div class="left-content">
                <h3>{{bannerTitle}}</h3>
                <p>
                    {{bannerText}}
                </p>
                <a class="btn" :href="bannerLink">SIGUE LA ACCIÓN</a>
            </div>
        </div>

        <div class="right-container">
                <Splide id="News-splide" :options="{ rewind: '100%', height:'calc(90vh - 94px)' }" aria-label="My Favorite Images">
                    <SplideSlide>
                        <div class="splide-item-container" style="background-image: url('/public/img/slide1.webp');">
                            <div class="splide-item-text">
                                <span class="subtitule">
                                DESCUBRE
                            </span>
                            <h5>
                                Planteles oficiales para la Copa Mundial Femenina Sub-17
                            </h5>
                            <p>
                                Ya se conocen los equipos
                            </p>
                            </div>
                            
                        </div>

                    </SplideSlide>
                    <SplideSlide>
                    <div class="splide-item-container" style="background-image: url('/public/img/slide2.webp');">
                        <div class="splide-item-text">
                                <span class="subtitule">
                                DESCUBRE
                            </span>
                            <h5>
                                Planteles oficiales para la Copa Mundial Femenina Sub-17
                            </h5>
                            <p>
                                Ya se conocen los equipos
                            </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                    <div class="splide-item-container" style="background-image: url('/public/img/slide3.webp');">
                        <div class="splide-item-text">
                                <span class="subtitule">
                                DESCUBRE
                            </span>
                            <h5>
                                Planteles oficiales para la Copa Mundial Femenina Sub-17
                            </h5>
                            <p>
                                Ya se conocen los equipos
                            </p>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
        </div>

    </div>
</template>

<script setup>
    const props = defineProps({
        //Img noticia
        newTitle: String,
        newImg: String,
        newText: String,
        newSubtitle: String,
        newLink: String,
        //Img banner izquierda
        bannerImg: String,
        bannerTitle: String,
        bannerText: String,
        bannerLink: String
    })
    

</script>
