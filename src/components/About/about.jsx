import "./about.css"
import Code from "./img/code.jpg"

const About = () => {
    return ( 
        <div className="a">
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                  <img src={Code} alt="" className="a-img"/>
              </div>
          </div>
          <div className="a-right">
              <h1 className="a-title">About Me</h1>
              <p className="a-sub">
              A witty, ambitious, detail-oriented team player that's always ready for a challenge.
              </p>
              <p className="a-desc">
              I am a very driven individual determined to gain as much working experience  within the I.T field, 
              as well as launching my own company in the near future based on the skills I have acquired. One of my best 
              traits would be the fact that I give 100% into everything I do and I work well with others. 
              I believe I would be an asset to the Sovtech team if given the chance.  
              </p>
            
          </div>
        </div>
     );
}
 
export default About;