import "./intro.css"
import Profile from "../img/profile3.jpg"


const Intro = () => {
    return (  
        <div className="i">
             <div className="i-left">
                 <div className="i-left-wrapper">
                     <h2 className="i-intro">Hello, My name is </h2>
                     <h1 className="i-name">Vuyo Matiti</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">
                            Web Developer
                        </div>
                        <div className="i-title-item">
                            UI/UX Designer
                        </div>
                        <div className="i-title-item">
                            Software Engineer
                        </div>
                        <div className="i-title-item">
                            Content Creator
                        </div>
                        <div className="i-title-item">
                            An Awesome Person
                        </div>
                    </div>
                </div>
                <div className="i-desc">
                    I design and develop services for clients, 
                    specializing in mobile applications as well as stylish web applications. 
                </div>
                 </div>
             </div>
             <div className="i-right">
                 <img src={Profile} alt="" className="i-img"></img></div>
           
        </div>
    );
}
 
export default Intro;