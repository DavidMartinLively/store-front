import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product (props) {

    return (
        <div className="product">

            <img src="https://picsum.photos/200/300" alt="" />
            <h5>{props.title}</h5>

            <label>$10.00</label>
            <label>$20.00</label>

            <QuantityPicker />

            <button>Add</button>
        </div>
    )
}

export default Product;

/**
 * create a quantity picker component
 * with button/ label / button
 * 
 * render QuantityPicker on producr component\
 */