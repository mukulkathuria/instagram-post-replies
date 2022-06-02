// eslint-disable-next-line object-curly-newline
import React, { FC, lazy, memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { UserData } from 'src/Data/default';
import { postReducerDto } from 'src/Redux/dtos/postReducer.dto';
import { PostsDiv, Post, CommentInput } from './posts.component.style';
import { postsDto } from '../../Data/data.dto';
import Loader from '../Loader';

// interface postCommentsDto {
//   posts: postsDto[];
//   user: userDto;
// }

const PostHeader = lazy(() => import('./PostHeader/postHeader'));
const PostImage = lazy(() => import('./PostImage/postImage'));
const PostLikes = lazy(() => import('./PostLikes/postLikes'));
const PostComments = lazy(() => import('./CommentBox/postComments'));
const CommentForm = lazy(() => import('./PostComments/commentform'));

const PostComponent: FC = () => {
  const { data } = useSelector(
    (state: postReducerDto) => state.postReducer.posts
  );
  const user = UserData;

  if (!data) {
    return <Loader />;
  }

  return (
    <PostsDiv>
      {data.map((list: postsDto) => (
        <Suspense fallback={<Loader />} key={list.id}>
          <Post key={list.id}>
            <PostHeader head={list.heading} image={list.headImg} />
            <PostImage
              image={list.ImgUrl}
              user={user}
              likes={list.like}
              usershow
            />
            <PostLikes
              totallikes={list.like}
              // postid={list.id}
              user={user}
              postuser={list.heading}
              caption={list.caption}
            />
            <PostComments
              user={user}
              postid={list.id}
              comments={list.comments}
            />
            <CommentInput>
              <CommentForm users={user} postid={list.id} />
            </CommentInput>
          </Post>
        </Suspense>
      ))}
    </PostsDiv>
  );
};
export default memo(PostComponent);
