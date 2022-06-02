import React, { useState, FC, memo } from 'react';
import { FaHeart } from 'react-icons/fa';
import { userDto } from '../../../Data/data.dto';
import { MainImage } from './postImage.style';

interface PostImageProps {
  image: string;
  user: userDto;
  likes: Array<string>;
  usershow: boolean;
}

const PostImage: FC<PostImageProps> = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { image, user, likes, usershow } = props;

  const [show, hide] = useState(false);

  const handleClick = () => {
    const alreadyliked = likes.includes(user.username);
    if (!alreadyliked) {
      // onaddLike(postid, user.username);
    }
    hide(() => true);
    setTimeout(() => {
      hide(() => false);
    }, 1000);
  };

  return (
    <MainImage show={usershow}>
      {show && <FaHeart color="red" />}
      <img src={image} alt="" onDoubleClick={handleClick} />
    </MainImage>
  );
};

export default memo(PostImage);
