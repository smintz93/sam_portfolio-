import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Curious and highly motivated team player with a passion for web
        development, demonstrated problem-solving ability and proven leadership
        skills.
      </SectionText>
      <Button onClock>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
