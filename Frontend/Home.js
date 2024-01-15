import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css';
import "./style.css"


const Home = () => {
  return (
    <div>
       <header class="bg-dark mb-3">
       <nav class="navbar navbar-expand-sm bg-dark navbar-dark h-50">
            <div>
              <h4 class="navbar-brand" >Collab</h4>
              <h5 class="navbar-brand text-warning">Learn</h5>
            </div>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-2">
                  <a class="nav-link" href="/login">Login</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="/register">Signup</a>
                </li>
              </ul>
        </nav>
       
          <section class="container-fluid mb-2">           
              <div id="demo" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="Homepic.jpeg" alt="Los Angeles" width="1500" height="500"/>
                    <div class="carousel-caption">
                      <h3>Conceptual clarity</h3>
                      <p>through visualisation</p>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <img src="Homepic2.jpeg" alt="Hoe" width="1500" height="500"/>
                    <div class="carousel-caption">
                      <h3>Personalised </h3>
                      <p>learning programs</p>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <img src="Homepic3.jpeg" alt="New York" width="1500" height="500"/>
                    <div class="carousel-caption">
                      <h3>Unmatched</h3>
                      <p>individual attention</p>
                    </div>   
                  </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
        </section>
        </header>  
                  
          <section>
  <div className="container-fluid">
    <h1 className="text-center text-capitalize pt-3">Services</h1>
    <hr className="w-25 mx-auto pt-2" />
    <div className="row text-center mb-5">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src="experience.jpeg" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Mechanics</h4>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary">
              Start
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src="experience.jpeg" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Algebra</h4>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary">
              Start
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src="experience.jpeg" alt="Card image" />
          <div className="card-body">
            <h4 className="card-title">Science</h4>
            <p className="card-text"></p>
            <a href="" className="btn btn-primary">
              Start
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
<section>
  <footer>
    <div className="container-fluid bg-dark text-light">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-panel1 text-center">
            <ul>
              COLLAB
              <p class="text-warning" id="link">LEARN!</p>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-panel1 text-center">
            <ul>
              <p>HELPFUL LINKS</p>
              <p>Privacy Policy</p>
              <p>About CollabLearn</p>
              <p>Terms & Conditions</p>
            </ul>
          </div>
        </div>
        

        <div className="col-md-3">
          <div className="footer-panel2 ">
            <ul>
              <p>GET IN TOUCH</p>
              <a>Careers Blogs</a>
              <a>About Exams</a>
              <a>Relataded Books</a>
              <a>Science Blogs</a>
            </ul>
          </div>
        </div>

        <div className="col-md-3">
          <div className="footer-panel2">
            <ul>
              <p>CONNECT WITH US</p>
              <a  href="#">Twitter <i className="fa fa-twitter-square"></i></a>
              <a  href="linkedin.com/in/sandesh-tangade-002b67231">Linkedin <i className="fa fa-linkedin"></i></a>
              <a  href="#">Youtube <i className="fa fa-youtube"></i></a>
              <a  href="#">Instagram <i className="fa fa-instagram"></i></a>

            </ul>
          </div>
        </div>

        <div className="col-md-12 mt-4">
          <div className="footer-panel3">
            <div className="copyright text-center">
              Copyright © 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>
    </div>
  );
};

export default Home;
