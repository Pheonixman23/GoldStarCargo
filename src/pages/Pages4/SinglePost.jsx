import { Link } from "react-router-dom";
import { lazy } from "react";
import "./singlePost.css";
import Cargo4 from "../../Assets/Cargo4.jpg"
const Container = lazy(() => import("../../common/Container"));

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className ="singlePostImg"
      src={Cargo4} alt="Logo" />
        <h1 className="singlePostTitle">
         Online Shopping
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        </div>
  <Container>
        
        <p className="singlePostDesc">
          Online Shipping with Gold Star Cargo give you the opportunity to order from Amazon, Ebay and other online store
          and use our delivery address. Once the product is purchased we can ship it to Kenya.
          <br />
          <br />
       <Link to="/Delivery"> See our guide </Link> on how to use the delivery address. Once you view our guide to using the delivery address, please notify us directly by email that you made your order.
        </p>
        </Container>
      </div>
    </div>
  );
}