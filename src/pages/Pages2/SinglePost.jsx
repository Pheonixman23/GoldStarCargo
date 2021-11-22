import { Link } from "react-router-dom";
import { lazy } from "react";
import "./singlePost.css";
import Cargo3 from "../../Assets/Cargo3.jpg"
const Container = lazy(() => import("../../common/Container"));

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className ="singlePostImg"
      src={Cargo3} alt="Logo" />
        <h1 className="singlePostTitle">
          Germany To Kenya
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        </div>
  <Container>
        
        <p className="singlePostDesc">
        Gold Star Cargo offers an exclusive service for shipping packages to Kenya from Germany. No matter the size of the shipment, our packages will cover your needs. We will handle your delivery without any hassle from your side.

          <br />
          <br />
          Working with Gold Star Cargo is safe and easy. We are a team of veteran professionals, dedicated to providing high class freight services. We offer packages from Germany to Kenya with the best prices in the frieght industry. Gold Star Cargo will collect your shipment​​​​​​​ and dispatch it to the required destination. We offer client-focused services to ensure safe and reliable delivery.
        </p>
        </Container>
      </div>
    </div>
  );
}