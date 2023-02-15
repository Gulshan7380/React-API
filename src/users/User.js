import API from '../constant/api';

const getUserDetails = (userName) => {
    return fetch(`${API.GIHUB_URL}/users/${userName}`)
    .than(Response => Response.json())
    .than((data) => {
        return data;
    }). catch((error) => {
        console.log('Error', error);
    });

};


export {
    getUserDetails
}; 