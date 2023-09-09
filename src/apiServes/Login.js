import * as request from '~/utils/request';

export const login = async(fD)=>{
    try{
        const res= await  request.post('/api/auth/login',fD,{
          Headers:{
            'Content-Type':`multipart/form-data; boundary=${fD}`,
            'Content-Length':fD,
          }
        }
      )
        return res.data;
    }  catch (error){
      console.log(error)
    }
}
