import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../src/redux/store';
import '../styles/globals.css';

const MyBlogApp: FC<AppProps> = ({ Component, pageProps}) => {
    return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyBlogApp);
