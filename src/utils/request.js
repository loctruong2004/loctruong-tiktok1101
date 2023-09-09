import axios from 'axios';
const request = axios.create({
    // baseURL:'https://tiktok-video-no-watermark2.p.rapidapi.com/'
    baseURL:'https://tiktok.fullstack.edu.vn'
})

export const get = async(path,option={})=>{
    const response = await request.get(path,option);
    return response.data
}
export const post = async(path,option={})=>{
    const response = await request.post(path,option);
    localStorage.setItem("token",response.data.meta.token)
    return response.data

}
export default request