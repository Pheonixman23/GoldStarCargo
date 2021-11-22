import { Link } from "react-router-dom";
import "./sidebar.css";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import {Card} from '../../components/Card/index.tsx'
import styled from "styled-components";

const CardContainer = styled.div`
`;


export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Need Help?</h1>
      <CardContainer>
        <Card title={"Contact Us"} date={1} imgUrl={img1} />
      </CardContainer>
    </div>
  );
}