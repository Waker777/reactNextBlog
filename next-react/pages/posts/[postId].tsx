import { MainLayout } from '../../src/components/MainLayout';
import { PostCard } from '../../src/syledComponents/content';
import { useSelector } from 'react-redux';
import { wrapper } from '../../src/redux/store';
import { StateType } from '../../types/ReducerStatesTypes';
import { PostRetrieveType } from '../../types/PostType';

export const Post = () => {
    const post: PostRetrieveType = useSelector((state: StateType) => state.client.currentPost);
    return (
        <MainLayout>
            <PostCard>
                <p>{post?.title}</p>
                <hr />
                <p>{post?.body}</p>
                <hr />
            </PostCard>
        </MainLayout>
    );
};

export default wrapper.withRedux(Post);
