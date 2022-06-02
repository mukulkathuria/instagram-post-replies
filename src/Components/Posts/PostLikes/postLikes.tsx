import React, { FC, useState } from 'react';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { userDto } from 'src/Data/data.dto';
import {
  IconDiv,
  PostLikeDiv,
  TotalLikesDiv,
  Caption
} from './postlikes.style';

interface PostLikesProps {
  totallikes: Array<string>;
  caption: string;
  postuser: string;
  user: userDto;
}

const PostLikes: FC<PostLikesProps> = ({
  totallikes,
  user,
  postuser,
  caption
}) => {
  const alreadyliked = totallikes.includes(user.username);
  const [liked, unLike] = useState(false);

  return (
    <PostLikeDiv>
      <IconDiv>
        {liked || alreadyliked ? (
          <FaHeart
            color="red"
            onClick={() => {
              unLike(false);
              // props.onremoveLike(postid, user.username);
            }}
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              unLike(true);
              // props.onaddLike(postid, user.username);
            }}
          />
        )}
        <FaRegComment />
      </IconDiv>
      <TotalLikesDiv>
        {totallikes.length > 0 ? (
          <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <FaHeart /> {`${totallikes.length}  likes`}
          </div>
        ) : null}
      </TotalLikesDiv>
      <Caption>
        <strong>{postuser}</strong>
        <div>{caption}</div>
      </Caption>
    </PostLikeDiv>
  );
};

export default PostLikes;
