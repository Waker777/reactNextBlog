import { StateType } from '../../types/ReducerStatesTypes';

export  const getAllPostsSelector = (state:StateType) => state.client.posts;