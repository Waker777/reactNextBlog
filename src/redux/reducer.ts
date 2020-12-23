import { GET_ALL_POSTS, GET_ONE_POST } from './constants/common';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { StateType } from '../../types/ReducerStatesTypes';

const initialState: StateType = {
    server: {
        posts: [],
        currentPost: {},
    },
    client: {
        posts: [],
        currentPost: {},
    },
};

export const reducer = (state = initialState, action: AnyAction): StateType => {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state,
                server: {
                    ...state.server,
                    posts: action.payload.server.posts,
                    currentPost: action.payload.server.currentPost,
                },
                client: {
                    posts: action.payload.client.posts,
                    currentPost: action.payload.client.currentPost,
                },
            };
        }
        case GET_ALL_POSTS: {
            return {
                ...state,
                client: {
                    ...state.client,
                    posts: [...action.payload],
                },
            };
        }
        case GET_ONE_POST: {
            return {
                ...state,
                client: {
                    ...state.client,
                    currentPost: action.payload,
                },
            };
        }
        default:
            return state;
    }
};
