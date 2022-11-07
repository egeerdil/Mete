class Salutation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-primary navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" class="navbar-brand ms-lg-5">
            <img class=" w-20 h-20 rounded" src="img/arti2.png" style="object-fit: cover;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="index.html" class="nav-item nav-link text-white">Ana Sayfa</a>
                <div class="nav-item dropdown">
                    <a href="about.html" class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Kurumsal</a>
                    <div class="dropdown-menu m-0">
                        <a href="about.html" class="dropdown-item">Hakkimizda</a>
                   <!-- <a href="#google" class="dropdown-item">Yönetim</a>       
                        <a href="yonetim.html" class="dropdown-item">Yönetim</a> -->
                        <a href="vizyon.html" class="dropdown-item">Vizyon ve Misyon</a>
                        <a href="ortak.html" class="dropdown-item">Ortaklıklar ve İş Birlikleri</a>
                    </div>
                </div>
                 <div class="nav-item dropdown">
                    <a href="tamamlanan.html" class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Projelerimiz</a>
                    <div class="dropdown-menu m-0">
                        <a href="tamamlanan.html" class="dropdown-item">Tamamlanan</a>
                        <a href="courosel.html" class="dropdown-item">Devam Eden</a>
                   </div>
                </div>
                <a href="product.html" class="nav-item nav-link text-white">Satıştakiler</a>
                <!--<a href="#google">Asagiya git</a>-->
                <a href="contact.html" class="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">İletişim <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </nav>
    
    <!-- Navbar End -->`;
    this.style.color = "grey";
  }
}

customElements.define("salutation-element", Salutation);
