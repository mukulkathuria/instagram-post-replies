import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ADD_USER_REPLIES, POSTS_DATA } from '../types/postReducer.types';
import { DATA_ISFETCHING, DATA_SUCCEED } from '../types/reducer.default';
import { addRepliesToArray } from './postReducer.utils';

const getPosts = (type: string, subType: string, payload?: any) => ({
  type,
  subType,
  payload
});

export const getAllPosts = () => {
  const type = POSTS_DATA;
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(getPosts(type, DATA_ISFETCHING));
    const { PostsData } = await import('src/Data/default');
    dispatch(getPosts(type, DATA_SUCCEED, PostsData));
  };
};

export const addReplies = (id: string) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any) => {
    const state = getState();
    const {
      postReducer: {
        posts: { data }
      }
    } = state;
    addRepliesToArray(id, data[0].comments);
    console.log(data);
    dispatch({
      type: ADD_USER_REPLIES,
      payload: data
    });
  };
};
