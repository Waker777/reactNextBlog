import axios from 'axios';
import { baseUrl } from '../../services/basicUrl';

export const requestOnePostAction = (action, postId: number) => {
    return (dispatch) => {
        return axios
            .get(`${baseUrl}/posts/${postId}`)
            .then((res) => {
                dispatch(action(res.data));
            })
            .catch((e) => console.log(e));
    };
};
