export const apiCall = 'apiCall';
export const apiCallSuccess = 'apiCallSuccess';
export const apiCallError = 'apiCallError';

export const getData = () => {
    return {
        type:"apiCall"
    }
}
export const getDataSuccess = (users) => {
    return {
        type:"apiCallSuccess",
        payload:users
    }
}
export const getDataError = (userErrror) => {
    return {
        type:"apiCallError",
        payload:userErrror
    }
}