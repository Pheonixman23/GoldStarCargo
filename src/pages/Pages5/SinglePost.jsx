import { Link } from "react-router-dom";
import { lazy } from "react";
import "./singlePost.css";
import Cargo6 from "../../Assets/Cargo6.jpg"
const Container = lazy(() => import("../../common/Container"));

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className ="singlePostImg"
      src={Cargo6} alt="Logo" />
        <h1 className="singlePostTitle">
        How to Use Delivery Address
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        </div>
  <Container>
        
        <p className="singlePostDesc">
        How to Use Delivery address for Gold Star Cargo When ordering products online to ship to Kenya, you need to ensure that orders are made to our Warehouse address correctly.
          <br />
          <br />
          To Order using various websites be careful when entering the name field, and address fields and ensure you enter it manually as follow for the UK:
        </p>
        <br />
          <br />
          <p>
          YOUR FULLNAME + P2K
    <br/>
    <br/>
Access Storage Unit 2379
<br/>
<br/>
145 Boston Road
<br/>
<br/>
London
<br/>
<br/>
W7 3SA
<br/>
<br/>
When ordering to USA ?? ensure you enter it manually as follow for UK
<br/>
<br/>
P2K / Full Name
<br/>
<br/>
609 Main St North
<br/>
<br/>
Lonsdale, Minnesota
<br/>
<br/>
ZIP CODE: 55046
<br/>
<br/>
If there are any issues or errors please contact us on email and ask us for assistance.The information should be  helpful in how to use delivery address when ordering goods online for shipping to Kenya.
          </p>
        </Container>
      </div>
    </div>
  );
}