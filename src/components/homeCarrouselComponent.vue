<template>
    <div class="home-carrousel-container">

        <!-- PRIMER CARROUSEL -->
        <div class="home-carrousel-title-container">
            <h2>{{ title2 }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:4, padding:{left:80, right:80}}" class="home-carrousel">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/28a23988-26ad-43c7-9b9a-9c041cb3bde4/Inter-Miami-CF-joins-FIFA-Club-World-Cup-2025-line-up?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        El Inter de Miami CF se suma al elenco de participantes del Mundial de Clubes FIFA 2025™ tras conquistar el Supporters' Shield de la MLS 2024
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/b1a1fea6-578a-4c62-abc6-bc9eff6eb37c/FIFA-Club-World-Cup-2025-Miami-Announcement?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        El presidente de la FIFA declaró que el Inter Miami puede empezar a escribir su propia historia en la escena global al clasificarse para la Copa Mundial de Clubes de la FIFA 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/500760a7-dd94-46af-bdbc-7d054634fcc8/Korea-Republic-v-Colombia-Group-B-FIFA-U-17-Women-s-World-Cup-Dominican-Republic-2024?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Anunciadas las árbitras para la cuarta jornada de la Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/1ee3af84-a939-4fd9-9cac-1812acd17c92/Fans-of-Olimpia-cheer?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Se acelera la carrera por la última plaza sudamericana para el Mundial de Clubes FIFA 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/a622a0c8-9ce6-47f2-8960-6f13ba028801/FIFA-Women-s-Football-Campaign-Puerto-Rico?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        La campaña de promoción del fútbol femenino da resultados por todo el mundo
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/6ef39fd1-2920-47ee-aa4f-33e15a979b51/Spain-v-USA-Group-B-FIFA-U-17-Women-s-World-Cup-Dominican-Republic-2024?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Anunciadas las árbitras para la tercera jornada de la Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/ad341e03-54d1-4e22-bc7a-3ae48fe2f52a/Dominican-Republic-v-Ecuador-Group-A-FIFA-U-17-Women-s-World-Cup-Dominican-Republic-2024?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        El fútbol femenino de Ecuador hace camino al andar en República Dominicana
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>

        <!-- SEGUNDO CARROUSEL -->
        <div class="home-carrousel-title-container">
            <h2>{{ title }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:4, padding:{left:80, right:80}}" class="home-carrousel">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/235ddd27-575c-405c-9568-ef6ef2d05ec4/FPS_FWC26_Hero_PostLaunch?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Mundial de la FIFA 2026™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/eed72d65-8267-4f1e-b4d0-23b357ebe57c/Vision-Goal-6?focuspoint=0.54,0.33&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Intercontinental de la FIFA 2024™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/e5dbf439-5f72-4370-977d-28c8be3f06bf/548_FIFA-FAST_U-17-Women-s-World-Cup-Dominican-Republic-2024-Brand-Launch-Alex-Tournament-Thumbnail-3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Mundial Sub 17 Femenina de la FIFA República Dominicana 2024™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/891e43fe-8fbb-44c7-9863-1680e01e65e7/FIFA-Beach-Soccer-World-Cup-2025-Tournament-Page-Tournament-Thumbnail-3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Mundial de Beach Soccer de la FIFA Seychelles 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/2ec61892-c866-4503-9189-2c6907aa8471/FIFA-com_FCWC25_Tournament-Thumbnail_3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Mundial de Clubes FIFA 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/ac837205-c07b-40d2-96d5-90377479ce1e/FTC-Women-s-Football-Filming-at-HoF?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Mundial Femenina de Futsal de la FIFA 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/4080681d-1806-4ffe-b97b-edb11a48fe54/FIFA-_FWCC-2027_Tournament-Thumbnail_3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Copa Mundial Femenina de la FIFA 2027™
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>


        <!-- TERCER CARROUSEL -->
        <div class="home-carrousel-title-container">
            <h2>{{ title3 }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:6, padding:{left:80, right:80}}" class="home-carrousel man-item">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FFIFACL0101_2.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Réplica autorizada del trofeo de la Copa Mundial de la FIFA™ de 150 mm
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FFIFACL0085_2.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Réplica autorizada de la Copa Jules Rimet de 150 mm
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJAPAN%2520Y3%2520HOME%25201.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Camiseta de local de la selección japonesa Y-3 adidas 2024, hombre
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJAPAN%2520y3%2520Away.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Camiseta de visitante de la selección japonesa Y-3 adidas 2024, hombre
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FMEX%2520PRE%2520MATCH%2520FRONT.png%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Camiseta de calentamiento de la selección mexicana 2024 adidas, hombre
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FJAM%2520AWAY%2520F.png%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Camiseta de segunda de la selección jamaicana 2024 adidas, hombre
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://store.fifa.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FARG%2520Front.png%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%252C%2522applicationId%2522%3A%252201GPYEXET5B7Y61HW8TB4R0YWE%2522%252C%2522tenantId%2522%3A%2522FIFA%2522%257D%2520w%3A%25203840%2520q%3A%252085&w=384&q=85');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        adidas Camiseta Seleccion Argentina 2024 - Hombre
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>


        <!-- CUARTO CARROUSEL -->
        <div class="home-carrousel-title-container">
            <h2>{{ title4 }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:4, padding:{left:80, right:80}}" class="home-carrousel">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/75ed55e7-7808-4a20-bfcc-0a58612a3b4b/548_FIFA-FAST_U-17-Women-s-World-Cup-Dominican-Republic-2024-Brand-Launch-Alex-Registr-your-Interest-Thumbnail-3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Entradas para la Copa Mundial Femenina Sub-17 de la FIFA República Dominicana 2024™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/a91f0bba-8878-4ed6-9545-8b07c502b989/FIFA-Beach-Soccer-World-Cup-2025-Register-Interest-Thumbnail-3840x2160-v01?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Registra tu interés en las entradas para la Copa Mundial de Beach Soccer de la FIFA Seychelles 2025™.
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/adcacf6b-78fc-4dec-aa73-442cc2d30b57/FIFA-com_FCWC25_ROI-in-Ticketing_3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Registra tu interés en entradas para el Mundial de Clubes FIFA 2025™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/59e4c188-da4b-4d78-adc8-bd983fca2e05/FIFA-com_FCWC25_ROI-in-Hospitality_3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Registra tu interés en los paquetes de hospitalidad del Mundial de Clubes FIFA 2025™ 
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/f31ba7a8-1037-4e68-8ff1-fdc6ea290040/FPS_FWC26_Ticketing-Thumb_PostLaunch-2?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Registre su interés en entradas para la Copa Mundial de la FIFA 26™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/355219f3-ae08-4747-9117-bce5b476ad9f/FWC26_Hospitality_Register-your-interest_Thumb?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Inscríbase para recibir información sobre los servicios preferentes oficiales de la Copa Mundial de la FIFA 26™
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/798963dc-7be4-4fd7-9fb9-d2dfefb835a9/FIFA-_FWCC-2027_Register-Interest-Thumbnail_3840x2160?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Registra tu interés en las entradas de la Copa Mundial Femenina de la FIFA 2027™
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>


            <!-- QUINTO CARROUSEL -->
        
        <div class="home-carrousel-title-container">
            <h2>{{ title5 }}</h2>
            <!-- : siginifican que es una variable -->
            <a :href="href">Mostrar todos</a> 
        </div>
        <Splide :options="{gap:20 , perPage:4, padding:{left:80, right:80}}" class="home-carrousel">
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/c8c34270-4630-4992-a478-d2d70cdddd0f/FIFAPLS_PlayZone_Rail_TH_02_FIVES?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        FIVES
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/89d716b1-495a-4ab7-a64c-4bab013deb6d/FIFAPLS_PlayZone_Rail_TH_04-GLOBAL?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Global Goalscorer
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/2ac28735-9298-4cb3-be1a-7037bd941038/FIFAPLS_PlayZone_Rail_TH_05_WHO-AM-I?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Who am I
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/44917a28-1634-450e-8ab2-f2b3a731c035/FIFAPLS_PlayZone_Rail_TH_06_HEAD2HEAD?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        Head to Head
                    </div>
                </a>
            </SplideSlide>
            <SplideSlide>
                <a href="#">
                    <div class="home-carrousel-item-img-container">
                        <div class="home-carrousel-item-img" style="background-image: url('https://digitalhub.fifa.com/transform/45a04cb4-0c13-4abd-8a3b-7bb17bd95ac3/FIFAPLS_PlayZone_Rail_TH_03_TRIVIA?&io=transform:fill,aspectratio:16x9,width:450&quality=75');"></div>
                    </div>
                    
                    <div class="home-carrousel-item-text">
                        TRIVIA
                    </div>
                </a>
            </SplideSlide>
            
        </Splide>


    </div>

</template>

<script setup>
    // defineProps se utiliza en <script setup>
    defineProps({
        title: String,
        href: String,
        title2: String,
        title3:String,
        title4:String,
        title5:String
        
    });
</script>
