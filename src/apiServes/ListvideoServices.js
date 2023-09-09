import * as request from '~/utils/request';

export const listVideos = async({page=2,type='for-you'})=>{
    try{
        const res= await  request.get('/api/videos',{
          params: {
            type,
            page,
          },
         
        })
        return res.data;
    }  catch (error){
      console.log(error)
    }
}