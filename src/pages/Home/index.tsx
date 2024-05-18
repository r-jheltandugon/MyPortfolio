import {
  Button,
  H1,
  H2,
  P,
  FlexRow,
  FlexCol,
  Highlight,
  Underline,
} from "../../components/global";
import { FiArrowDown, FiFileText } from "react-icons/fi";
import resume from "../../assets/resume.pdf";
import portrait from "../../assets/rjhel.jpg";
import { Container, Portrait, ScrollArrow, WavingHand } from "./styles";
import { RoughNotationGroup } from "react-rough-notation";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef } from "react";

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <Container id="homepage" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <FlexRow>
          <Portrait>
            <img src={portrait} alt="portrait" />
          </Portrait>
          <FlexCol className="md:justify-center">
            <H1>
              <Highlight color="rgb(125, 216, 236)">
                R-jel Tandugon <WavingHand>👋</WavingHand>
              </Highlight>
            </H1>
            <H2>
              <Highlight color="rgb(125, 216, 236)">
                &mdash;&nbsp;Full Stack Developer
              </Highlight>
            </H2>
            <P>
              A graduate of{" "}
              <Underline color="rgb(255, 198, 69)">
                Eastern Samar State University - Salcedo with a strong passion for programming
              </Underline>{" "}
              , enthusiastic about applying my software development knowledge to create innovative 
              applications. I am dedicated to further enhancing my skills and foundational knowledge 
              in full-stack development.{" "}
              <Underline color="rgb(255, 198, 69)">
              </Underline>
            </P>
            <Button className="mt-2" onClick={handleResumeClick}>
              <FiFileText />
              Resume
            </Button>
          </FlexCol>
        </FlexRow>
        <ScrollArrow>
          <P className="animate-bounce">
            <FiArrowDown size={24} />
          </P>
          <P>Scroll down</P>
        </ScrollArrow>
      </RoughNotationGroup>
    </Container>
  );
};

export default Home;
