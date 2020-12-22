import { PostsType } from '../../../types/actionsTypes';
import { PostType } from '../../../types/PostType';
import { GET_ALL_POSTS } from '../constants/common';

export const getAllPostsAction = (posts: PostType[]): PostsType => ({
    type: GET_ALL_POSTS,
    payload: posts,
});
