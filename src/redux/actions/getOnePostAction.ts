import { PostRetrieveType } from '../../../types/PostType';
import { GET_ONE_POST } from '../constants/common';

export const getOnePostAction = (post: PostRetrieveType) => ({
    type: GET_ONE_POST,
    payload: post,
});
