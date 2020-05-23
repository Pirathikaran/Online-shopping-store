import React from 'react'

const Body =() => (
    <div className=" text-center bg-dark text-white">

          <div id="demo" className="carousel slide" data-ride="carousel">

              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/free-psd/banner-template-style-online-shopping_23-2148537545.jpg?size=626&ext=jpg" class="img-fluid" alt="Image"/> 
                </div>

                <div className="carousel-item">
                  <img src="https://image.freepik.com/free-psd/banner-template-online-shopping_23-2148537543.jpg" class="img-fluid" alt="Image"/> 
                </div>
                
                <div className="carousel-item">
                    <img src="https://image.freepik.com/free-vector/online-shopping-banner_82574-3393.jpg" class="img-fluid" alt="Image"/> 
                                 
                </div>
              </div>
            
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </a>

              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
              </a>
            
          </div>
            
      </div>
 )

export default Body;