class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <nav class="navbar navbar-expand-md navbar-light">
            <a href="#" class="navbar-brand">vibo store</a>
            <button 
                class="navbar-toggler" 
                type="button"
                data-toggle="collapse" 
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
    }
}

customElements.define("my-header",MyHeader)
class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
    <footer class="footer">
        <h2>VIBRATION STORE</h2>
        <p>Our purpose is to sustainably make the pleasure and <br> benefits of sports accessible to the many</p>
        <div class="social_media">
            <div class="icons">
                <div class="icon">
                    <i class="fa fa-facebook"></i>
                </div>
                <div class="icon">
                    <i class="fa fa-twitter"></i>
                </div>
                <div class="icon">
                    <i class="fa fa-instagram"></i>
                </div>
                <div class="icon">
                    <i class="fa fa-youtube"></i>
                </div>
            </div>

        </div>
    </footer>
        `
    }
}

customElements.define("my-footer",MyFooter)

function feedback(){
    alert("Thank for contacting us ");
    document.getElementsByClassName("full_name").innerHTML="";
    document.getElementsByClassName("email").innerHTML="";
    document.getElementsByClassName("message").innerHTML="";

}