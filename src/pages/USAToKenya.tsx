import { lazy } from "react";
import { Link } from "react-router-dom";
import SinglePost from './Pages3/SinglePost'
import Sidebar from './Pages3/Sidebar'
import './Pages3/single.css'
import ContactContent from "../content/ContactContent.json";
import ScrollToTop from "../common/ScrollToTop";
import TimeLine from "../components/TimeLine/Index";
const Contact = lazy(() => import("../components/ContactForm"));
const Container = lazy(() => import("../common/Container"));

function USAToKeyna() {
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

export default USAToKeyna
