import { H1, H2, Highlight, P, Underline } from "../../components/global";
import { Container } from "./styles";
import CardIcon from "../../components/CardIcon";
import Experience from "../../components/Experience";
import School from "../../components/School"
import {
  backendStacks,
  databaseStacks,
  frontendStacks,
  programmingLanguages,
} from "../../data";
import { useIsInViewport } from "../../hooks/useIsInViewport";
import { useRef } from "react";
import { RoughNotationGroup } from "react-rough-notation";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <Container id="about" ref={ref}>
      <RoughNotationGroup show={isInViewport}>
        <H1 className="mb-4">
          <Highlight color="rgb(237, 135, 150)">About</Highlight>
        </H1>
        <H2 className="mb-1">Introduction</H2>
        <P className="mb-3">
          Hello there! I'm R-jhel, a{" "}
          <Underline color="rgb(255, 198, 69)">dedicated and creative full-stack developer with a solid 
          foundation in Web and Mobile App Development </Underline>, honed through my studies at{" "} 
          <Underline color="rgb(255, 198, 69)">Eastern Samar State University - Salcedo.</Underline> My journey in the tech world is driven 
          by a passion for continuous learning and innovation. I thrive on transforming 
          complex problems into intuitive and efficient solutions, always aiming to create 
          impactful applications that elevate user experiences and bring ideas to life.
        </P>
        <P className="mb-3">
          I have experience with building full stack web applications and web-based systems using
          <Underline color="rgb(255, 198, 69)">
            {" "}
            Vue or React.js and Bootstrap{" "}
          </Underline>
          for my frontend and{" "}
          <Underline color="rgb(255, 198, 69)">Django, and PHP </Underline>
          for my backend.
        </P>
        <H2 className="mb-4">Main Programming Languages</H2>
        <CardIcon icons={programmingLanguages} />
        <H2 className="mb-4">Frontend Frameworks</H2>
        <CardIcon icons={frontendStacks} />
        <H2 className="mb-4">Backend Frameworks</H2>
        <CardIcon icons={backendStacks} />
        <H2 className="mb-4">Database</H2>
        <CardIcon icons={databaseStacks} />
        <H2 className="mb-4">Experience</H2>
        <Experience />
        <H2 className="mb-4">School</H2>
        <School />
      </RoughNotationGroup>
    </Container>
  );
};

export default About;
