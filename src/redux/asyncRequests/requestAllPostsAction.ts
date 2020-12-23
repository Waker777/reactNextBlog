import axios from 'axios';
import { baseUrl } from '../../services/basicUrl';


export const requestAllPostsAction = (action) => {
    return (dispatch) => {
        return axios
            .get(`${baseUrl}/posts`)
            .then((res) => dispatch(action(res.data)))
            .catch((e) => console.log(e));
    };
};
