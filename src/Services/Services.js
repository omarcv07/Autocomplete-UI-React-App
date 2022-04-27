import axios from "axios";
import { BASE_PATH } from "../Utils/Utils";

export const getSearchData = async (value) => {
    const response = await axios.get(BASE_PATH, { params: { search: value } });

    return response.data;
}