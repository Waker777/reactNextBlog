import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../../src/components/MainLayout';
import { wrapper } from '../../src/redux/store';
import { requestCreatePostAction } from '../../src/redux/asyncRequests/reauestCreatePost';
import { requestAllPostsAction } from '../../src/redux/asyncRequests/requestAllPostsAction';
import { getAllPostsAction } from '../../src/redux/actions/getAllPostsAction';
import { useDispatch } from 'react-redux';
import { CreatePost, InputTitle, InputText, ButtonCreate } from '../../src/syledComponents/content';



const NewPost = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleText = (e) => {
        setText(e.target.value);
    };
    const handleButtonCreatePost = () => {
        const data = {
            title,
            body: text,
        };
        dispatch(requestCreatePostAction(data));
        dispatch(requestAllPostsAction(getAllPostsAction));
        router.push('/');
    };
    return (
        <MainLayout>
            <CreatePost>
                <InputTitle onChange={handleTitle} value={title} placeholder="Title for post" />
                <InputText onChange={handleText} value={text} placeholder="text for post" />
                <ButtonCreate onClick={handleButtonCreatePost}>Create Post </ButtonCreate>
            </CreatePost>
        </MainLayout>
    );
};

export default wrapper.withRedux(NewPost);
