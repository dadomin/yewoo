
<!-- 헤더 -->
<header>
    <a href="/" class="header-logo">YEWOO Entertainment</a>
    <button id="header-menu-open"><i class="fas fa-bars"></i></button>
    <div id="header-menu-back">
        <ul id="header-menu">
            <button id="header-menu-close">X</button>
            <li><a href="/yewoo">YEWOO Entertainment</a></li>
            <li><a href="/">MODEL</a></li>
            <li><a href="/">ACTORS</a></li>
            <li><a href="/">CHEER LEADER</a></li>
            <li><a href="/">BOY GROUP</a></li>
            <li><a href="/">GIRL GROUP</a></li>
        </ul>
    </div>
</header>

<!-- 메인 슬라이드 페이지 버튼 -->
<button id="home-left" class="home-btn"><i class="fas fa-chevron-left"></i></button>
<button id="home-right" class="home-btn"><i class="fas fa-chevron-right"></i></button>

<!-- 메인 슬라이드 페이지 -->
<section id="home-container">   
    <div class="home-1" onclick="location.href='/yewoo';">
        <video autoplay loop muted>
            <source src="/img/page-main.mp4">
        </video>
    </div>
    <div class="home-2">MODEL</div>
    <div class="home-3">ACTORS</div>
    <div class="home-4">CHEER LEADER</div>
    <div class="home-5">BOY GROUP</div>
    <div class="home-6">GIRL GROUP</div>
</section>

<!-- js -->
<script src="/js/home.js"></script>