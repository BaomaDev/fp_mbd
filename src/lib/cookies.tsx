import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => cookies.get('@livetover/token');

export const setToken = (token: string) => {
  cookies.set('@livetover/token', token, { path: '/' });
};

export const removeToken = () =>
  cookies.remove('@livetover/token', { path: '/' });