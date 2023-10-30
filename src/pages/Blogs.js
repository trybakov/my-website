import '../styles/Blogs.css'

import Navbar from '../components/Navbar'

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
                                <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi2.wp.com%2Fstorage.googleapis.com%2Fblog-images-backup%2F1%2As-bQNJcK_-uP92b_yEsU_w.jpeg%3Fssl%3D1&sp=1698690661T91c11eedcc88d0a6c2aa803e1db8439b2f6175f83e013fee3ecf1d50d5db6ba6" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        Setting up a Cloud Native App with Kubernetes
                                    </h4>
                                    <p>
                                        Setting up a cloud native app with GCP and Kubernetes
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F1200%2F1%2AMVZ5xWBD_4cujO5QqxL4GA.jpeg&sp=1698690710T031ffd053a4e79b6cb9cbb92975152aae6c0c3cdbd60d024203d3e9b9f21fbe0" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        RedLine Stealer PCAP analysis
                                    </h4>
                                    <p>
                                        Investigating RedLine Stealer traffic using PcapMonkey and Wireshark
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.iperiusbackup.net%2Fwp-content%2Fuploads%2F2018%2F12%2Fhero_activedirectory.jpg&sp=1698690778T4491f8a89d046818558154fafdff825986566e3bd335e1e682cd084da48e1357" alt=""/>
                                <div className="blog-text">
                                    <h4>
                                        Creating an Active Directory home lab with 2 endpoints
                                    </h4>
                                    <p>
                                        A simple demo on how to setup an AD lab environment to practice infrastructure attacks 
                                    </p>
                                </div>
                            </div>
                            <div className="blog">
                                <a href="https://example.com">
                                    <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fhakin9.org%2Fwp-content%2Fuploads%2F2022%2F04%2Fvapi_logo.jpg&sp=1698690889T35fd75eb6e631c19c85203d612f44fb19c1b34b120a43fc4453ae4e913f62f13" alt=""/>
                                </a>
                                <div className="blog-text">
                                    <h4>
                                        Attacking vAPI
                                    </h4>
                                    <p>
                                        A simple demo using vAPI on the most common REST API vulnerabilities
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