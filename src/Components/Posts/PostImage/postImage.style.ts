import styled from 'styled-components';

interface divProps {
  show: boolean;
}

export const MainImage = styled.div<divProps>`
  width: 100%;
  height: ${(props) => (props.show ? '30rem' : '35rem')};
  margin: ${(props) => (props.show ? '0' : '0.7em 0')};
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  svg {
    position: absolute;
    font-size: 6rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
