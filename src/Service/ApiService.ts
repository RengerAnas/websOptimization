import axios from 'axios';
import envConfig from '../env/env.config';

export const BASE_URL = envConfig.BASE_API_URL;

const Methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const ApiService = async (
  endPoints: string,
  method: keyof typeof Methods,
  data?: any,
  headers: any = {},
  customUrl?: string,
) => {
  try {
    const response = await axios({
      method,
      url: customUrl || BASE_URL + endPoints,
      data: data,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: any) {
    console.log('🚀 ~ error:', error.config);
    throw new Error(error);
  }
};

export default ApiService;
