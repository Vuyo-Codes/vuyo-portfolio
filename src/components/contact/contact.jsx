import "./contact.css"
//import Contact from "../product/product"
//import { products } from "../product/data";
/*import faFacebook from "./img/facebook.png";
import faLinkedIn from "./img/linkedin.png";*/
//import LinkedIn from "./img/linkedin.png";
import GitHub from "./img/github.png";
import Facebook from "./img/facebook.png";
import LinkedIn from "./img/linkedin.png";
import Instagram from "./img/instagram1.png";
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
const Contact = () => {
    return ( 
        <><div className="c">
            <div className="c-texts">
                <h1 className="c-title">Contact Me</h1>
                <h2 className="c-desc"> Get in Touch.
                </h2>
            </div>

            <div className="c-list">

                <a
                    href="https://github.com/Vuyo-Codes"
                    className="c-github">
                    <img src={GitHub} alt="" className="c-img"></img>
                </a>

                <a
                    href="https://www.facebook.com/vuyo.matiti"
                    className="c-facebook">
                    <img src={Facebook} alt="" className="c-img"></img>
                </a>
                <a href="https://www.linkedin.com/in/vuyo-matiti/" className="c-linkedin">
                    <img src={LinkedIn} alt="" className="c-img"></img>

                </a>
                <a
                    href="https://www.instagram.com/_vuyomatiti/"
                    className="c-instagram">
                    <img src={Instagram} alt="" className="c-img"></img>
                </a>
            </div>
            <div className="c-texts">
                <h1 className="c-title">vuyo.matiti@gmail.com</h1>
                <h2 className="c-desc"> 081 593 7816 | 076 023 9832
                </h2>
            </div>

        </div><div className="c-footer">
            <h3 className="c-footer-title">Created by <span>Vuyo Karabo Matiti</span> </h3> 

            </div></>
        
     );
}



 
export default Contact;