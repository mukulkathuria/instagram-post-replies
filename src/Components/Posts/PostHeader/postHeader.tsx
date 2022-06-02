import React, { FC, memo } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Heading, HeadingImg } from './postHeader.style';

interface postHeaderProps {
  head: string;
  image: string;
}

const PostHeader: FC<postHeaderProps> = ({ head, image }) => {
  return (
    <Heading>
      <HeadingImg>
        <img src={image} alt="" />
        <div>{head}</div>
      </HeadingImg>
      <BsThreeDots />
    </Heading>
  );
};
export default memo(PostHeader);
