import { H2, P } from "../global";
import { Card, OL, LI, Time, Bullet } from "./styles";
import { schools } from "../../data";

const School = () => {
  return (
    <Card>
      <OL>
        {schools
          .slice()
          .reverse()
          .map((school) => (
            <LI key={school.id}>
              <Bullet />
              <Time>{school.batch}</Time>
              <H2>{school.school}</H2>
              <P>{school.status}</P>
            </LI>
          ))}
      </OL>
    </Card>
  );
};

export default School;
