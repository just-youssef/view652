import axios from "axios";

const searchAPI = async (api, searchTerm) => {
    const options = {
        // headers: {'Authorization': 'token f1238821ef165d5a25573e64e7f33431125a58ab'}, // local Sqlite3 
        headers: {'Authorization': 'token ca214354a9f30c84d45f31144fe656fb01c832b6'}, // vercel postgresql
        params: {search: searchTerm}
    };

    const { data } = await axios.get(`https://server652.vercel.app/api-root/${api}/`, options);
    // const { data } = await axios.get(`http://192.168.1.3:8000/api-root/${api}/`, options);
    return data;
}

export default searchAPI