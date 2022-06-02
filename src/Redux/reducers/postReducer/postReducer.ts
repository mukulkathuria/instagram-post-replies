/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import { actionDto } from '../../dtos/common.filters.dto';
import { ADD_USER_REPLIES, POSTS_DATA } from '../../types/postReducer.types';
import { getReducerData } from '../../utils/reducer.common.utils';
import { initialState } from './postReducer.initialValue';

const postReducer = (state = initialState, action: actionDto) => {
  const { type, subType, payload } = action;
  switch (type) {
    case POSTS_DATA: {
      if (subType) {
        return {
          ...state,
          posts: getReducerData(subType, state.posts, payload)
        };
      }
      return state;
    }

    case ADD_USER_REPLIES:
      return {
        ...state,
        posts: {
          ...state.posts,
          data: payload
        }
      };

    default:
      return state;
  }
};

export default postReducer;
