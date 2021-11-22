import { lazy } from "react";
import { Link } from "react-router-dom";
import SinglePost from './Pages2/SinglePost'
import Sidebar from './Pages2/Sidebar'
import './Pages2/single.css'
import ContactContent from "../content/ContactContent.json";
import ScrollToTop from "../common/ScrollToTop";
import TimeLine from "../components/TimeLine/Index";
const Contact = lazy(() => import("../components/ContactForm"));
const Container = lazy(() => import("../common/Container"));

function GermanyToKenya() {
    return (
      <div> 
      <div className="single">
  </div>
    <SinglePost />
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

export default GermanyToKenya
