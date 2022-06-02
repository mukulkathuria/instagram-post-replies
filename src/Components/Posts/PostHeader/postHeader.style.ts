import styled from 'styled-components';

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;
export const HeadingImg = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;

export const ModalOption = styled.div`
  div {
    margin: 8px 0;
    width: 20rem;
    cursor: pointer;
    text-align: center;
  }
  font-size: 1.2rem;
`;
