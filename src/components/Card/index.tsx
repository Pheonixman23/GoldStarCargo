import { CardType } from "./Types";
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText
} from "./CardStyles";
import Tilt from "react-parallax-tilt";

export const Card = ({ title, date, imgUrl }: CardType) => {
  return (
    <Tilt>
      <CardWrapper>
        <CardImage background={imgUrl} />
        <CardTextWrapper>
          <CardTextTitle>{title}</CardTextTitle>
          <CardTextBody>
          Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now
          </CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          {/* <CardStats>
            <div>
              1<sup>m</sup>
            </div>
            <div>read</div>
          </CardStats> */}
          <CardStats>
            <LinkText href="#">Free Quote</LinkText>
          </CardStats>
          <CardStats>
            <LinkText href="#">073238289238</LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    </Tilt>
  );
};
