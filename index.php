<?php
include_once "./header.php";
?>

<div id="loader-wrapper">
    <span class="loader"></span>
</div>

<div id="content">
    <?php
    include_once "./menu.php";
    ?>
    <main>
        <section class="intro">
            <div class="intro_grid size">
                <div class="intro_desc">
                    <h1>Realiza tu sitio web voz <br> fiero tu modoo...</h1>
                    <button class="intro_btn">ver más</button>
                </div>
                <div class="intro_carousel">
                    <div id="introCarouselControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/carousel/C_1.png" class="d-block mx-auto img-fluid" alt="C_1">
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel/C_2.png" class="d-block mx-auto img-fluid" alt="C_2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/carousel/C_3.png" class="d-block mx-auto img-fluid" alt="C_3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="intro_wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#333C4E" fill-opacity="1" d="M0,128L20,144C40,160,80,192,120,181.3C160,171,200,117,240,128C280,139,320,213,360,234.7C400,256,440,224,480,208C520,192,560,192,600,208C640,224,680,256,720,261.3C760,267,800,245,840,234.7C880,224,920,224,960,197.3C1000,171,1040,117,1080,128C1120,139,1160,213,1200,234.7C1240,256,1280,224,1320,197.3C1360,171,1400,149,1420,138.7L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
                </svg>
            </div>
        </section>

        <section class="services size">
            <div class="services_grid">
                <div class="st-1 services_target ">
                    <div class="st_desc-1">
                        <h3>Desarrollo de sitios web</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut perferendis amet voluptas rem possimus eum cupiditate officia ipsum adipisci, quaerat minus dignissimos unde tempora porro harum accusantium autem nisi.</p>
                        <button>ver más</button>
                    </div>
                    <div class="st_img-1">
                        <img src="img/servicios/S-1.png" alt="Services_1">
                    </div>
                </div>
                <div class="st-2 services_target ">
                    <div class="st_desc-2">
                        <h3>Aplicaciones moviles</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut perferendis amet voluptas rem possimus eum cupiditate officia ipsum adipisci, quaerat minus dignissimos unde tempora porro harum accusantium autem nisi.</p>
                        <button>ver más</button>
                    </div>
                    <div class="st_img-2">
                        <img src="img/servicios/S-2.png" alt="Services_1">
                    </div>
                </div>
                <div class="st-3 services_target ">
                    <div class="st_desc-3">
                        <h3>Diseños y MKT Digital</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut perferendis amet voluptas rem possimus eum cupiditate officia ipsum adipisci, quaerat minus dignissimos unde tempora porro harum accusantium autem nisi.</p>
                        <button>ver más</button>
                    </div>
                    <div class="st_img-3">
                        <img src="img/servicios/S-3.png" alt="Services_1">
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>

<div id="cursor">
    <div class="cursor-dot-outline"></div>
    <div class="cursor-dot"></div>
</div>
<script src="js/animation.js"></script>
<?php
include_once "./footer.php";
?>