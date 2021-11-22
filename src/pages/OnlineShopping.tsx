import { lazy } from "react";
import { Link } from "react-router-dom";
import SinglePost from './Pages4/SinglePost'
import './Pages4/single.css'
import ContactContent from "../content/ContactContent.json";
import TimeLine from "../components/TimeLine/Index";
const Container = lazy(() => import("../common/Container"));
const Contact = lazy(() => import("../components/ContactForm"));

function OnlineShopping() {
    return (
      <div> 
      <div className="single">
  </div>
    <SinglePost/>
    {/* <TimeLine/> */}
    <Container>
   <Contact
      title={ContactContent.title}
      content={ContactContent.text}
      id="contact"
    />
    </Container>
  </div>
    )
}

export default OnlineShopping


