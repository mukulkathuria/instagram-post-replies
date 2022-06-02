import styled from 'styled-components';

export const PostLikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  hr {
    border: 0.1px solid #f1f1f1;
    width: 100%;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    margin-right: 1.2rem;
    font-size: 1.2em;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TotalLikesDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  svg {
    font-size: 0.8em;
  }
`;
export const Caption = styled.div`
  display: flex;
  margin: 5px 0;
  strong {
    margin-right: 8px;
    font-weight: 600;
  }
`;
