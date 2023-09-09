import * as request from '~/utils/request';

export const follow = async(page)=>{
    try{
        const res= await  request.get('/api/users/suggested',{
          params:{
                page,
                per_page:5,
          },
        //   headers:{
        //     Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY5MjQzMzUxMywiZXhwIjoxNjk1MDI1NTEzLCJuYmYiOjE2OTI0MzM1MTMsImp0aSI6ImZBd2NOQktYbTZPd1FVVGoiLCJzdWIiOjYwNjgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lFm_3RZb-k0pEwKXFKn6ul61an4wP2bex1ksyUTJpbs"
        //   }
        })
        return res.data;
    }  catch (error){
      console.log(error)
    }
}
