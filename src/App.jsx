import Intro from "./components/intro";
import About from "./components/About/about";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/contact";
const App = () => {
  return <div>
    <Intro></Intro>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;
};

export default App;