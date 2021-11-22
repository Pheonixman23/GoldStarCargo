import { Link } from "react-router-dom";
import { lazy } from "react";
import "./singlePost.css";
import Cargo1 from "../../Assets/Cargo1.jpg"
const Container = lazy(() => import("../../common/Container"));

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className ="singlePostImg"
      src={Cargo1} alt="Logo" />
        <h1 className="singlePostTitle">
          Uk To Kenya
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        </div>
  <Container>
        
        <p className="singlePostDesc">
        Gold Star Cargo offers an exclusive service for shipping packages to Kenya from the United Kingdom.
          We offer extensive advice and solutions for individuals contacting our company. Our packages are welcome
          to all individuals and businesses.
          <br />
          <br />
       We offer one of the best service packages in terms of cost, safetly and fast deleivery. We will handle 
       your collection and stoage in the Uk. Gold Star Cargo handles your parcel delivery with professionalism and you can expect less hassle from the leading freight company.

Order your items from your favorite online store and we guarantee fast and secure delivery.
        </p>
        </Container>
      </div>
    </div>
  );
}