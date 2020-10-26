import request from '../Common/request';

export async function showExchangeLog (){

   const result = await request({
      url:'http://49.235.98.65:3000/shop/exchangedRecord',
      method:  'get',
      data:{
         id:'5f9123827cac8518b1099c22'
      }
   });

   return result;
}