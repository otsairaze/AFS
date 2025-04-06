import { API_URL } from '@/api/constants';
import { api } from '@/api/instance';

export const getCheese = async () => {
  try {
    return await api.get(API_URL.GET_CHEESE);
  } catch (error) {
    console.error('Ошибка при выполнении запроса:');
    throw error;
  }
};
