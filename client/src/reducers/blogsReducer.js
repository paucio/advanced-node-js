import mapKeys from 'lodash/mapKeys';
import { FETCH_BLOGS, FETCH_BLOG } from '../actions/types';

export default function (state = {}, action) {
  const blog = action.payload;

  switch (action.type) {
    case FETCH_BLOG:
      return { ...state, [blog._id]: blog };
    case FETCH_BLOGS:
      return { ...state, ...mapKeys(action.payload, '_id') };
    default:
      return state;
  }
}
