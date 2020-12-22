import { PostType } from './PostType';
import { PostRetrieveType } from './PostType';
export type StateType = {
    server: {
        posts: PostType[]|[];
        currentPost: PostRetrieveType|{};
    };
    client: {
        posts: PostType[] | [];
        currentPost: PostRetrieveType | {};
    };
};
