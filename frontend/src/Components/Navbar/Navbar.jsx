import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 ">
        <div className="container-fluid">
          <img className="logo" src={logo}></img>
          <a
            style={{ fontSize: "33px", fontWeight: "700", color: "#333" }}
            className="navbar-brand"
            href="#"
          >
            Nexora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 gap-4 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Watches
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="icons">
          <i class="ri-shopping-bag-4-line"></i>
          <i class="ri-user-line"></i>
          <i class="ri-moon-line"></i>
        </div>
      </nav>

      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <div className="details-2">
              <h2>Exclusive Deals Await</h2>
              <p>
                Save big on your favorite products with limited-time discounts.
              </p>
              <button className="btn btn-dark">Grab the Deal</button>
            </div>
            <img
              style={{
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="https://t3.ftcdn.net/jpg/02/84/32/52/360_F_284325273_ei2pxwlAyg4ghLOBINFPiF1LVubbfLpA.jpg"
              class="d-block w-100 "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <div className="details-2">
              <h2>Discover the new collection</h2>
              <p>
                Upgrade your style with premium products crafted for everyday
                elegance.
              </p>
              <button className="btn btn-dark">Shop Now</button>
            </div>
            <img
              style={{
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSEApM9T1wSC39OWnnT7Dp-ZQIdiJQk_lu7g5Ci9-a4DNjrQgXHK-GSC0&s=10"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <div className="details-3">
              <h2>Trending This Season</h2>
              <p>
                Explore our best-selling products loved by thousands of happy
                customers.
              </p>
              <button className="btn btn-dark">Explore Collection</button>
            </div>
            <img
              style={{
                height: "500px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHotRgk_0nCksnB4i2JHOs2ZsXLFH_1DtQ-582PEV141YkPlKhUVyMflI&s=10"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
