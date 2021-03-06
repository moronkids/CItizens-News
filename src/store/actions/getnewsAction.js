import axios from 'axios';
import {GET_NEWS} from '../../types';


export const getNews = () => async dispatch => {
  try {
    const response = await axios.get (`https://app-citizenjournalism.herokuapp.com/api/v1/news/all`);
    // console.log (response.data)
    dispatch ({
      type : GET_NEWS,
      payload : response.data.result
    });
  } catch (error) {}
}




