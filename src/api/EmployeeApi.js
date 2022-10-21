import axios from "axios";
import config from "../Config/config";

const list = async()=>{
    try {
        const result = await axios.get(`${config.domain}/api/employee/`)
        return result.data
    } catch (error) {
        return await error.message
    }
}
const Delete = async(id)=>{
    try {
        const result = await axios.delete(`${config.domain}/api/employee/${id}`)
        return result
    } catch (error) {
        return await error.message
    }
}
const Create = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/api/employee/`,payload)
        return result
    } catch (error) {
        return await error.message
    }
}
const Update = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/api/employee/${data.employeeId}`,data)
        return result
    } catch (error) {
        return await error.message
    }
}
const FindOne = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/api/employee/${id}`)
        return result.data 
    } catch (error) {
        return await error.message
    }
}
export default {list,Delete,Create,Update,FindOne}