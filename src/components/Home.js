import '../styles/Home.css'
import MainImage from '../img/port1.jpg'
import Icons from './Icons'


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
                    I possess a deep passion for cybersecurity and firmly uphold the belief 
                    that safeguarding digital privacy and security plays a pivotal role in 
                    fostering a strong relationship between individuals and organizations.
                </p>
                <p>I developed this website using ReactJS as a fun way to practice with web
                    development on my spare time. I used AWS Amplify to host this application to serve a simple yet
                    efficent CI/CD pipeline. This website is my testing ground with everything web development related,
                    therefore the content is not necessarily functional.
                </p>
                <div><Icons/></div>
            </div>
        </div>
    );

}
export default Home;