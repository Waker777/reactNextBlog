import React from 'react';
import { MainLayout } from '../src/components/MainLayout';
import { wrapper } from '../src/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllPostsAction } from '../src/redux/asyncRequests/requestAllPostsAction';
import { requestOnePostAction } from '../src/redux/asyncRequests/requestOnePostAction';
import { getAllPostsAction } from '../src/redux/actions/getAllPostsAction';
import { PostType } from '../types/PostType';
import { getAllPostsSelector } from '../src/selectors/getAllPostsSelector';
import { PostCard } from '../src/syledComponents/content';
import { useRouter } from 'next/router';
import { getOnePostAction } from '../src/redux/actions/getOnePostAction';

const LatestPost = () => {
    const posts: PostType[] = useSelector(getAllPostsSelector);
    const dispatch = useDispatch();
    const postId = posts[posts.length - 1]?.id;
    const router = useRouter();
    const handlePostClick = (e: HTMLButtonElement) => {
        e.preventDefault();
        dispatch(requestOnePostAction(getOnePostAction, postId));
        router.push(`/posts/${postId}`);
    };
    return (
        <MainLayout>
            <PostCard onClick={handlePostClick}>
                <p>{posts[posts?.length - 1]?.title}</p>
                <hr />
                <p>{posts[posts?.length - 1]?.body}</p>
            </PostCard>
        </MainLayout>
    );
};

LatestPost.getInitialProps = async ({ store }) => {
    await store.dispatch(requestAllPostsAction(getAllPostsAction));
};

export default wrapper.withRedux(LatestPost);
