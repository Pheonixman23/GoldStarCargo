import { lazy } from "react";
import { Link } from "react-router-dom";
import SinglePost from './Pages1/SinglePost'
import './Pages1/single.css'
import ContactContent from "../content/ContactContent.json";
import TimeLine from "../components/TimeLine/Index";
const Container = lazy(() => import("../common/Container"));
const Contact = lazy(() => import("../components/ContactForm"));

function UkToKenya() {
    return (
      <div> 
      <div className="single">
  </div>
    <SinglePost/>
    <TimeLine/>
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

export default UkToKenya


