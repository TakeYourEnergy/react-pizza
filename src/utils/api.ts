export const config = {
	url: 'https://dummyjson.com',
};

export const checkResponse = <T>(res: Response): Promise<T> => {
	return res.ok ? res.json() : Promise.reject(res.status);
};
