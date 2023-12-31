import '../styles/Home.css'
import MainImage from '../img/port1.jpg'
import Icons from '../components/Icons'


function Home(){
    return(
        <div className="header-content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src={MainImage}/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Tony </span>
                    A Cybersecurity Practitioner.
                </h1>
                <p>
                    I possess a deep passion for cybersecurity and believe 
                    that safeguarding digital privacy and security plays a critical role in 
                    maintaining a strong relationship between individuals and organizations.
                </p>
                <p>I created this website using ReactJS as a fun way to practice with web
                    development on my spare time. I used AWS Amplify to host and to serve a simple yet
                    efficent CI/CD pipeline. Feel free to check out my blogs and connect 
                    with my on LinkedIn.
                </p>
                <div><Icons/></div>
            </div>
        </div>
    );

}
export default Home;