/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, memo } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { commentsDto, userDto } from '../../../Data/data.dto';
import { RecentComments, Comments, CommentFlex } from './postComment.style';

interface PostCommentsProps {
  comments: Array<commentsDto>;
  postid: number;
  user: userDto;
}

const PostComments: FC<PostCommentsProps> = ({ comments, postid, user }) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const handleReply = async (id: string) => {
    const { addReplies } = await import(
      'src/Redux/actions/postReducer.actions'
    );
    dispatch(addReplies(id));
  };

  return (
    <RecentComments>
      {comments.map((comment) => (
        <Comments key={comment.id}>
          <CommentFlex>
            <div>
              <a href="/">{comment.user}</a>
              {comment.comment}
            </div>
            {comment.user === user.username && (
              <BsFillTrashFill
                onClick={() => console.log(postid, comment.id)}
              />
            )}
          </CommentFlex>
          <div
            onClick={() => handleReply(comment.id)}
            style={{ cursor: 'pointer' }}
          >
            reply
          </div>
          {comment.reply.length > 0 ? (
            <PostComments
              comments={comment.reply}
              postid={postid}
              user={user}
            />
          ) : null}
        </Comments>
      ))}
    </RecentComments>
  );
};

const areEqualProps = (
  prevProps: PostCommentsProps,
  nextProps: PostCommentsProps
) => {
  if (prevProps.comments !== nextProps.comments) {
    return true;
  }
  return false;
};

export default memo(PostComments, areEqualProps);
