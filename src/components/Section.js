import React from 'react';
import styled from 'styled-components';

const SectionGroup = styled.div`
  background: url(${props => props.image});
  height: 720px;
`;

const SectionLogo = styled.img``;

const SectopnTitleGroup = styled.div``;

const SectionTitle = styled.h3``;

const SectionText = styled.p``;

const Section = props => (
  <SectionGroup image={props.image}>
    <SectionLogo src={props.logo} />
    <SectopnTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectopnTitleGroup>
  </SectionGroup>
);

export default Section;
