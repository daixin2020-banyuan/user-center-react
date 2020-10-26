import request from '../Common/request';

export async function getUserInfo (){

   const result = await request({
      url:'http://49.235.98.65:3000/user/userinfo',
      method:  'get',
      data:{
         id:'5f9123827cac8518b1099c22'
      }
   });

   return result;
}