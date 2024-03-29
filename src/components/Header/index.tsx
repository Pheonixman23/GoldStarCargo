import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import {
  Link
} from "react-router-dom";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall>
          <Link to="/UkToKeyna"> 
          <Span>{t("Uk To Kenya")}</Span>
          </Link> 
        </CustomNavLinkSmall>


        <CustomNavLinkSmall>
          <Link to="/GermanyToKenya"> 
          <Span>{t("Germany To Kenya")}</Span>
          </Link> 
        </CustomNavLinkSmall>

        <CustomNavLinkSmall>
          <Link to="/USAToKenya"> 
          <Span>{t("USA To Kenya")}</Span>
          </Link> 
        </CustomNavLinkSmall>

        <CustomNavLinkSmall>
          <Link to="/OnlineShopping"> 
          <Span>{t("Online Shopping")}</Span>
          </Link> 
        </CustomNavLinkSmall>

        <CustomNavLinkSmall
          style={{ width: "150px" }}
          onClick={() => scrollTo("contact")}
        >

          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
          
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
           <p style={{
             margin: "0px",
             fontSize:"1.8rem"
           }}>Gold Star Cargo</p>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "1.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
