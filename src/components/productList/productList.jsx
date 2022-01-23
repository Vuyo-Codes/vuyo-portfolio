import "./productList.css"
import Product from "../product/product"
//import { products } from "../product/data";

const ProductList = () => {
    return ( 
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Portfolio</h1>
                <h4 className="pl-desc"> These are some of the Web Applications I've worked on. 
             </h4>
            </div>
            <div className="pl-list">
       <Product/>
      
            </div>
        </div>
     );
}
 
export default ProductList;