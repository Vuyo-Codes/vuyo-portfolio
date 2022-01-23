import "./product.css"
import Project1 from "./img/project1.png"
import Project2 from "./img/project2.png"
import Project3 from "./img/project3.png"
import Project4 from "./img/project4.png"
import Project5 from "./img/project5.png"
import Project6 from "./img/project6.png"

const Product = () => {
    return ( 
        <><div className="p">
            <div className="p-browser">
                <div className="p-circle-r"></div>
                <div className="p-circle-y"></div>
                <div className="p-circle-g"></div>
            </div>

            <a href="https://kayisepetlines.co.za/" target="_blank" rel="noreferrer">
                <img src={Project1} alt="" className="p-img"></img>
            </a>
            <div className="p-footer"><h4>Kayise Petlines</h4></div>
 
        </div><div className="p">
                <div className="p-browser">
                    <div className="p-circle-r"></div>
                    <div className="p-circle-y"></div>
                    <div className="p-circle-g"></div>
                </div>

                <a href="https://trainingacademy.insikafoundation.co.za/" target="_blank" rel="noreferrer">
                    <img src={Project2} alt="" className="p-img"></img>
                </a>
                <div className="p-footer"><h4>Insika Foundation Training Academy</h4></div>

            </div>
    
        <div className="p">
                <><div className="p-browser">
                    <div className="p-circle-r"></div>
                    <div className="p-circle-y"></div>
                    <div className="p-circle-g"></div>
                </div><a href="https://snailattorneys.com/" target="_blank" rel="noreferrer">
                        <img src={Project3} alt="" className="p-img"></img>
                    </a><div className="p-footer"><h4>Snail Attorneys</h4></div></>

            </div><div className="p">
                <div className="p-browser">
                    <div className="p-circle-r"></div>
                    <div className="p-circle-y"></div>
                    <div className="p-circle-g"></div>
                </div>

                <a href="https://zekwandefoundation.co.za/" target="_blank" rel="noreferrer">
                    <img src={Project4} alt="" className="p-img"></img>
                </a>
                <div className="p-footer"><h4>Zekwande Foundation</h4></div>

            </div>
            <div className="p">
                <div className="p-browser">
                    <div className="p-circle-r"></div>
                    <div className="p-circle-y"></div>
                    <div className="p-circle-g"></div>
                </div>

                <a href="https://manalasnail.com/" target="_blank" rel="noreferrer">
                    <img src={Project5} alt="" className="p-img"></img>
                </a>
                <div className="p-footer"><h4>Manala Snail Accounting & Tax</h4></div>

            </div>

            <div className="p">
                <div className="p-browser">
                    <div className="p-circle-r"></div>
                    <div className="p-circle-y"></div>
                    <div className="p-circle-g"></div>
                </div>

                <a href="https://healthdestination.co.za/" target="_blank" rel="noreferrer">
                    <img src={Project6} alt="" className="p-img"></img>
                </a>
                <div className="p-footer"><h4>Health Destination</h4></div>

            </div>
           </>

        
     );
}
 
export default Product ;