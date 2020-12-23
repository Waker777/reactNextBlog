import React from 'react';
import { MainLayout } from '../../src/components/MainLayout';
import { wrapper } from '../../src/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getOnePostAction } from '../../src/redux/actions/getOnePostAction';
import { requestOnePostAction } from '../../src/redux/asyncRequests/requestOnePostAction';

import { requestAllPostsAction } from '../../src/redux/asyncRequests/requestAllPostsAction';
import { getAllPostsAction } from '../../src/redux/actions/getAllPostsAction';
import { PostType } from '../../types/PostType';
import { getAllPostsSelector } from '../../src/selectors/getAllPostsSelector';
import { PostCard } from '../../src/syledComponents/content';

const AllPosts = () => {
    const allPosts: PostType[] = useSelector(getAllPostsSelector);
    const router = useRouter();
    const dispatch = useDispatch();
    const handlePostClick = (e,postId:number) => {
        e.persist();
        dispatch(requestOnePostAction(getOnePostAction, postId));
        router.push(`/posts/${postId}`);
    };
    return (
        <MainLayout>
            {(allPosts || []).map((post) => (
                <PostCard onClick={(e)=> handlePostClick(e,post.id)} key={post.id}>
                    <p>{post.title}</p>
                    <hr />
                    <p>{post.body}</p>
                    
                </PostCard>
            ))}
        </MainLayout>
    );
};

AllPosts.getInitialProps = async ({ store }) => {
    await store.dispatch(requestAllPostsAction(getAllPostsAction));
};
export default wrapper.withRedux(AllPosts);
