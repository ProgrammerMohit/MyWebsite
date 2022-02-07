import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Achievement's & Internship's</h1>
                <p className="pl-desc">
                    These are all my Achievement's & Internship's which i have done till this year.
                </p>
            </div>
            <div className="collections">
                <div className="pl-list1">
                    <img id="p_one" src="i1.jpg" alt="" />
                </div>
                <div className="p-list2">
                    <img id="p_two" src="kick.jpg" alt="" />
                </div>
                <div className="p-list3">
                    <img id="p_three" src="i2.jpg" alt="" />
                </div>
                <div className="p-list4">
                    <img id="p_four" src="snack.jpg" alt="" />
                </div>
                <div className="p-list5">
                    <img id="p_five" src="i3.jpg" alt="" />
                </div>
                <div className="p-list6">
                    <img id="p_six" src="iit.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductList
