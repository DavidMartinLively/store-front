import Product from "../components/product";
import "./catalog.css";


function Catalog(){

    return (
    <div>
        <h1>Catalog!</h1>
        <Product title="apples" />
        <Product title="oranges" />
        
    </div>
    );
}

export default Catalog;

/**
 * create a product component
 * import product in catalog.jsx
 * import Catalog from './catalog';
render a product below h1
 */