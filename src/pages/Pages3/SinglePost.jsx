import { Link } from "react-router-dom";
import { lazy } from "react";
import "./singlePost.css";
import Cargo2 from "../../Assets/Cargo2.jpg"
const Container = lazy(() => import("../../common/Container"));

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className ="singlePostImg"
      src={Cargo2} alt="Logo" />
        <h1 className="singlePostTitle">
          USA To Kenya
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        </div>
  <Container>
        
        <p className="singlePostDesc">
        Gold Star Cargo offers an exclusive service for shipping packages to Kenya from USA. No matter the size of the shipment, our packages will cover your needs. We will handle your delivery without any hassle from your side.

          <br />
          <br />
         We guarantee you will save money and time with the services offered at Gold Star Cargo. No matter the item, we will ship it with care and high priority. Simply use our USA address as your mailing address when you purchase and item. Once you use 
         our USA address as your maling address have your items shipped to Kenya. We offer a flexible freight service by air, land, and sea.
        </p>
        </Container>
      </div>
    </div>
  );
}