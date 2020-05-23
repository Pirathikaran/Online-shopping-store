import React from 'react'

const Footer = () => (
    
    <footer className="footer bg-dark text-white sticky-bottom"><br/>
        <div class="footer-top">
            <div className="container">
                <div className="row">
                    {/* first column */}
                    <div className="col-md-3 footer-links">
                        <div className="row">
                            <div className="col">
                                <h4>Get to Know Us</h4>                        
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                            <a href="https://www.facebook.com/wemonkeymatter" className="text-white">Company</a><br/>
                            <a href="https://www.facebook.com/wemonkeymatter" className="text-white">Contact</a><br/>
                            <a href="https://www.facebook.com/wemonkeymatter" className="text-white">FAQ</a><br/>
                            <a href="https://www.facebook.com/wemonkeymatter" className="text-white">Blog</a><br/>                        
                            </div>
                        </div>
                    </div>
                    {/* second column */}
                    <div className="col-md-3 footer-links">
                        <div className="row">
                            <div className="col">
                                <h4>Contact</h4>      
                                <i className="fas fa-map-marker-alt"></i> No. 621 PERADENIYA ROAD,<br/> KANDY,<br/> SRI LANKA.<br/>
                                <i className="fas fa-phone"></i> Phone: +94 7755 44651<br/>
                                <i className="fas fa-envelope"></i> Email: <a href="info@skygymkandy.lk" class="text-white">info@fashionstore.lk</a>                
                            </div>
                        </div>                        
                    </div>
                    {/* Third column */}
                    <div className="col-md-3 footer-links">
                        <div className="row">
                            <div className="col">
                                <h4>Follow us</h4>                                       
                                <i className="text-white"></i>facebook <br/>
                                <i className="text-white"></i>twitter <br/>
                                <i className="text-white"></i>google <br/>
                                <i className="text-white"></i>instagram <br/>
                            </div>
                        </div>                        
                    </div>
                    {/* fourth column */}
                    <div className="col-md-3 footer-links">
                        <form>
                            <div className="form-group">
                                <label for="email">Thank you for visting us. Please subscribe to our newsletter today.
                                    Want to see more latest Products &amp; Offers?</label>
                                <input type="email" className="form-control" placeholder="Enter Email"></input>
                               </div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-info">Subcribe Now!</button>
                            </div>
                        </form>                                                
                    </div>

                </div>
            </div>
        </div>

        <div className="footer-bottom " >
            <div className="container-fluid text-dark bg-secondary ">
                <div className="row">
                    <div className="container text-center" >
                        <p>Copyrights &copy; 2020 fashion store. All Rights Reserved by <a href="https://www.facebook.com/wemonkeymatter" >Fashion Store</a></p>
                    </div>        
                </div>
            </div>
        </div>
            
    </footer>
);

export default Footer