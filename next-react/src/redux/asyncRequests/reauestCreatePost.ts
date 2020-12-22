import { CREATE_POST } from '../constants/common';
import axios from 'axios';
import { baseUrl } from '../../services/basicUrl';
type NewPostType = {
    title: string;
    body: string;
};
export const requestCreatePostAction = (data: NewPostType) => {
    return (dispatch) => {
        return axios
            .post(`${baseUrl}/posts`,data)
            .then((res) => dispatch({ type: CREATE_POST }))
            .catch((e) => console.warn(e));
    };
};
