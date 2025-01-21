import { P } from "../global";
import { Container, Footnote, Icon, IconsContainer } from "./styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/r-jheltandugon", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/r-jhel-tandugon-66052928a/", "_blank");
  };

  return (
    <Footnote>
      <Container>
        <P className="pl-2 text-xs">Made with 💖 by R-jhel</P>
        <IconsContainer>
          <Icon>
            <FiGithub onClick={handleGithubClick} />
          </Icon>
          <Icon>
            <FiLinkedin onClick={handleLinkedInClick} />
          </Icon>
        </IconsContainer>
      </Container>
    </Footnote>
  );
};

export default Footer;
