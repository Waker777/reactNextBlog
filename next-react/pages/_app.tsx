import React, { FC } from 'react';
// // import { AppProps } from 'next/app';
import { baseUrl } from '../src/services/basicUrl';
// import { requestAllPostsAction } from '../src/redux/asyncRequests/requestAllPostsAction';
import { getAllPostsAction } from '../src/redux/actions/getAllPostsAction';
import { wrapper } from '../src/redux/store';
import '../styles/globals.css';

const MyBlogApp = ({ Component, pageProps, store }) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyBlogApp);
