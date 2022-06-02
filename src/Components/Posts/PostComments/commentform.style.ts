import styled from 'styled-components';

export const Inputs = styled.input`
  width: 95%;
  padding: 8px;
  transition: all 0.3s linear;
  outline: none;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin: 0.7rem 0;
  :focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const SendBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  padding: 4px;
  svg {
    font-size: 1.2em;
  }
`;
