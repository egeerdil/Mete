class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <!-- Footer Start -->
    <div class="container-fluid bg-light mt-5 py-5">
        <div class="container pt-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">İletişim</h5>
                    <p class="mb-4"></p>
                    <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>1593/1 Sokak No:6 C Blok Daire:93 Bayraklı/İzmir</p>
                    <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@artiyatirimas.com</p>
                    <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>0232 464 50 90</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Ana Sayfalar</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-body mb-2" href="index.html"><i class="bi bi-arrow-right text-primary me-2"></i>Ana Sayfa</a>
                        <a class="text-body mb-2" href="about.html"><i class="bi bi-arrow-right text-primary me-2"></i>Hakkımızda</a>
                        <a class="text-body mb-2" href="tamamlanan.html"><i class="bi bi-arrow-right text-primary me-2"></i>Projelerimiz</a>
                        <a class="text-body mb-2" href="product.html"><i class="bi bi-arrow-right text-primary me-2"></i>Satıştakiler</a>
                        <a class="text-body mb-2" href="contact.html"><i class="bi bi-arrow-right text-primary me-2"></i>İletişim</a>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Detay Sayfalar</h5>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-body mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Hakkımızda</a>
                        <a class="text-body mb-2" href="vizyon.html"><i class="bi bi-arrow-right text-primary me-2"></i>Vizyon ve Misyon</a>
                        <a class="text-body mb-2" href="ortak.html"><i class="bi bi-arrow-right text-primary me-2"></i>Ortaklıklar ve İşbirlikleri</a>
                        <a class="text-body mb-2" href="tamamlanan.html"><i class="bi bi-arrow-right text-primary me-2"></i>Tamamlanan Projeler</a>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Size Ulaşalım</h5>
                    <form action="">
                        <div class="input-group">
                            <input type="text" class="form-control p-3" placeholder="Email">
                            <button class="btn btn-primary">Gönder</button>
                        </div>
                    </form>
                    
                    
                </div>
               
            </div>
        </div>
    </div>
    <div class="container-fluid bg-dark text-white-50 py-4">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6 text-center text-md-start">
                    <p class="mb-md-0">&copy; <a class="text-white" href="#">Your Site Name</a>. All Rights Reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="mb-0">Designed by <a class="text-white">HTML Ege Erdil</a></p>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->`;
    this.style.color = "grey";
  }
}

customElements.define("footer-element", Footer);
