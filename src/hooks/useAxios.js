import api from '../services/api';

export const UseAxios = async(userAmount) => {
    try {
        const result = await api.get(`?amount=${userAmount}`);
        return result.data.results;
    }catch (err) {
        return err;
    }
}