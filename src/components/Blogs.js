import '../styles/Blogs.css'

import Navbar from './Navbar'

function Blogs() {
    return (
        <div>
            <Navbar/>
            <div className="main-content">
                <div className="container">
                    <div className="blogs-content">
                        <div className="main-title">
                            <h2>My <span>Blogs</span><span className="bg-text">My Blogs</span></h2>
                        </div>
                        <div className="blogs">
                            <div className="blog">
                                <img src="img/port6.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        How to Create Your Own Website
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="img/blog1.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        How to Become an Expert in Web Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="img/blog2.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        Become a Web Designer in 10 Days
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <a href="https://example.com">
                                    <img src="img/blog3.jpg" alt=""/>
                                </a>
                                <div className="blog-text">
                                    <h4>
                                        Debbuging made easy with Web Inspector
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="img/port1.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        Get started with Web Design and UI Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="img/port3.jpg" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        This is what you need to know about Web Design
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                        Doloribus natus voluptas, eos obcaecati recusandae amet?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        
);
}

export default Blogs;