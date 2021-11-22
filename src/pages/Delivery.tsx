import { lazy } from "react";
import { Link } from "react-router-dom";
import SinglePost from './Pages5/SinglePost'
import './Pages5/single.css'
const Container = lazy(() => import("../common/Container"));

function Delivery() {
    return (
      <div> 
      <div className="single">
  </div>
    <SinglePost />
    <Container>
   
    </Container>
  </div>
    )
}

export default Delivery
