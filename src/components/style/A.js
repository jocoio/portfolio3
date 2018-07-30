import styled from 'styled-components';
import { black, yellow, sourceSansFont, regularWeight } from './constants';

const A = styled.a`
  color: ${black};
  text-decoration: none;
  font-size: 14px;
  font-family: ${sourceSansFont};
  font-weight: ${regularWeight};
  box-shadow: inset 0 -0.1rem 0 0 #4AA854;
  transition: 0.1s ease-in;

  &:visited {
    color: ${black};
  }

  &:hover {
    color: ${black};
    text-decoration: none;
    color: #303030;
    box-shadow: inset 0 -1rem 0 0 ${yellow};
    transition: 0.07s ease-in;
  }

  &:selected {
    color: ${black};
  }
`;

export default A;
