import * as request from '~/utils/request';

export const Videos = async(prop)=>{
  console.log(prop)
    try{
        const res= await  request.get(`/api/users${prop}`,{
          
        })
        return res.data;
    }  catch (error){
      console.log(error)
    }
}