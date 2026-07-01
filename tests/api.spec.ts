import {test,expect,request} from '@playwright/test'
test('get data',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/posts')
    data:{
      title:"playwright"
    }
    expect(response.status()).toBe(200)
    const data=await response.json()
    console.log(data)
})