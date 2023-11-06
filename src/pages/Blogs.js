import '../styles/Blogs.css'
import ADImage from '../img/ad.jpg'
import CICDImage from '../img/CI-CD.png'
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
                                <a href="https://medium.com/@trandom/active-directory-home-lab-3a47bb630991">
                                    <img src={ADImage} alt=""/>
                                    <div className="blog-text">
                                        <h4>
                                            Creating an Active Directory home lab
                                        </h4>
                                        <p>
                                        A simple demo on how to setup an AD lab environment to practice infrastructure attacks 
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="blog">
                                <a href="https://medium.com/@trandom/create-a-website-with-a-simple-ci-cd-pipeline-using-amplify-and-github-1dd5328178da">
                                    <img src={CICDImage} alt=""/>
                                    <div className="blog-text">
                                        <h4>
                                            Create a website with a simple CI/CD pipeline using Amplify and GitHub
                                        </h4>
                                        <p>
                                        A demo on how to create a simple CI/CD pipeline using GitHub and AWS Amplify for your website or application 
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            </div>
        
);
}

export default Blogs;